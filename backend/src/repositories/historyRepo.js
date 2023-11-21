const { FileRecord, FileHistory } = require('../repositories/model')
const historyRepo = {
  //*create a new log
  create_log: async (
    student_ID,
    printer_ID,
    file_ID,
    start_print_date,
    end_print_date,
    page_amount
  ) => {
    const new_log = new FileHistory(
      student_ID,
      printer_ID,
      file_ID,
      start_print_date,
      end_print_date,
      page_amount
    )
    const add_log_to_database = await new_log.save()
    return add_log_to_database
  },
}

module.exports = historyRepo
