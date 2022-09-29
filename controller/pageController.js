const Page = require("../models/Page");

async function getPage(req, res, next) {
  try {
    let data
    let page = await Page.findById(req.params.pageID)
    const groupID = req.query.groupID
    if (groupID) {
      let subpage = await page.subcontent.id(groupID)
      subpage = subpage.toObject()
      data = {
        ...subpage,
        content: JSON.stringify(subpage.content)
      }
    } else {
      page = page.toObject()
      data = {
        ...page,
        content: JSON.stringify(page.content)
      }
    }
    res.locals.data = data
    res.locals.groupID = groupID
    if (page.type === "page" || groupID) res.render("page")
    else if (page.type === "group") res.render("page1")

  } catch (err) {
    console.log(err)
    next(err);
  }
}

async function createNewBlock(req, res, next) {
  try {
    const data = {}
    const type = req.query.type == '1' ? "page" : "group"
    const groupID = req.query.groupID
    data.type = type
    
    if (type === "page") {
      data.title = "💎 New page title"
      data.content = '{\"time\":1651344695093,\"blocks\":[{\"id\":\"ze-NSYfMpE\",\"type\":\"paragraph\",\"data\":{\"text\":\"Start Here\"}}],\"version\":\"2.24.1\"}'
    } else if (type === "group") {
      data.title = "New group title"
      data.content = "{}"
    }
    
    let block
    if (groupID) {
      block = await Page.findById(groupID)
      block.subcontent.push(data)
    } else {
      block = new Page(data)
    }

    await block.save()
    res.redirect("/dashboard")
  } catch (err) {
    console.log(err)
    next(err);
  }
}

async function toggleVisibility(req, res, next) {
  try {
    const page = await Page.findById(req.params.pageID)
    const groupID = req.query.groupID
    if (groupID) {
      const subpage = await page.subcontent.id(groupID)
      subpage.visible = !subpage.visible
    } else {
      page.visible = !page.visible
      page.subcontent.forEach(function(subpage) {
        subpage.visible = !subpage.visible
      })
    }
    await page.save()
    res.redirect("/dashboard")
  } catch (err) {
    next(err);
  }
}

async function uploadBlockFile(req, res, next) {
  try {
    const path = "/assets/img/" + req.file.filename
    res.json({
      success : 1,
      file: { url : path }
    })
  } catch (err) {
    next(err);
  }
}

async function updateOrderOfDocs(req, res, next) {
  try {
    const promises = req.body.map(async (pageID, idx) => {
      return Page.findByIdAndUpdate(pageID, { $set: { order: idx } })
    })
    await Promise.all(promises)
    res.json({ success: true })
  } catch (err) {
    next(err);
  }
  
}

async function deleteblock(req, res, next) {
  try {
    const groupID = req.query.groupID
    const pageID = req.params.pageID
    if (groupID) {
      await Page.findByIdAndUpdate(pageID, { $pull : { subcontent: { _id: groupID } } })
    } else {
      await Page.findByIdAndDelete(pageID)
    }

    res.redirect("/dashboard")
  } catch (err) {
    console.log(err)
    next(err);
  }
}

async function updatePage(req, res, next) {
  try {
    const groupID = req.query.groupID
    const pageID = req.params.pageID
    const page = await Page.findById(pageID)
    const data = {
      ...req.body,
      title: req.body.title || "Sample title here",
      content: JSON.stringify(req.body.content)
    }

    if (groupID) {
      const subpage = await page.subcontent.id(groupID)
      Object.assign(subpage, data)
    } else {
      Object.assign(page, data)
    }

    await page.save()
    res.status(200).json({ message: "page updated successfully!" })
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

async function getSinglePage(req, res, next) {
  try { 
    const pageID = req.params.pageID
    const groupID = req.query.groupID
    let data = {}

    const page = await Page.findById(pageID)
    if (groupID) {
      const subpage = page.subcontent.id(groupID)
      data = subpage
    } else {
      data = page
    }
    
    res.json(data)
  } catch (err) {
    console.log(err)
    res.json({ message: "something went wrong!" })
  }
}

module.exports = {
  getSinglePage,
  createNewBlock,
  getPage,
  updatePage,
  deleteblock,
  toggleVisibility,
  uploadBlockFile,
  updateOrderOfDocs
}