/* Your Code Here */
let employeeRecords = [];

const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
  let employeeRecord = {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  employeeRecords.push(employeeRecord);
  return employeeRecord;
};
const createEmployeeRecords = (employee) => {
    let employeeContainer = [];
    employee.map((e) => {
      employeeContainer.push(createEmployeeRecord(e));
    });
    return employeeContainer;
  };
  
  function createTimeInEvent(events) {
      let [date, hour] = events.split(' ')
      this.timeInEvents.push({
          'type': 'TimeIn',
          'hour': parseInt(hour, 10),
          'date': date

      })
      return this
  }
  
  function createTimeOutEvent(events) {
    let [date, hour] = events.split(' ')
    this.timeOutEvents.push({
        'type': 'TimeOut',
        'hour': parseInt(hour, 10),
        'date': date
    })
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date)
    let timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(obj => obj.firstName === firstNameString )
}

function calculatePayroll(array) {
    return array.reduce((runningtotal, element) => runningtotal + allWagesFor.call(element), 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const completeWages = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

