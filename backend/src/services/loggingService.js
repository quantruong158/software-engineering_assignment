const historyRepo = require('../repositories/historyRepo')

const loggingService = {
  createLog: async (
    student_ID,
    printer_ID,
    file_ID,
    start_print_date,
    end_print_date,
    page_amount
  ) => {
    const create_new_log = await historyRepo.create_log(
      student_ID,
      printer_ID,
      file_ID,
      start_print_date,
      end_print_date,
      page_amount
    )
    return create_new_log
  },
}

module.exports = loggingService