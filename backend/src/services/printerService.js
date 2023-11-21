const printerRepo = require("../repositories/printerRepo");
const printerService = 
{
    // ADD 1 PRINTER
    addnewprinter(req) {
        return printerRepo.addaprinter(req) ;
    },
    //GET ALL PRINTERS
    getallprinters() {
        return printerRepo.getallprinter();
    },
  
    //GET A PRINTER
    finditbyID(id) {
        return printerRepo.finditbyIDrepo(id); // find a printer 
    },
  
    //UPDATE PRINTER
    Updatingprinter(req){
        return printerRepo.Updatingprinterrepo(req);  
    },
  
    //DELETE PRINTER
    findByIdAndDeleteit(id){
        printerRepo.findByIdAndDeleteitrepo(id);
    }
}
  module.exports = printerService;