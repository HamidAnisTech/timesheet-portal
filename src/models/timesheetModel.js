class TimeSheetModel {
  constructor({ userId, hoursWorked, projectId, startTime, endTime }) {
    this.userId = userId;
    this.date = new Date().toISOString().split("T")[0];
    this.hoursWorked = hoursWorked;
    this.projectId = projectId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.status = "submitted";
  }
}

export default TimeSheetModel;
