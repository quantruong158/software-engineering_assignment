const printerService = require("../services/printerService");
const printerController = {
  // ADD 1 PRINTER
  addAPrinter: async (req, res) => {
    try {
      const SavednewPrinter = await printerService.addnewprinter(req) 
      res.status(200).json(SavednewPrinter);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL PRINTERS
  getAllPrinter: async (req, res) => {
    try {
      const allprinters = await printerService.getallprinters();
      res.status(200).json(allprinters);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A PRINTER
  getAPrinter: async (req, res) => {
    try {
      const printer = await printerService.finditbyID(req.params.id);
      res.status(200).json(printer);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE PRINTER
  updatePrinter: async (req, res) => {
    try {
      const printerUpdate = await printerService.Updatingprinter(req);
      res.status(200).json("Updated successfully !");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE PRINTER
  deletePrinter: async (req, res) => {
    try {
      await printerService.findByIdAndDeleteit(req.params.id);
      res.status(200).json("Deleted successfully !");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = printerController;