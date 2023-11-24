const { Printer } = require('./model')
const printerRepo = {
  // ADD 1 PRINTER
  addAPrinter: async (req) => {
    const newPrinter = new Printer(req.body)
    const savedPrinter = await newPrinter.save()
    return savedPrinter
  },
  //GET ALL PRINTERS
  getallprinter: async () => {
    const allprinters = await Printer.find() // find all users in userchema
    return allprinters
  },

  //GET A PRINTER
  finditbyIDrepo: async (id) => {
    const printer = await Printer.findById(id) // find a printer
    return printer
  },

  //UPDATE PRINTER
  Updatingprinterrepo: async (req) => {
    const printer = await Printer.findById(req.params.id)
    await printer.updateOne({ $set: req.body })
    return
  },

  //DELETE PRINTER
  findByIdAndDeleteitrepo: async (id) => {
    await Printer.findByIdAndDelete(id)
    return
  },
}
module.exports = printerRepo
