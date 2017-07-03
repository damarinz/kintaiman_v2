import DateUtils from '../DateUtils';
import TimeSheet from '../TimeSheet';

export default class Leaving {
  run(settings, userName, message) {
    const utils = new DateUtils();
    const [month, day] = utils.parseDate(message);
    const time = utils.parseTime(message);

    const timeSheetId = settings.getTimeSheetId(month);
    if (!timeSheetId) return;

    const timeSheet = new TimeSheet(timeSheetId);
    const userSheetName = settings.getUserSheetName(userName);
    return timeSheet.setLeavingTime(userSheetName, day, time);
  }
}
