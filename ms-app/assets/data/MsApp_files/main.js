(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/calendar-modules/template.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calendar-modules/template.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\"\n      >\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"switchView(CalendarView.Month)\"\n        [class.active]=\"view === CalendarView.Month\"\n      >\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"switchView(CalendarView.Week)\"\n        [class.active]=\"view === CalendarView.Week\"\n      >\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"switchView(CalendarView.Day)\"\n        [class.active]=\"view === CalendarView.Day\"\n      >\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (dayClicked)=\"switchView(CalendarView.Day,$event)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n<!-- [activeDayIsOpen]=\"activeDayIsOpen\"  To enable event slider when click / Load page-->\n<!-- Modal window -->\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n      OK\n    </button>\n  </div>\n</ng-template>\n\n<!-- Modal ends here -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Admin Dashboard</title>\n</head>\n<body>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">MS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n<!-- Navigation bar -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<!-- Navigation bar ends -->\n<!-- Calendar section  starts -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2 side_nav\">  \n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNewEventClick()\"> New Event</button>\n\n      <div class=\"searchUserDiv\">\n          <form action=\"\" #searchUserForm=\"ngForm\" class=\"justify-content-center\">\n          <div class=\"form-group\">\n              <div class=\"ng-autocomplete\">\n                <ng-autocomplete #ngAutoCompleteStatic\n                                 [data]=\"userArrayClone\"\n                                 name=\"name\"\n                                 (selected)=\"fetchEventsUserWise($event)\"\n                                 (inputCleared) = \"clearUserEvents()\"\n                                 [(ngModel)]=\"searchUsers\"\n                                 [initialValue]=\"testUser\"\n                                 [placeHolder]=\"searchUserPlaceholder\"\n                                 [searchKeyword]=\"keyword\"\n                                [itemTemplate]=\"itemTemplateStatic\"\n                                 #clearInput\n                                 >\n                </ng-autocomplete>\n                <ng-template #itemTemplateStatic let-item>\n                  <a [innerHTML]=\"item\"></a>\n                </ng-template>\n\n              </div>\n\n          </div>\n          </form>\n          <div class=\"userEvents\"> \n              <span *ngFor=\"let events of userWiseloadedEvents\">\n                 <div class=\"eventTitle\" (click)=\"showUserwiseEvents(events.id)\"><fa-icon class=\"iconStyle\" [icon]=\"faCaretRight\"></fa-icon> {{events.title}}</div>  \n                <div class=\"eventDateSmall\">{{events.start | date:'medium'}}</div>\n              </span>\n             </div>\n      </div> <!-- Search user parent Div ends-->\n    </div>\n    <div class=\"col-md-10 calendar_col\">\n      <mwl-calendar-component [newEvents]=\"newEvents\" [newViewDate] (updateEventDataEmitter) = \"OpenUpdateForm($event)\"></mwl-calendar-component>\n    </div>\n\n  </div> <!-- row-->\n  <!-- Calendar ends -->\n</div> <!-- Container -->\n<!-- Calendar section  starts -->\n\n\n<!-- Modal -->\n<ng-template #newEventModal let-close=\"close\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">{{eventFormTitle}}</h5>\n      <button type=\"button\" class=\"close\" (click)=\"closeNewEventModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"newEvent-form\">\n                      \n            <form action=\"\" #newEventForm=\"ngForm\" (ngSubmit)=\"newEventSubmitted()\"  class=\"justify-content-center\">\n                <div class=\"form-group\">\n                    <label class=\"sr-only\">Title</label>\n                    <input type=\"text\" [(ngModel)]=\"eventTitle\" name=\"title\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Title\" required>\n                    <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger text-left\">\n                        <div *ngIf=\"title.errors.required\">\n                            title is required.\n                          </div>\n                    </div>\n                </div> \n\n\n                <div class=\"form-group\">\n                  <label class=\"sr-only\">Choose attendees</label>\n                  <div class=\"ng-autocomplete\">\n                    <ng-autocomplete #ngAutoCompleteStatic\n                                     [data]=\"userArrayClone\"\n                                     name=\"name\"\n                                     (selected)=\"selectedAttendeesFn($event)\"\n                                     [(ngModel)]=\"eventAttendees\"\n                                     [initialValue]=\"\"\n                                     [placeHolder]=\"placeholder\"\n                                     [searchKeyword]=\"keyword\"\n                                    \n                                    [itemTemplate]=\"itemTemplateStatic\"\n                                  \n                                     >\n                    </ng-autocomplete>\n                    <!-- [notFoundTemplate]=\"notFoundTemplate\" \n                     notFoundText=\"Not found\"\n                    -->\n                    <ng-template #itemTemplateStatic let-item>\n                      <a [innerHTML]=\"item\"></a>\n                    </ng-template>\n                    <!-- <ng-template #notFoundTemplate let-notFound>\n                      <div [innerHTML]=\"notFound\"></div>\n                    </ng-template> -->\n                    \n\n                  </div>\n                  <div class=\"attendees\"> \n                    <span *ngFor=\"let attendee of selectedAttendees\">\n                      {{attendee.name}}\n                      <fa-icon class=\"iconStyle\" [icon]=\"faTimes\" (click)=\"removeAttendee(attendee.name)\"></fa-icon>\n                    </span>\n                   </div>\n\n                  <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Choose attendees\" [(ngModel)]=\"attendeesInput\" name=\"attendees\" #attendees=\"ngModel\" required> -->\n                  <!-- \n                    historyIdentifier=\"countriesTemplateList\"\n                                     [historyHeading]=\"historyHeading\"\n                                     historyListMaxNumber=\"3\"\n                  <div *ngIf=\"last.invalid && (last.dirty || last.touched)\" class=\"alert alert-danger text-left\">\n                      <div *ngIf=\"last.errors.required\">\n                          last name is required.\n                      </div>\n                  </div> -->\n\n              </div>\n\n                <div class=\"dateTimeWrapper\">\n                <div class=\"form-group startDateDiv\">\n                    <label class=\"sr-only\">Start Date</label>\n\n                    <input [(ngModel)]=\"startDate\" #start=\"ngModel\" name=\"start\" class=\"form-control\" placeholder=\"Start Date\"\n                 [owlDateTimeTrigger]=\"dtPicker1\" [owlDateTime]=\"dtPicker1\" required>\n                 <owl-date-time #dtPicker1></owl-date-time>\n                </div>\n                <!-- Start Date ends here-->\n\n                <div class=\"startTimeDiv\">\n                  <input [(ngModel)]=\"endDate\" class=\"form-control\" #end=\"ngModel\" name=\"end\" placeholder=\"End Date\"\n                  [owlDateTimeTrigger]=\"dtPicker2\" [owlDateTime]=\"dtPicker2\" required>\n                  <owl-date-time #dtPicker2></owl-date-time>\n                </div> \n                <!-- Start Date ends here-->\n               </div> \n\n               <div class=\"form-group\">\n                <label class=\"sr-only\">Location</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"eventLocation\" name=\"location\" #location=\"ngModel\" placeholder=\"Location\" required>\n                <div *ngIf=\"location.invalid && (location.dirty || location.touched)\" class=\"alert alert-danger text-left\">\n                    <div *ngIf=\"location.errors.required\">\n                        location is required.\n                      </div>\n                </div>\n            </div>\n\n                <div class=\"form-group\">\n                    <label class=\"sr-only\"> Description</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"eventDescription\" name=\"description\" #description=\"ngModel\" placeholder=\"Description\" required>\n                    <div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"alert alert-danger text-left\">\n                        <div *ngIf=\"description.errors.required\">\n                            description is required.\n                          </div>\n                    </div>\n                </div>\n\n                <button type=\"submit\" [disabled]=\"!newEventForm.form.valid\" class=\"btn mt-2 \">{{eventFormButtonName}}</button>\n                <ng-container *ngIf=\"updateEventButton\"><button type=\"button\" (click)=\"deleteEvent(eventId)\"  class=\"btn mt-2 ml-4\">Delete</button></ng-container>\n            </form>\n        </div>\n    </div>\n\n  </ng-template>\n  <!-- Modal ends -->\n\n  <ngx-ui-loader></ngx-ui-loader>\n  \n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/event-dashboard/user-dashboard/user-dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/event-dashboard/user-dashboard/user-dashboard.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>User Dashboard</title>\n</head>\n<body>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">MS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n<!-- Navigation bar -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<!-- Navigation bar ends -->\n<!-- Calendar section  starts -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12 calendar_col\">\n      <mwl-calendar-component [newEvents]=\"newEvents\" (updateEventDataEmitter)=\"viewEvent($event)\"></mwl-calendar-component>\n    </div>\n\n  </div> <!-- row-->\n  <!-- Calendar ends -->\n</div> <!-- Container -->\n<!-- Calendar section  starts -->\n\n\n<!-- Modal -->\n<ng-template #newEventModal let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">{{eventFormTitle}}</h5>\n    <button type=\"button\" class=\"close\" (click)=\"closeEventModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"newEvent-form\">\n                    \n          <form action=\"\" #newEventForm=\"ngForm\"  class=\"justify-content-center\">\n              <div class=\"form-group\">\n                  <div class=\"eventTitleStyle\"> \n                      <span class=\"eventDataHeading\">Title</span>\n                      <span>\n                       {{eventTitle}}\n                      </span>\n                     </div>\n              </div> \n\n\n              <div class=\"form-group\">\n                <div class=\"eventTitleStyle\"> \n                  <span class=\"eventDataHeading\">Attendees</span>\n                  <span *ngFor=\"let attendee of selectedAttendees\">\n                   <fa-icon class=\"iconStyle mr-1\" [icon]=\"faAngleRight\" ></fa-icon>{{attendee.name}}\n                  </span>\n                 </div>\n            </div>\n\n              <div class=\"dateTimeWrapper mb-2\">\n                  <div class=\"eventTitleStyle\"> \n                      <span class=\"eventDataHeading\">Start Date</span><br>\n                      <span>\n                       {{startDate | date:'medium'}}\n                      </span>\n                     </div>\n              <!-- Start Date ends here-->\n\n              <div class=\"eventTitleStyle\"> \n                  <span class=\"eventDataHeading\">End Date</span><br>\n                  <span >\n                      {{endDate | date:'medium'}}\n                  </span>\n                 </div>\n              <!-- Start Date ends here-->\n             </div> \n\n             <div class=\"form-group\">\n                <div class=\"eventTitleStyle\"> \n                    <span class=\"eventDataHeading\">Location</span>\n                    <span >\n                     {{eventLocation}}\n                    </span>\n                   </div>\n          </div>\n\n              <div class=\"form-group\">\n                  <div class=\"eventTitleStyle\"> \n                      <span class=\"eventDataHeading\">Description</span>\n                      <span>\n                       {{eventDescription}}\n                      </span>\n                     </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                    <div class=\"eventTitleStyle\"> \n                        <span class=\"eventDataHeading\">Created By</span>\n                        <span>\n                         {{createdBy}}\n                        </span>\n                       </div>\n                  </div>\n          </form>\n      </div>\n  </div>\n\n</ng-template>\n<!-- Modal ends -->\n\n\n\n<!-- Modal -->\n<ng-template #reminderModal let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Reminder</h5>\n   \n  </div>\n  <div class=\"modal-body text-center\">\n    <div class=\"container\" >\n        <div class=\"reminderTitleText\"> {{reminderTitle}} </div>\n        <div class=\"reminderDateText\">{{reminderStart | date:'medium'}} </div>\n        <div class=\"dateDiv mt-5 mb-4\"><span class=\"reminderButton\" (click)=\"dismissReminder()\">Dismiss</span><span (click)=\"snoozeReminder(reminderTitle,reminderStart)\" class=\"reminderButton\">Snooze</span></div>\n      </div> \n  </div>\n\n</ng-template>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Login</title>\n</head>\n<body>\n    <section id=\"cover\">\n        <div id=\"cover-caption\">\n            <div class=\"container\">\n                <div class=\"row text-white\">\n                    <div class=\"col-sm-6 offset-sm-3 text-center\">\n                        <div class=\"login-form\">\n                            <form #forgotPasswordForm=\"ngForm\">\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">email</label>\n                                    <input type=\"text\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" placeholder=\"email\" [(ngModel)]=\"emailId\" name=\"email\" #email=\"ngModel\"  required>\n                                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"email.errors.required\">\n                                            email is required.\n                                          </div>\n                                          <div *ngIf=\"email.errors.pattern\">\n                                            email is invalid.\n                                          </div>\n                                         \n                                    </div>\n                                </div>\n                                <button type=\"submit\" [disabled]=\"!forgotPasswordForm.form.valid\" (click)=\"resetPassword()\" class=\"btn mt-2\">Send link</button>\n                                </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"text-center mt-5\">\n                    <a href=\"/login\">Login</a>\n\n                </div>\n\n            </div> <!-- Container -->\n         \n        </div>\n    </section>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Login</title>\n</head>\n<body>\n    <section id=\"cover\">\n        <div id=\"cover-caption\">\n            <div class=\"container\">\n                <div class=\"row text-white\">\n                    <div class=\"col-sm-6 offset-sm-3 text-center\">\n                        <h1 class=\"display-4 mt-4\">Login</h1>\n                        <div class=\"login-form\">\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">username</label>\n                                    <input type=\"text\" id=\"user\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"username\" autofocus>\n                                    <div [ngClass]=\"{'validation-user': triggerErrorUser == true}\">Enter username</div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">Password</label>\n                                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"password\">\n                                    <div [ngClass]=\"{'validation-pass': triggerErrorPass == true}\">Enter Password</div>\n                                </div>\n\n                                <button type=\"button\" (click)=\"logInFunction()\" class=\"btn mt-2\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"text-center mt-5\">\n                    <a href=\"/forgot-password\" class=\"\">forgot password</a> \n\n                </div>\n                <div class=\"text-center mt-2\">\n                    create an account? <a href=\"/signup\">Sign up</a>\n\n                </div>\n\n            </div> <!-- Container -->\n         \n        </div>\n    </section>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/resetpassword/resetpassword.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/resetpassword/resetpassword.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Reset Password</title>\n</head>\n<body>\n        <section id=\"cover\">\n                <div id=\"cover-caption\">\n                    <div class=\"container\">\n                        <div class=\"row text-white\">\n                            <div class=\"col-sm-6 offset-sm-3 text-center\">\n                                <div class=\"login-form\">\n                                    <form #forgotPasswordForm=\"ngForm\">\n                                        <div class=\"form-group\">\n                                            <label class=\"sr-only\">email</label>\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" [(ngModel)]=\"password\" name=\"pass\" #email=\"pass\"  required>\n                                            <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"alert alert-danger text-left\">\n                                                <div *ngIf=\"pass.errors.required\">\n                                                    password is required.\n                                                  </div>\n                                                 \n                                            </div>\n                                        </div>\n                                        <button type=\"submit\" [disabled]=\"!forgotPasswordForm.form.valid\" (click)=\"resetPassword()\" class=\"btn mt-2\">Send link</button>\n                                        </form>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"text-center mt-5\">\n                            <a href=\"/login\">Login</a>\n        \n                        </div>\n        \n                    </div> <!-- Container -->\n                 \n                </div>\n            </section>\n</body>\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Signup</title>\n</head>\n<body>\n    <section id=\"cover\">\n        <div id=\"cover-caption\">\n            <div class=\"container\">\n                <div class=\"row text-white\">\n                    <div class=\"col-sm-6 offset-sm-3 text-center\">\n                            <h1 class=\"display-4 mt-4\">Signup</h1>\n                        <div class=\"login-form\">\n                            \n                            <form action=\"\" #signUpForm=\"ngForm\" (ngSubmit)=\"formSubmitted()\"  class=\"justify-content-center\">\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">username</label>\n                                    <input type=\"text\" [(ngModel)]=\"user\" name=\"username\" #username=\"ngModel\" class=\"form-control\" placeholder=\"username\" minlength=\"4\" required>\n                                    <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger text-left\">\n\n                                        <div *ngIf=\"username.errors.required\">\n                                            username is required.\n                                          </div>\n                                          <div *ngIf=\"username.errors.minlength\">\n                                            username must be 4 characters long.\n                                          </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">Password</label>\n                                    <input type=\"password\" [(ngModel)]=\"pass\"  name=\"pass\" #password=\"ngModel\" class=\"form-control\" placeholder=\"password\" minlength=\"6\" required>\n                                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"password.errors.required\">\n                                            password is required.\n                                          </div>\n                                          <div *ngIf=\"password.errors.minlength\">\n                                            password must be 6 characters long.\n                                          </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\"> FirstName</label>\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" name=\"first\" #first=\"ngModel\" placeholder=\"FirstName\" required>\n                                    <div *ngIf=\"first.invalid && (first.dirty || first.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"first.errors.required\">\n                                            first name is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">LastName</label>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"LastName\" [(ngModel)]=\"lastName\" name=\"last\" #last=\"ngModel\" required>\n\n                                    <div *ngIf=\"last.invalid && (last.dirty || last.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"last.errors.required\">\n                                            last name is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"sr-only\">email</label>\n                                    <input type=\"text\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" placeholder=\"email\" [(ngModel)]=\"emailId\" name=\"email\" #email=\"ngModel\"  required>\n                                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"email.errors.required\">\n                                            email is required.\n                                          </div>\n                                          <div *ngIf=\"email.errors.pattern\">\n                                            email is invalid.\n                                          </div>\n                                         \n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                        <label class=\"sr-only\">country</label>\n                                        <select (change)=\"countrySelected($event)\" class=\"form-control\" name=\"countryName\" [(ngModel)]=\"countryName\" #country=\"ngModel\"  required>\n                        \n                                                <option *ngFor=\"let country of countryList\" [value]=\"country.code\">\n                                                    {{country.name}}\n                                                  </option>\n                                                </select>\n\n                                    </div>\n\n                                <div class=\"form-group mobile-container\">\n                                   <div class=\"c_code\"> \n                                        <input type=\"text\" readonly name=\"countryCode\" #countryCode [(ngModel)]=\"countryCodeInput\" class=\"form-control text-center\" placeholder=\"\">\n                                   </div>\n\n                                   <div class=\"mobile_no\">\n                                    <input type=\"number\" class=\"form-control\" pattern=\"^\\d{10}$\" name=\"mobile_no\" [(ngModel)]=\"mobile_no\" minlength=\"10\" #mobile=\"ngModel\" placeholder=\"mobile no\" required>\n\n                                    <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger text-left\">\n                                        <div *ngIf=\"mobile.errors.required\">\n                                            Mobile no is required.\n                                          </div>\n                                          <div *ngIf=\"mobile.errors.pattern\">\n                                            Mobile no is invalid.\n                                          </div>\n                                         \n                                    </div>\n\n                                </div>\n\n                                </div>\n                                <button type=\"submit\" [disabled]=\"!signUpForm.form.valid\" class=\"btn mt-2\">Submit</button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"text-center mt-5\">\n                    <a href=\"/login\" class=\"\">Login</a> \n\n                </div>\n\n            </div> <!-- Container -->\n         \n        </div>\n    </section>\n</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online{\n    height: 10px;\n    width: 10px;\n    background-color:green;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  .offline{\n    height: 10px;\n    width: 10px;\n    background-color:red;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  .rightSideClass {\n      float: right;\n      background: #ddd;\n      border-radius: 0.5em;\n    }\n\n  .leftSideClass {\n      float: left;\n      background: #55C1E7;\n      border-radius: 0.5em;\n    }\n\n  .circle-green:before {\n      content: ' \\25CF';\n      font-size: 1em;\n      color: green;\n    }\n\n  .circle-red:before {\n      content: ' \\25CF';\n      font-size: 1em;\n      color: red;\n    }\n\n  .cursorPointer {\n      cursor: pointer;\n    }\n\n  .textCenter {\n      text-align: center;\n    }\n\n  .floatLeft {\n      float: left;\n    }\n\n  *,\n    *:before,\n    *:after {\n      box-sizing: border-box;\n    }\n\n  body {\n      padding: 2.5em 0;\n      color: white;\n    }\n\n  .container {\n      margin: 0 auto;\n      background: #444753;\n      border-radius: 0.3em;\n    }\n\n  .people-list {\n      float: left;\n    }\n\n  .people-list input {\n      border-radius: 0.2em;\n      border: none;\n      padding: 1em;\n      color: white;\n      background: #6A6C75;\n      width: 90%;\n      font-size: 1em;\n    }\n\n  .people-list .fa-search {\n      position: relative;\n      left: -1.8em;\n    }\n\n  .people-list ul {\n      padding: 0;\n    }\n\n  .people-list ul li .userPresence {\n      float: left;\n      padding: 0.7em 0.2em;\n      color: white;\n      text-transform: capitalize;\n    }\n\n  .textCapitalize {\n      text-transform: capitalize;\n      font-size: 1.2em;\n    }\n\n  .people-list img {\n      float: left;\n    }\n\n  .people-list .about {\n      float: left;\n    }\n\n  .people-list .about {\n      padding-left: 0.4em;\n    }\n\n  .people-list .status {\n      color: #92959E;\n    }\n\n  .chat {\n      height: 100vh;\n      float: left;\n      background: #F2F5F8;\n      border-top-right-radius: 0.3em;\n      border-bottom-right-radius: 0.3em;\n      color: #434651;\n    }\n\n  .chat .chat-header {\n      padding: 0.2em;\n      border-bottom: 0.15em solid white;\n    }\n\n  .chat .chat-header img {\n      float: left;\n    }\n\n  .chat .chat-header .chat-about {\n      float: left;\n      padding-left: 0.8em;\n      margin-top: 0.4em;\n    }\n\n  .chat .chat-header .chat-with {\n      font-weight: bold;\n      font-size: 1.1em;\n    }\n\n  .chat .chat-header .chat-num-messages {\n      color: #92959E;\n    }\n\n  .chat .chat-header .fa-star {\n      float: right;\n      color: #D8DADF;\n      font-size: 1.42em;\n      margin-top: 0.85em;\n    }\n\n  .chat .chat-history {\n      padding: 2em 2em 1.42em;\n      border-bottom: 0.15em solid white;\n      overflow-y: scroll;\n      height: 80vh;\n    }\n\n  .chat .chat-history .message-data {\n      margin-bottom: 1em;\n    }\n\n  .chat .chat-history .message-data-time {\n      color: #a8aab1;\n      padding-left: 0.4em;\n    }\n\n  .chat .chat-history .message {\n      color: white;\n      padding: 0.5em 1.42em;\n      line-height: 1.9em;\n      font-size: 1.1em;\n      border-radius: 7px;\n      margin-bottom: 2em;\n      width: 90%;\n      position: relative;\n    }\n\n  .chat .chat-history .message:after {\n      bottom: 100%;\n      left: 7%;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-bottom-color: #86BB71;\n      border-width: 0.8em;\n      margin-left: -0.8em;\n    }\n\n  .chat .chat-history .my-message {\n      background: #86BB71;\n    }\n\n  .chat .chat-history .other-message {\n      background: #94C2ED;\n    }\n\n  .chat .chat-history .other-message:after {\n      border-bottom-color: #94C2ED;\n      left: 90%;\n    }\n\n  .chat .chat-message textarea {\n      width: 100%;\n      border: none;\n      padding: 0.8em 1.42em;\n      margin-bottom: 0.8em;\n      border-radius: 5px;\n      resize: none;\n    }\n\n  .chat .chat-message .fa-file-o,\n    .chat .chat-message .fa-file-image-o {\n      font-size: 1.1em;\n      color: gray;\n      cursor: pointer;\n    }\n\n  .chat .chat-message button {\n      float: right;\n      color: #94C2ED;\n      font-size: 1.1em;\n      text-transform: uppercase;\n      border: none;\n      cursor: pointer;\n      font-weight: bold;\n      background: #F2F5F8;\n    }\n\n  .chat .chat-message button:hover {\n      color: #75b1e8;\n    }\n\n  .online,\n    .offline,\n    .me,\n    .warning {\n      margin-right: 3px;\n      font-size: 0.8em;\n    }\n\n  .online {\n      color: #86BB71;\n    }\n\n  .offline {\n      color: #E38968;\n    }\n\n  .me {\n      color: #94C2ED;\n    }\n\n  .warning {\n      color: #e78930;\n    }\n\n  .align-left {\n      text-align: left;\n    }\n\n  .align-right {\n      text-align: right;\n    }\n\n  .float-right {\n      float: right;\n    }\n\n  .clearfix:after {\n      visibility: hidden;\n      display: block;\n      font-size: 0;\n      content: \" \";\n      clear: both;\n      height: 0;\n    }\n\n  .customButton {\n      width: 100%;\n    }\n\n  .activeChat {\n      background: #393a41;\n    }\n\n  .typeOfChats {\n      background: #393a41;\n      color: white;\n      margin-top: 0.2em;\n      margin-bottom: 0.2em;\n    }\n\n  .blankContent{\n      height: 100vh;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 3rem;\n      color: #999;\n    }\n\n  @media only screen and (max-width:575px) {\n      .chat .chat-history {\n        height:50vh;\n      }\n    }\n\n  @media only screen and (min-width:576px) and (max-width:768px) {\n      .chat .chat-history {\n        height:50vh;\n      }\n    }\n\n  @media only screen and (min-width:769px) and (max-width:992px) {\n      .chat .chat-history {\n        height:65vh;\n      }\n    }\n\n  @media only screen and (min-width:993px) and (max-width:1200  px) {\n      .chat .chat-history {\n        height:50vh;\n      }\n    }\n\n  /* user list items */\n\n  .crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n\n  .about {\n    float: left;\n    padding-left: 0.4em;\n  }\n\n  .online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n\n  .online {\n    color: #86BB71;\n  }\n\n  .offline {\n    color: #E38968;\n  }\n\n  .me {\n    color: #94C2ED;\n  }\n\n  .warning {\n    color: #00c8e7;\n  }\n\n  .status {\n    color: #92959E;\n  }\n\n  .name {\n    float: left;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsb0JBQW9CO0lBQ3RCOztFQUVBO01BQ0UsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixvQkFBb0I7SUFDdEI7O0VBRUE7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztNQUNkLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsVUFBVTtJQUNaOztFQUVBO01BQ0UsZUFBZTtJQUNqQjs7RUFFQTtNQUNFLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFdBQVc7SUFDYjs7RUFFQTs7O01BSUUsc0JBQXNCO0lBQ3hCOztFQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDs7RUFFQTtNQUNFLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsb0JBQW9CO0lBQ3RCOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0Usb0JBQW9CO01BQ3BCLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGtCQUFrQjtNQUNsQixZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxVQUFVO0lBQ1o7O0VBRUE7TUFDRSxXQUFXO01BQ1gsb0JBQW9CO01BQ3BCLFlBQVk7TUFDWiwwQkFBMEI7SUFDNUI7O0VBRUE7TUFDRSwwQkFBMEI7TUFDMUIsZ0JBQWdCO0lBQ2xCOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0UsV0FBVztJQUNiOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGFBQWE7TUFDYixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixpQ0FBaUM7TUFDakMsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGNBQWM7TUFDZCxpQ0FBaUM7SUFDbkM7O0VBRUE7TUFDRSxXQUFXO0lBQ2I7O0VBRUE7TUFDRSxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGlCQUFpQjtJQUNuQjs7RUFFQTtNQUNFLGlCQUFpQjtNQUNqQixnQkFBZ0I7SUFDbEI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLGlDQUFpQztNQUNqQyxrQkFBa0I7TUFDbEIsWUFBWTtJQUNkOztFQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztFQUVBO01BQ0UsY0FBYztNQUNkLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixrQkFBa0I7SUFDcEI7O0VBRUE7TUFDRSxZQUFZO01BQ1osUUFBUTtNQUNSLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osU0FBUztNQUNULFFBQVE7TUFDUixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLDRCQUE0QjtNQUM1QixtQkFBbUI7TUFDbkIsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BQ0UsNEJBQTRCO01BQzVCLFNBQVM7SUFDWDs7RUFFQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1oscUJBQXFCO01BQ3JCLG9CQUFvQjtNQUNwQixrQkFBa0I7TUFDbEIsWUFBWTtJQUNkOztFQUVBOztNQUVFLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZUFBZTtJQUNqQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUI7SUFDckI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBOzs7O01BSUUsaUJBQWlCO01BQ2pCLGdCQUFnQjtJQUNsQjs7RUFFQTtNQUNFLGNBQWM7SUFDaEI7O0VBRUE7TUFDRSxjQUFjO0lBQ2hCOztFQUVBO01BQ0UsY0FBYztJQUNoQjs7RUFFQTtNQUNFLGNBQWM7SUFDaEI7O0VBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0VBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0VBRUE7TUFDRSxZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFlBQVk7TUFDWixZQUFZO01BQ1osV0FBVztNQUNYLFNBQVM7SUFDWDs7RUFFQTtNQUNFLFdBQVc7SUFDYjs7RUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0Qjs7RUFFQTtNQUNFLGFBQWE7TUFDYixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsV0FBVztJQUNiOztFQUNBO01BQ0U7UUFDRSxXQUFXO01BQ2I7SUFDRjs7RUFDQTtNQUNFO1FBQ0UsV0FBVztNQUNiO0lBQ0Y7O0VBQ0E7TUFDRTtRQUNFLFdBQVc7TUFDYjtJQUNGOztFQUNBO01BQ0U7UUFDRSxXQUFXO01BQ2I7SUFDRjs7RUFFRCxvQkFBb0I7O0VBRXBCO0lBQ0MsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBOzs7O0lBSUUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25saW5le1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAub2ZmbGluZXtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLnJpZ2h0U2lkZUNsYXNzIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICB9XG4gICAgXG4gICAgLmxlZnRTaWRlQ2xhc3Mge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjNTVDMUU3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgfVxuICAgIFxuICAgIC5jaXJjbGUtZ3JlZW46YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcgXFwyNUNGJztcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICBcbiAgICAuY2lyY2xlLXJlZDpiZWZvcmUge1xuICAgICAgY29udGVudDogJyBcXDI1Q0YnO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICBcbiAgICAuY3Vyc29yUG9pbnRlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC50ZXh0Q2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmZsb2F0TGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgXG4gICAgKixcbiAgICAqOmJlZm9yZSxcbiAgICAqOmFmdGVyIHtcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIFxuICAgIGJvZHkge1xuICAgICAgcGFkZGluZzogMi41ZW0gMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJhY2tncm91bmQ6ICM0NDQ3NTM7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICB9XG4gICAgXG4gICAgLnBlb3BsZS1saXN0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBcbiAgICAucGVvcGxlLWxpc3QgaW5wdXQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiAjNkE2Qzc1O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICBcbiAgICAucGVvcGxlLWxpc3QgLmZhLXNlYXJjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiAtMS44ZW07XG4gICAgfVxuICAgIFxuICAgIC5wZW9wbGUtbGlzdCB1bCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICAucGVvcGxlLWxpc3QgdWwgbGkgLnVzZXJQcmVzZW5jZSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuN2VtIDAuMmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICAgIFxuICAgIC50ZXh0Q2FwaXRhbGl6ZSB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuICAgIFxuICAgIC5wZW9wbGUtbGlzdCBpbWcge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgIC5wZW9wbGUtbGlzdCAuYWJvdXQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgIC5wZW9wbGUtbGlzdCAuYWJvdXQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbiAgICB9XG4gICAgXG4gICAgLnBlb3BsZS1saXN0IC5zdGF0dXMge1xuICAgICAgY29sb3I6ICM5Mjk1OUU7XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGJhY2tncm91bmQ6ICNGMkY1Rjg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zZW07XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zZW07XG4gICAgICBjb2xvcjogIzQzNDY1MTtcbiAgICB9XG4gICAgXG4gICAgLmNoYXQgLmNoYXQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC4xNWVtIHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAuY2hhdCAuY2hhdC1oZWFkZXIgaW1nIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBcbiAgICAuY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtYWJvdXQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuOGVtO1xuICAgICAgbWFyZ2luLXRvcDogMC40ZW07XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC13aXRoIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICB9XG4gICAgXG4gICAgLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LW51bS1tZXNzYWdlcyB7XG4gICAgICBjb2xvcjogIzkyOTU5RTtcbiAgICB9XG4gICAgXG4gICAgLmNoYXQgLmNoYXQtaGVhZGVyIC5mYS1zdGFyIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGNvbG9yOiAjRDhEQURGO1xuICAgICAgZm9udC1zaXplOiAxLjQyZW07XG4gICAgICBtYXJnaW4tdG9wOiAwLjg1ZW07XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xuICAgICAgcGFkZGluZzogMmVtIDJlbSAxLjQyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAwLjE1ZW0gc29saWQgd2hpdGU7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LWhpc3RvcnkgLm1lc3NhZ2UtZGF0YSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LWhpc3RvcnkgLm1lc3NhZ2UtZGF0YS10aW1lIHtcbiAgICAgIGNvbG9yOiAjYThhYWIxO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbiAgICB9XG4gICAgXG4gICAgLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwLjVlbSAxLjQyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS45ZW07XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZTphZnRlciB7XG4gICAgICBib3R0b206IDEwMCU7XG4gICAgICBsZWZ0OiA3JTtcbiAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjODZCQjcxO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwLjhlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC44ZW07XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LWhpc3RvcnkgLm15LW1lc3NhZ2Uge1xuICAgICAgYmFja2dyb3VuZDogIzg2QkI3MTtcbiAgICB9XG4gICAgXG4gICAgLmNoYXQgLmNoYXQtaGlzdG9yeSAub3RoZXItbWVzc2FnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjOTRDMkVEO1xuICAgIH1cbiAgICBcbiAgICAuY2hhdCAuY2hhdC1oaXN0b3J5IC5vdGhlci1tZXNzYWdlOmFmdGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NEMyRUQ7XG4gICAgICBsZWZ0OiA5MCU7XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LW1lc3NhZ2UgdGV4dGFyZWEge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwLjhlbSAxLjQyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmNoYXQgLmNoYXQtbWVzc2FnZSAuZmEtZmlsZS1vLFxuICAgIC5jaGF0IC5jaGF0LW1lc3NhZ2UgLmZhLWZpbGUtaW1hZ2UtbyB7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LW1lc3NhZ2UgYnV0dG9uIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGNvbG9yOiAjOTRDMkVEO1xuICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJhY2tncm91bmQ6ICNGMkY1Rjg7XG4gICAgfVxuICAgIFxuICAgIC5jaGF0IC5jaGF0LW1lc3NhZ2UgYnV0dG9uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjNzViMWU4O1xuICAgIH1cbiAgICBcbiAgICAub25saW5lLFxuICAgIC5vZmZsaW5lLFxuICAgIC5tZSxcbiAgICAud2FybmluZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAgIFxuICAgIC5vbmxpbmUge1xuICAgICAgY29sb3I6ICM4NkJCNzE7XG4gICAgfVxuICAgIFxuICAgIC5vZmZsaW5lIHtcbiAgICAgIGNvbG9yOiAjRTM4OTY4O1xuICAgIH1cbiAgICBcbiAgICAubWUge1xuICAgICAgY29sb3I6ICM5NEMyRUQ7XG4gICAgfVxuICAgIFxuICAgIC53YXJuaW5nIHtcbiAgICAgIGNvbG9yOiAjZTc4OTMwO1xuICAgIH1cbiAgICBcbiAgICAuYWxpZ24tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBcbiAgICAuYWxpZ24tcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIC5mbG9hdC1yaWdodCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIFxuICAgIC5jbGVhcmZpeDphZnRlciB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgIC5jdXN0b21CdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5hY3RpdmVDaGF0IHtcbiAgICAgIGJhY2tncm91bmQ6ICMzOTNhNDE7XG4gICAgfVxuICAgIFxuICAgIC50eXBlT2ZDaGF0cyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzkzYTQxO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLXRvcDogMC4yZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICB9XG4gICAgXG4gICAgLmJsYW5rQ29udGVudHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCkge1xuICAgICAgLmNoYXQgLmNoYXQtaGlzdG9yeSB7XG4gICAgICAgIGhlaWdodDo1MHZoO1xuICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTc2cHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgICAuY2hhdCAuY2hhdC1oaXN0b3J5IHtcbiAgICAgICAgaGVpZ2h0OjUwdmg7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcbiAgICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xuICAgICAgICBoZWlnaHQ6NjV2aDtcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk5M3B4KSBhbmQgKG1heC13aWR0aDoxMjAwICBweCkge1xuICAgICAgLmNoYXQgLmNoYXQtaGlzdG9yeSB7XG4gICAgICAgIGhlaWdodDo1MHZoO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAvKiB1c2VyIGxpc3QgaXRlbXMgKi9cbiAgXG4gICAuY3JvcCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYWJvdXQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XG4gIH1cbiAgXG4gIC5vbmxpbmUsXG4gIC5vZmZsaW5lLFxuICAubWUsXG4gIC53YXJuaW5nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG4gIFxuICAub25saW5lIHtcbiAgICBjb2xvcjogIzg2QkI3MTtcbiAgfVxuICBcbiAgLm9mZmxpbmUge1xuICAgIGNvbG9yOiAjRTM4OTY4O1xuICB9XG4gIFxuICAubWUge1xuICAgIGNvbG9yOiAjOTRDMkVEO1xuICB9XG4gIFxuICAud2FybmluZyB7XG4gICAgY29sb3I6ICMwMGM4ZTc7XG4gIH1cbiAgXG4gIC5zdGF0dXMge1xuICAgIGNvbG9yOiAjOTI5NTlFO1xuICB9XG4gIFxuICAubmFtZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ms-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _event_dashboard_event_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event-dashboard/event-dashboard.module */ "./src/app/event-dashboard/event-dashboard.module.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");








//Routing


//Toastr 




//Importing calendar Module







//importing observable 
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
            _event_dashboard_event_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["EventDashboardModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_17__["FlatpickrModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__["AutocompleteLibModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_20__["NgxUiLoaderModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_15__["adapterFactory"]
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], pathMatch: 'full' },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                { path: 'calendar', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], pathMatch: 'full' },
            ]),
        ],
        exports: [],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/calendar-modules/component.ts":
/*!***********************************************!*\
  !*** ./src/app/calendar-modules/component.ts ***!
  \***********************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _ms_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ms-http.service */ "./src/app/ms-http.service.ts");







const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
let CalendarComponent = class CalendarComponent {
    constructor(modal, http) {
        this.modal = modal;
        this.http = http;
        this.updateEventDataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //Icons  
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        //Showing events available on current date
        this.activeDayIsOpen = true;
        //Calendar Initialising View
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.eventModalDataObj = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Event Data array Declaration
        this.events = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        //this.events = [...this.events,this.newEvents];
        // console.log(changes.newEvents.currentValue);
        let _newEvents = changes.newEvents.currentValue;
        _newEvents.map((event) => {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
        });
        this.events = _newEvents;
    } // Detecting new events 
    dayClicked(action, event) {
        this.eventModalDataObj = [];
        let newEvents = event['day'].events;
        if (newEvents.length) {
            this.pushEventData(newEvents);
            // console.log(this.eventModalDataObj);
            this.modal.open(this.modalContent, { size: 'lg' });
        }
    } //dayClicked Function ends here
    pushEventData(event) {
        this.eventModalDataObj = [];
        for (let ev of event) {
            this.eventModalDataObj.push(ev);
        } //End for Loop
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.updateEventData = [];
        this.updateEventData.push(event);
        this.updateEventDataEmitter.emit(this.updateEventData);
    }
    // addEvent(): void {
    //   this.events = [
    //     ...this.events,{
    //       title: 'New event',
    //       start: startOfDay(new Date()),
    //       end: endOfDay(new Date()),
    //       color: colors.red,
    //       draggable: true,
    //       resizable: {
    //         beforeStart: true,
    //         afterEnd: true
    //       }
    //     }
    //   ];
    // }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    switchView(view, event) {
        if (event) {
            let selectedDate = event['day'].date;
            this.viewDate = selectedDate;
            this.view = view;
        }
        else if (view) {
            this.view = view;
        }
        else {
            console.log("Some error occured");
        }
    } //End of setView
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _ms_http_service__WEBPACK_IMPORTED_MODULE_6__["MsHttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], CalendarComponent.prototype, "modalContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarComponent.prototype, "newEvents", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarComponent.prototype, "newViewDate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalendarComponent.prototype, "updateEventDataEmitter", void 0);
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-component',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(/*! raw-loader!./template.html */ "./node_modules/raw-loader/index.js!./src/app/calendar-modules/template.html"),
        styles: [__webpack_require__(/*! ./styles.css */ "./src/app/calendar-modules/styles.css")]
    })
], CalendarComponent);



/***/ }),

/***/ "./src/app/calendar-modules/module.ts":
/*!********************************************!*\
  !*** ./src/app/calendar-modules/module.ts ***!
  \********************************************/
/*! exports provided: CalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalModule", function() { return CalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component */ "./src/app/calendar-modules/component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _ms_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ms-http.service */ "./src/app/ms-http.service.ts");













let CalModule = class CalModule {
};
CalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_11__["OwlNativeDateTimeModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutocompleteLibModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
            })
        ],
        declarations: [_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"]],
        exports: [_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"]],
        providers: [_ms_http_service__WEBPACK_IMPORTED_MODULE_12__["MsHttpService"]]
    })
], CalModule);



/***/ }),

/***/ "./src/app/calendar-modules/styles.css":
/*!*********************************************!*\
  !*** ./src/app/calendar-modules/styles.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.modal-body input, select {\n\n  border: none;\n  border-bottom:1px solid #900C3F;\n  color:#454745;\n  padding: 5px;\n  border-radius:0;\n\n}\n\ninput:focus ,select:focus {\n     \n  outline: 0 !important;\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n  border-bottom: 3px solid rgb(59, 28, 40); \n\n}\n\n.modal-body button{\n  padding: 5px;\n  color: #fff;\n  width: 100px;\n  background-color: #900C3F;\n}\n\n.startDateDiv{\n\n  position: relative;\n  width: 100%;\n\n}\n\n.dateTimeWrapper div{\n  width: 50%;\n  display: inline-block;\n}\n\n.CalIcon{\n  \n  position: absolute;\n  top:10px;\n  right:5px;\n\n}\n\n.startTimediv {\n  height:10px;\n  margin-top: -5px;\n}\n\n/* AutoComplete */\n\n.ng-autocomplete {\n  width:100%;\n}\n\n/* Displaying Selected attendess */\n\n.attendees {\n  display: flex;\n  flex-flow: wrap;\n}\n\n.attendees > span {\n  padding: 5px;\n  color: #454745;\n  font-weight: 200;\n}\n\n.iconStyle {\n  color: #900C3F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXItbW9kdWxlcy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLCtDQUErQztFQUMvQyx3Q0FBd0M7O0FBRTFDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXOztBQUViOztBQUNBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsa0NBQWtDOztBQUVsQztFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXItbW9kdWxlcy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubW9kYWwtYm9keSBpbnB1dCwgc2VsZWN0IHtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM5MDBDM0Y7XG4gIGNvbG9yOiM0NTQ3NDU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czowO1xuXG59XG5cbmlucHV0OmZvY3VzICxzZWxlY3Q6Zm9jdXMge1xuICAgICBcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYig1OSwgMjgsIDQwKTsgXG5cbn1cblxuLm1vZGFsLWJvZHkgYnV0dG9ue1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDBDM0Y7XG59XG5cbi5zdGFydERhdGVEaXZ7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxufVxuLmRhdGVUaW1lV3JhcHBlciBkaXZ7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLkNhbEljb257XG4gIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDoxMHB4O1xuICByaWdodDo1cHg7XG5cbn1cblxuLnN0YXJ0VGltZWRpdiB7XG4gIGhlaWdodDoxMHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4vKiBBdXRvQ29tcGxldGUgKi9cbi5uZy1hdXRvY29tcGxldGUge1xuICB3aWR0aDoxMDAlO1xufVxuXG4vKiBEaXNwbGF5aW5nIFNlbGVjdGVkIGF0dGVuZGVzcyAqL1xuXG4uYXR0ZW5kZWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuXG4uYXR0ZW5kZWVzID4gc3BhbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM0NTQ3NDU7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59IFxuXG4uaWNvblN0eWxlIHtcbiAgY29sb3I6ICM5MDBDM0Y7XG59Il19 */"

/***/ }),

/***/ "./src/app/country-code.service.ts":
/*!*****************************************!*\
  !*** ./src/app/country-code.service.ts ***!
  \*****************************************/
/*! exports provided: CountryCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCodeService", function() { return CountryCodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CountryCodeService = class CountryCodeService {
    constructor(http) {
        this.http = http;
        this._url_country = "/assets/data/CountryNames.json";
        this._url_country_code = "/assets/data/CountryCode.json";
    }
    getCountryCode() {
        return this.http.get(this._url_country);
    } //Get Country Code ends here
    getCountryPhoneCode() {
        return this.http.get(this._url_country_code);
    }
};
CountryCodeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CountryCodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CountryCodeService);



/***/ }),

/***/ "./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side_nav{\n\n    height:100vh;\n    padding: 2em;\n    background: #f5f5f5;\n}\n.side_nav button {\n    width: 100%;\n}\n.calendar_col{\n\n    height: 100vh;\n    padding-top: 2em;\n    bottom: 5px;\n}\n.modal-body input, select {\n\n    border: none;\n    border-bottom:1px solid #900C3F;\n    color:#454745;\n    padding: 5px;\n    border-radius:0;\n\n}\ninput:focus ,select:focus {\n       \n    outline: 0 !important;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n    border-bottom: 3px solid rgb(59, 28, 40); \n\n}\n.modal-body button{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n.startDateDiv{\n\n    position: relative;\n    width: 100%;\n\n}\n.dateTimeWrapper div{\n    width: 50%;\n    display: inline-block;\n}\n.CalIcon{\n    \n    position: absolute;\n    top:10px;\n    right:5px;\n\n}\n.startTimediv {\n    height:10px;\n    margin-top: -5px;\n}\n/* AutoComplete */\n.ng-autocomplete {\n    width:100%;\n}\n/* Displaying Selected attendess */\n.attendees {\n    display: flex;\n    flex-flow: wrap;\n}\n.attendees > span {\n    padding: 5px;\n    color: #454745;\n    font-weight: 200;\n}\n.iconStyle {\n    color: #900C3F;\n}\n.searchUserDiv{\n    margin-top: 1em;\n}\n.userEvents{\n    padding-top: 1em;\n}\n.eventDateSmall{\n    font-size: .8em;\n}\n.eventTitle:hover {\n    text-decoration: underline;\n}\n@media only screen and (min-width : 320px) and (max-width : 768px) {\n\n    .side_nav{\n\n        min-height:20vh;\n        height:100%;\n\n    }\n\n}\n@media only screen and (min-width : 768px) and (max-width : 1024px)  {   \n\n    .side_nav{\n\n        padding:1em;\n\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFHQTs7SUFFSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsK0NBQStDO0lBQy9DLHdDQUF3Qzs7QUFFNUM7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCO0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTOztBQUViO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksVUFBVTtBQUNkO0FBRUEsa0NBQWtDO0FBRWxDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBOztJQUVJOztRQUVJLGVBQWU7UUFDZixXQUFXOztJQUVmOztBQUVKO0FBR0E7O0lBRUk7O1FBRUksV0FBVzs7SUFFZjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZV9uYXZ7XG5cbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG4uc2lkZV9uYXYgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jYWxlbmRhcl9jb2x7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgYm90dG9tOiA1cHg7XG59XG5cblxuLm1vZGFsLWJvZHkgaW5wdXQsIHNlbGVjdCB7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzkwMEMzRjtcbiAgICBjb2xvcjojNDU0NzQ1O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOjA7XG5cbn1cblxuaW5wdXQ6Zm9jdXMgLHNlbGVjdDpmb2N1cyB7XG4gICAgICAgXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoNTksIDI4LCA0MCk7IFxuXG59XG5cbi5tb2RhbC1ib2R5IGJ1dHRvbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDBDM0Y7XG59XG5cbi5zdGFydERhdGVEaXZ7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5kYXRlVGltZVdyYXBwZXIgZGl2e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uQ2FsSWNvbntcbiAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjEwcHg7XG4gICAgcmlnaHQ6NXB4O1xuXG59XG5cbi5zdGFydFRpbWVkaXYge1xuICAgIGhlaWdodDoxMHB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi8qIEF1dG9Db21wbGV0ZSAqL1xuLm5nLWF1dG9jb21wbGV0ZSB7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuLyogRGlzcGxheWluZyBTZWxlY3RlZCBhdHRlbmRlc3MgKi9cblxuLmF0dGVuZGVlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG59XG5cbi5hdHRlbmRlZXMgPiBzcGFuIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICM0NTQ3NDU7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn0gXG5cbi5pY29uU3R5bGUge1xuICAgIGNvbG9yOiAjOTAwQzNGO1xufVxuXG4uc2VhcmNoVXNlckRpdntcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi51c2VyRXZlbnRze1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG59XG4uZXZlbnREYXRlU21hbGx7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG4uZXZlbnRUaXRsZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDMyMHB4KSBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XG5cbiAgICAuc2lkZV9uYXZ7XG5cbiAgICAgICAgbWluLWhlaWdodDoyMHZoO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcblxuICAgIH1cblxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC13aWR0aCA6IDEwMjRweCkgIHsgICBcblxuICAgIC5zaWRlX25hdntcblxuICAgICAgICBwYWRkaW5nOjFlbTtcblxuICAgIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ms-http.service */ "./src/app/ms-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_ms_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/ms-socket.service */ "./src/app/ms-socket.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");









let AdminDashboardComponent = class AdminDashboardComponent {
    constructor(ngxLoader, toastr, modal, msService, router, msSocketService) {
        this.ngxLoader = ngxLoader;
        this.toastr = toastr;
        this.modal = modal;
        this.msService = msService;
        this.router = router;
        this.msSocketService = msSocketService;
        this.eventUdateAttendees = [];
        this.startDate = new Date();
        this.endDate = new Date();
        this.selectedAttendees = [];
        this.newEvents = []; // New Event Array
        this.updateEventButton = false;
        //Icons
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.faCaretRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCaretRight"];
        this.userArray = [];
        this.userArrayClone = [];
        this.placeholder = 'Choose attendees';
        this.eventAttendees = "";
        //Search users
        this.searchUsers = "";
        this.searchUserPlaceholder = "Search User";
        this.userWiseloadedEvents = [];
        //Decalring Modal Configuration options
        this.modalOption = {
            backdrop: 'static',
            backdropClass: 'customBackdrop',
            size: 'lg'
        };
    }
    ngOnInit() {
        this.loggedUser = this.msService.getUserInfoFromLocalStorage().username;
        this.getUsersList();
        this.loadDefaultData();
    }
    getUsersList() {
        this.msService.getUserList()
            .subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                for (let users of apiResponse.data) {
                    this.userArray.push(users.username);
                }
            }
            else {
                this.toastr.error('Couldnt fetch users from server,Please refresh the page.');
            }
        });
        this.userArrayClone = this.userArray;
    }
    loadDefaultData() {
        this.msService.getEventsData()
            .subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                this.newEvents = apiResponse.data;
            }
            else {
                this.toastr.error('Event Data fetching error,try again later');
            }
        });
    }
    clearAutoInput(e) {
        e.stopPropagation();
        this.clearInput.clear();
    }
    OpenUpdateForm(event) {
        this.eventUpdateData = event;
        this.eventUpdateData.forEach((data, index) => {
            //Checking attendees availability
            if (data.attendees == null || data.attendees == undefined || data.attendees.length > 0) {
                //Looping through attendees and filter userArray accordingly
                data.attendees.forEach((att) => {
                    this.selectedAttendees.push(att);
                    this.userArrayClone = this.userArrayClone.filter(user => user !== att.name);
                });
            }
            //Filling form with Existing Data
            this.eventId = data.eventId;
            this.eventTitle = data.title;
            this.startDate = data.start;
            this.endDate = data.end;
            this.eventLocation = data.location;
            this.eventDescription = data.description;
        });
        //Triggering Modal Update Form
        this.updateEventButton = true;
        this.eventFormTitle = "Update Event";
        this.eventFormButtonName = "Update";
        this.modal.open(this.newEventModal, this.modalOption);
    }
    closeNewEventModal() {
        this.selectedAttendees = [];
        this.eventTitle = "";
        this.eventAttendees = "";
        this.eventDescription = "";
        this.eventLocation = "";
        this.startDate = new Date();
        this.endDate = new Date();
        this.modal.dismissAll();
        this.userArrayClone = this.userArray;
    }
    addNewEventClick() {
        this.eventFormTitle = "New Event";
        this.updateEventButton = false;
        this.eventFormButtonName = "Save";
        this.modal.open(this.newEventModal, this.modalOption);
    } //addNewEventClick ends here 
    newEventSubmitted() {
        this.ngxLoader.start();
        let submittedEvent = {
            eventId: '',
            start: new Date(this.startDate.setSeconds(0)),
            end: new Date(this.endDate.setSeconds(0)),
            title: this.eventTitle,
            attendees: this.selectedAttendees,
            location: this.eventLocation,
            description: this.eventDescription,
            createdBy: this.loggedUser
        };
        if (this.eventFormButtonName === "Save") {
            this.msSocketService.createNewEvent(submittedEvent);
            this.closeNewEventModal();
        }
        else {
            submittedEvent.eventId = this.eventId;
            let response = this.msSocketService.UpdateEvent(submittedEvent);
        }
        setTimeout(() => {
            this.loadDefaultData();
            this.closeNewEventModal();
            this.ngxLoader.stop(); // stop foreground spinner of the master loader with 'default' taskId
        }, 2000);
    } //newEventSubmitted 
    deleteEvent(eventId) {
        this.ngxLoader.start();
        let eventToDelete = {
            eventId: eventId,
            title: this.eventTitle,
            attendees: this.selectedAttendees,
        };
        this.msSocketService.DeleteEvent(eventToDelete);
        setTimeout(() => {
            this.loadDefaultData();
            this.closeNewEventModal();
            this.ngxLoader.stop(); // stop foreground spinner of the master loader with 'default' taskId
        }, 2000);
    }
    selectedAttendeesFn(name) {
        let attendeesObject = { "name": name };
        //Pushing selected attendee to object
        this.selectedAttendees.push(attendeesObject);
        //Removing selected attendee from autocomplete array
        this.userArrayClone = this.userArrayClone.filter(user => user !== name);
        console.log(this.selectedAttendees);
    } //Selected attendess function ends here
    //Remove attendee 
    removeAttendee(removeAttendee) {
        this.selectedAttendees = this.selectedAttendees.filter(attendee => attendee.name !== removeAttendee);
        this.userArrayClone.push(removeAttendee);
    } //Remove attendee Ends
    fetchEventsUserWise(name) {
        let checkUser;
        this.userWiseloadedEvents = this.newEvents;
        this.userWiseloadedEvents = this.userWiseloadedEvents.filter((data) => {
            data.attendees.forEach((attendee) => {
                if (attendee.name === name) {
                    checkUser = true;
                }
                else {
                    checkUser = false;
                }
            });
            return checkUser;
        });
        this.newEvents = this.userWiseloadedEvents;
    }
    clearUserEvents() {
        this.searchUsers = "";
        this.userWiseloadedEvents = [];
        this.loadDefaultData();
    }
    showUserwiseEvents(id) {
        let userEventsById = [];
        userEventsById = this.userWiseloadedEvents.filter((event) => event.id === id);
        this.newEvents = userEventsById;
    }
}; //Main Class ends here
AdminDashboardComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_4__["MsHttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_ms_socket_service__WEBPACK_IMPORTED_MODULE_7__["MsSocketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clearInput', { static: true })
], AdminDashboardComponent.prototype, "clearInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newEventModal', { static: true }) // Modal Window
], AdminDashboardComponent.prototype, "newEventModal", void 0);
AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.css")]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "./src/app/event-dashboard/event-dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/event-dashboard/event-dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: EventDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDashboardModule", function() { return EventDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/event-dashboard/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/event-dashboard/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _calendar_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calendar-modules/module */ "./src/app/calendar-modules/module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _ms_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ms-http.service */ "./src/app/ms-http.service.ts");
/* harmony import */ var _route_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route-guard.service */ "./src/app/event-dashboard/route-guard.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");

















let EventDashboardModule = class EventDashboardModule {
};
EventDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"], _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ng2_datepicker__WEBPACK_IMPORTED_MODULE_9__["NgDatepickerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlDateTimeModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteLibModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlNativeDateTimeModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _calendar_modules_module__WEBPACK_IMPORTED_MODULE_7__["CalModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_16__["NgxUiLoaderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: 'user-dash', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] },
                { path: 'admin-dash', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"], canActivate: [_route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]] }
            ])
        ],
        exports: [],
        providers: [_ms_http_service__WEBPACK_IMPORTED_MODULE_14__["MsHttpService"], _route_guard_service__WEBPACK_IMPORTED_MODULE_15__["RouteGuardService"]]
    })
], EventDashboardModule);



/***/ }),

/***/ "./src/app/event-dashboard/route-guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/event-dashboard/route-guard.service.ts ***!
  \********************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ms_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ms-http.service */ "./src/app/ms-http.service.ts");





let RouteGuardService = class RouteGuardService {
    constructor(router, msService) {
        this.router = router;
        this.msService = msService;
    }
    canActivate(route) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === "" || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    } // CanAcivate Login ends here
};
RouteGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ms_http_service__WEBPACK_IMPORTED_MODULE_4__["MsHttpService"] }
];
RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteGuardService);



/***/ }),

/***/ "./src/app/event-dashboard/user-dashboard/user-dashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/event-dashboard/user-dashboard/user-dashboard.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side_nav{\n\n    height:100vh;\n    padding: 2em;\n    background: #fff;\n}\n.calendar_col{\n\n    height: 100vh;\n    padding-top: 2em;\n    bottom: 5px;\n}\n.modal-body input, select {\n\n    border: none;\n    border-bottom:1px solid #900C3F;\n    color:#454745;\n    padding: 5px;\n    border-radius:0;\n\n}\ninput:focus ,select:focus {\n       \n    outline: 0 !important;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n    border-bottom: 3px solid rgb(59, 28, 40); \n\n}\n.modal-body button{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n.startDateDiv{\n\n    position: relative;\n    width: 100%;\n    display: flex;\n\n}\n.dateTimeWrapper .eventTitleStyle{\n    width: 50%;\n    display: inline-block;\n}\n.CalIcon{\n    \n    position: absolute;\n    top:10px;\n    right:5px;\n\n}\n.startTimediv {\n    height:10px;\n    margin-top: -5px;\n}\n.eventDataHeading{\n\n    font-size: .8em;\n    color:#454745;\n\n}\n.eventTitleStyle{\n    display: flex;\n    flex-direction: column;\n    border-bottom:1px solid #900C3F;\n    color:#454745;\n    padding: 5px;\n}\n.reminderTitleText{\n    font-size: 2em;\n    font-weight: 200;\n    color:#454745;\n}\n.reminderDateText{\n    font-size: 1.5em;\n    font-weight: 200;\n    color:#454745;\n}\n.modal-body{\n    height: 100%;\n}\n.reminderButton {\n    margin-left: .5em;\n    padding:1.5em;\n    color:#fff;\n    background-color: #900C3F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUdBOztJQUVJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlOztBQUVuQjtBQUVBOztJQUVJLHFCQUFxQjtJQUNyQiwrQ0FBK0M7SUFDL0Msd0NBQXdDOztBQUU1QztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUzs7QUFFYjtBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLGVBQWU7SUFDZixhQUFhOztBQUVqQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFVBQVU7SUFDVix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ldmVudC1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlX25hdntcblxuICAgIGhlaWdodDoxMDB2aDtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jYWxlbmRhcl9jb2x7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgYm90dG9tOiA1cHg7XG59XG5cblxuLm1vZGFsLWJvZHkgaW5wdXQsIHNlbGVjdCB7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzkwMEMzRjtcbiAgICBjb2xvcjojNDU0NzQ1O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOjA7XG5cbn1cblxuaW5wdXQ6Zm9jdXMgLHNlbGVjdDpmb2N1cyB7XG4gICAgICAgXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoNTksIDI4LCA0MCk7IFxuXG59XG5cbi5tb2RhbC1ib2R5IGJ1dHRvbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDBDM0Y7XG59XG5cbi5zdGFydERhdGVEaXZ7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcblxufVxuLmRhdGVUaW1lV3JhcHBlciAuZXZlbnRUaXRsZVN0eWxle1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uQ2FsSWNvbntcbiAgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjEwcHg7XG4gICAgcmlnaHQ6NXB4O1xuXG59XG5cbi5zdGFydFRpbWVkaXYge1xuICAgIGhlaWdodDoxMHB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5ldmVudERhdGFIZWFkaW5ne1xuXG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiM0NTQ3NDU7XG5cbn1cblxuLmV2ZW50VGl0bGVTdHlsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzkwMEMzRjtcbiAgICBjb2xvcjojNDU0NzQ1O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnJlbWluZGVyVGl0bGVUZXh0e1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgY29sb3I6IzQ1NDc0NTtcbn1cblxuLnJlbWluZGVyRGF0ZVRleHR7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGNvbG9yOiM0NTQ3NDU7XG59XG5cbi5tb2RhbC1ib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJlbWluZGVyQnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICBwYWRkaW5nOjEuNWVtO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwMEMzRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/event-dashboard/user-dashboard/user-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/event-dashboard/user-dashboard/user-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ms-http.service */ "./src/app/ms-http.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_ms_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/ms-socket.service */ "./src/app/ms-socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");









let UserDashboardComponent = class UserDashboardComponent {
    constructor(toastr, modal, MsService, msSocketService, router) {
        this.toastr = toastr;
        this.modal = modal;
        this.MsService = MsService;
        this.msSocketService = msSocketService;
        this.router = router;
        this.eventFormTitle = "View Event";
        this.eventUpdateData = [];
        this.selectedAttendees = [];
        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleRight"];
        this.username = "";
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"];
        this.newEvents = [];
        //Decalring Modal Configuration options
        this.modalOption = {
            backdrop: 'static',
            backdropClass: 'customBackdrop',
            size: 'lg'
        };
    }
    ngOnInit() {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken');
        this.username = this.MsService.getUserInfoFromLocalStorage().username;
        this.userConfirmation();
        //this.userConfirmation();
        this.loadAllEvents(); //Loading all events 
        this.getOwnData();
        // this.getAllEvents();
    } //ngOnInit ends here
    userConfirmation() {
        this.msSocketService.verifyUser()
            .subscribe((data) => {
            this.msSocketService.setUserOnline(this.authToken);
        });
        this.msSocketService.tokenValidity()
            .subscribe(response => {
            this.toastr.error(response.message);
            this.router.navigate(['/']);
        });
    }
    getOwnData() {
        this.msSocketService.getOwnUserId(this.username)
            .subscribe((apiResponse) => {
            if (apiResponse.type === "reminder") {
                this.reminderTitle = apiResponse.title;
                this.reminderStart = apiResponse.start;
                this.modal.open(this.reminderModal);
                // this.toastr.success( `${apiResponse.title} : Meeting will be starting soon`);
            }
            else {
                this.loadAllEvents();
                this.toastr.success(`${apiResponse.data.title} : ${apiResponse.message}`);
            }
        }); //Subscribe ends here
    } //Get Own data ends here 
    snoozeReminder(title, date) {
        this.modal.dismissAll(this.reminderModal);
        setTimeout(() => {
            this.modal.open(this.reminderModal);
        }, 5000);
    }
    dismissReminder() {
        this.modal.dismissAll(this.reminderModal);
    }
    loadAllEvents() {
        let name = this.username;
        this.MsService.getEventsData()
            .subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                this.newEvents = apiResponse.data.filter(function (ev) {
                    const checkUser = ev.attendees.findIndex((attendee) => { return attendee.name == name; });
                    if (checkUser >= 0) {
                        return true;
                    }
                }); //Filtering User's events from the Events.
            }
            else {
                console.log(apiResponse.message);
            }
        });
    } //loadAllEvents ends here 
    viewEvent(event) {
        this.eventUpdateData = event;
        this.eventUpdateData.forEach((data, index) => {
            //Checking attendees availability
            if (data.attendees == null || data.attendees == undefined || data.attendees.length > 0) {
                //Looping through attendees and filter userArray accordingly
                data.attendees.forEach((att) => {
                    this.selectedAttendees.push(att);
                });
            }
            //Filling form with Existing Data
            this.eventTitle = data.title;
            this.startDate = data.start;
            this.endDate = data.end;
            this.eventLocation = data.location;
            this.eventDescription = data.description;
            this.createdBy = data.createdBy;
        });
        this.modal.open(this.newEventModal, this.modalOption);
    } //triggering ModalWindow 
    closeEventModal() {
        this.selectedAttendees = [];
        this.eventTitle = "";
        this.eventDescription = "";
        this.eventLocation = "";
        this.startDate = new Date();
        this.endDate = new Date();
        this.modal.dismissAll(this.newEventModal);
    }
}; //Main Class ends here
UserDashboardComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_4__["MsHttpService"] },
    { type: src_app_ms_socket_service__WEBPACK_IMPORTED_MODULE_7__["MsSocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newEventModal', { static: true })
], UserDashboardComponent.prototype, "newEventModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reminderModal', { static: true })
], UserDashboardComponent.prototype, "reminderModal", void 0);
UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dashboard',
        template: __webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/event-dashboard/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/event-dashboard/user-dashboard/user-dashboard.component.css")]
    })
], UserDashboardComponent);



/***/ }),

/***/ "./src/app/ms-http.service.ts":
/*!************************************!*\
  !*** ./src/app/ms-http.service.ts ***!
  \************************************/
/*! exports provided: MsHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsHttpService", function() { return MsHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_ms_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/ms-socket.service */ "./src/app/ms-socket.service.ts");




let MsHttpService = class MsHttpService {
    constructor(http, socketService) {
        this.http = http;
        this.socketService = socketService;
        //Api URL  
        this.apiUrl = 'http://localhost:3000/api/v1/';
        this.getUserInfoFromLocalStorage = () => {
            return JSON.parse(localStorage.getItem('userData'));
        }; // Get User info ends here
        this.setUserInfoInLocalStorage = (data) => {
            localStorage.setItem('userData', JSON.stringify(data));
        }; // Set User info ends here
    } //Constructor ends here
    //SignUpFn starts  
    signupFn(signupData) {
        try {
            return this.http.post(this.apiUrl + 'users/signUp', signupData);
        }
        catch (error) {
            return this.handleError(error);
        }
    } //signUpFn ends here 
    //SignUpFn starts  
    signInFn(userData) {
        try {
            return this.http.post(this.apiUrl + 'users/signIn', userData);
        }
        catch (error) {
            return this.handleError(error);
        }
    } //signUpFn ends here 
    forgotPassword(email) {
        let response = this.http.post(this.apiUrl + 'users/forgotPassword', email);
        return response;
    }
    getEventsData() {
        let response = this.http.get(this.apiUrl + 'events/getAllEvents');
        return response;
    }
    addNewEvent(eventData) {
        let response = this.http.post(this.apiUrl + 'events/newEvent', eventData);
        return response;
    }
    updateEvent(eventData) {
        return "Updated";
    }
    getUserList() {
        let response = this.http.get(this.apiUrl + 'users/getUsersList');
        return response;
    } //Getting UserList events
    getUserId(name) {
        let response = this.http.post(this.apiUrl + 'users/getUserIdByName', name);
        return response;
    }
    //Global error handler
    handleError(err) {
        let errorMessage = "";
        if (err.error instanceof Error) {
            errorMessage = `An Error occured. ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code:${err.status} error Message is :${err.error.message}`;
        }
        return errorMessage;
    } //ErrorHandler ends
}; // Main class ends here
MsHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _app_ms_socket_service__WEBPACK_IMPORTED_MODULE_3__["MsSocketService"] }
];
MsHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MsHttpService);



/***/ }),

/***/ "./src/app/ms-socket.service.ts":
/*!**************************************!*\
  !*** ./src/app/ms-socket.service.ts ***!
  \**************************************/
/*! exports provided: MsSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsSocketService", function() { return MsSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let MsSocketService = class MsSocketService {
    constructor() {
        this.url = "http://localhost:3000";
        this.getOwnUserId = (userId) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on(userId, data => {
                    observer.next(data);
                });
            });
        };
        //Listening server 
        this.verifyUser = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('verifyUser', data => {
                    observer.next(data);
                });
            });
        }; //User verification
        this.tokenValidity = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('token-error', errorDetails => {
                    observer.next(errorDetails);
                });
            }); //Observable
        };
        this.createNewEvent = (eventData) => {
            this.socket.emit('new-event', eventData);
        }; //CreateNewEvent
        this.UpdateEvent = (eventData) => {
            this.socket.emit('update-event', eventData);
        }; //Update Event
        this.DeleteEvent = (eventData) => {
            this.socket.emit('delete-event', eventData);
        }; //Update Event
        this.getNewEvents = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
                this.socket.on('get-new-events', eventData => {
                    observer.next(eventData);
                });
            }); //Observable
        }; //Get New Events ends here 
        //Emitting to server
        this.setUserOnline = (authToken) => {
            this.socket.emit('setUser', authToken);
        }; //Setting up user online
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    } //Constructor ends here
    handleError(err) {
        let errorMessage = "";
        if (err.error instanceof Error) {
            errorMessage = `An Error occured. ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code:${err.status} error Message is :${err.error.message}`;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    } //ErrorHandler ends
}; //Main Class ends here 
MsSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MsSocketService);



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    font-size: 2.2em;\n    color: darkslategrey;\n}\ninput {\n    border: none;\n    border-bottom:1px solid #900C3F;\n    color: rgb(53, 48, 50);\n    padding: 5px;\n    transition: border-bottom 0.3s linear 0.1s;\n    border-radius: 0;\n}\ninput:focus {\n    outline:none !important;\n    border-bottom: 3px solid rgb(59, 28, 40);\n}\nbutton{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOTAwQzNGO1xuICAgIGNvbG9yOiByZ2IoNTMsIDQ4LCA1MCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcyBsaW5lYXIgMC4xcztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYig1OSwgMjgsIDQwKTtcbn1cbmJ1dHRvbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDBDM0Y7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ms-http.service */ "./src/app/ms-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(toaster, msService, _route) {
        this.toaster = toaster;
        this.msService = msService;
        this._route = _route;
        this.resetPassword = () => {
            console.log(this.emailId);
            this.msService.forgotPassword({ email: this.emailId })
                .subscribe((apiResponse) => {
                console.log(apiResponse);
            });
        };
    }
    ngOnInit() {
        let token = this._route.snapshot.paramMap.get('token');
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_3__["MsHttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  h1{\n      font-size: 2em;\n      color: darkslategrey;\n  }\n  input {\n      border: none;\n      outline: none !important;\n      border-bottom:1px solid #900C3F;\n      color: rgb(53, 48, 50);\n      padding: 5px;\n      transition: border-bottom 0.3s linear 0.1s;\n      border-radius: 0;\n  }\n  input:focus {\n       \n        outline: 0 !important;\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n        border-bottom: 3px solid rgb(59, 28, 40); \n  }\n  button{\n      padding: 5px;\n      color: #fff;\n      width: 100px;\n      background-color: #900C3F;\n  }\n  .validation-pass,  .validation-user{\n      color:#900C3F;\n      padding: 5px;\n      font-size: .9em;\n     text-align: left;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO01BQ0ksY0FBYztNQUNkLG9CQUFvQjtFQUN4QjtFQUNBO01BQ0ksWUFBWTtNQUNaLHdCQUF3QjtNQUN4QiwrQkFBK0I7TUFDL0Isc0JBQXNCO01BQ3RCLFlBQVk7TUFDWiwwQ0FBMEM7TUFDMUMsZ0JBQWdCO0VBQ3BCO0VBRUU7O1FBRUkscUJBQXFCO1FBQ3JCLCtDQUErQztRQUMvQyx3Q0FBd0M7RUFDOUM7RUFDQTtNQUNJLFlBQVk7TUFDWixXQUFXO01BQ1gsWUFBWTtNQUNaLHlCQUF5QjtFQUM3QjtFQUNBO01BQ0ksYUFBYTtNQUNiLFlBQVk7TUFDWixlQUFlO0tBQ2hCLGdCQUFnQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaDF7XG4gICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICB9XG4gIGlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM5MDBDM0Y7XG4gICAgICBjb2xvcjogcmdiKDUzLCA0OCwgNTApO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjNzIGxpbmVhciAwLjFzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgIFxuICAgICAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiKDU5LCAyOCwgNDApOyBcbiAgfVxuICBidXR0b257XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDBDM0Y7XG4gIH1cbiAgLnZhbGlkYXRpb24tcGFzcywgIC52YWxpZGF0aW9uLXVzZXJ7XG4gICAgICBjb2xvcjojOTAwQzNGO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ms-http.service */ "./src/app/ms-http.service.ts");






let LoginComponent = class LoginComponent {
    constructor(toaster, router, msHttp, vcr) {
        this.toaster = toaster;
        this.router = router;
        this.msHttp = msHttp;
        this.logInFunction = () => {
            if ((!this.username) && (this.password)) {
                this.triggerErrorUser = true;
                this.triggerErrorPass = false;
            }
            else if ((!this.password) && (this.username)) {
                // this.toaster.warning('Enter password');
                this.triggerErrorUser = false;
                this.triggerErrorPass = true;
            }
            else if ((!this.username) && (!this.password)) {
                this.triggerErrorUser = true;
                this.triggerErrorPass = true;
            }
            else {
                this.triggerErrorUser = false;
                this.triggerErrorPass = false;
                let userData = {
                    username: this.username,
                    password: this.password
                };
                this.msHttp.signInFn(userData)
                    .subscribe((apiResponse) => {
                    if (apiResponse.status === 200) {
                        this.toaster.success("Login success");
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        this.msHttp.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        let userName = apiResponse.data.userDetails.username;
                        setTimeout(() => {
                            if (userName.endsWith("-admin")) {
                                this.router.navigate(['/admin-dash']);
                            }
                            else {
                                this.router.navigate(['/user-dash']);
                            }
                        }, 1000);
                    }
                    else {
                        this.toaster.error(apiResponse.message);
                    }
                }, (error) => {
                    if (error) {
                        this.toaster.error("Server Connection Error ,Please try again later");
                    }
                });
            }
        }; //LogInFunciton ends here
    } //Constructor ends here
    ngOnInit() {
    }
}; //Class ends here 
LoginComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_5__["MsHttpService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/resetpassword/resetpassword.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/resetpassword/resetpassword.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    border: none;\n    outline: none !important;\n    border-bottom:1px solid #900C3F;\n    color: rgb(53, 48, 50);\n    padding: 5px;\n    transition: border-bottom 0.3s linear 0.1s;\n    border-radius: 0;\n}\n\n  input:focus {\n     \n      outline: 0 !important;\n      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n      border-bottom: 3px solid rgb(59, 28, 40); \n}\n\n  button{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGdCQUFnQjtBQUNwQjs7RUFFRTs7TUFFSSxxQkFBcUI7TUFDckIsK0NBQStDO01BQy9DLHdDQUF3QztBQUM5Qzs7RUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOTAwQzNGO1xuICAgIGNvbG9yOiByZ2IoNTMsIDQ4LCA1MCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4zcyBsaW5lYXIgMC4xcztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4gIGlucHV0OmZvY3VzIHtcbiAgICAgXG4gICAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoNTksIDI4LCA0MCk7IFxufVxuYnV0dG9ue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwMEMzRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/resetpassword/resetpassword.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/resetpassword/resetpassword.component.ts ***!
  \***************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ResetpasswordComponent = class ResetpasswordComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let token = this.route.snapshot.paramMap.get('token');
    }
};
ResetpasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpassword',
        template: __webpack_require__(/*! raw-loader!./resetpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/resetpassword/resetpassword.component.html"),
        styles: [__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/user/resetpassword/resetpassword.component.css")]
    })
], ResetpasswordComponent);



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    font-size: 2.2em;\n    color: darkslategrey;\n}\ninput,select {\n\n    border: none;\n    border-bottom:1px solid #900C3F;\n    color:#454745;\n    padding: 5px;\n    border-radius:0;\n\n}\ninput:focus ,select:focus {\n       \n    outline: 0 !important;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n    border-bottom: 3px solid rgb(59, 28, 40); \n\n}\nbutton{\n    padding: 5px;\n    color: #fff;\n    width: 100px;\n    background-color: #900C3F;\n}\n.mobile-container{\n    display: flex;\n}\n.mobile-container .c_code{\n    width: 20%;\n    padding-right:4px; \n    color: rgb(53, 48, 50);\n    display: inline-block;\n}\n.mobile-container .mobile_no{\n    width: 80%;\n    display: inline-block;\n}\n.c_code input{\n    background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLCtDQUErQztJQUMvQyx3Q0FBd0M7O0FBRTVDO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBmb250LXNpemU6IDIuMmVtO1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuaW5wdXQsc2VsZWN0IHtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjOTAwQzNGO1xuICAgIGNvbG9yOiM0NTQ3NDU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6MDtcblxufVxuXG5pbnB1dDpmb2N1cyAsc2VsZWN0OmZvY3VzIHtcbiAgICAgICBcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYig1OSwgMjgsIDQwKTsgXG5cbn1cblxuYnV0dG9ue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwMEMzRjtcbn1cbi5tb2JpbGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubW9iaWxlLWNvbnRhaW5lciAuY19jb2Rle1xuICAgIHdpZHRoOiAyMCU7XG4gICAgcGFkZGluZy1yaWdodDo0cHg7IFxuICAgIGNvbG9yOiByZ2IoNTMsIDQ4LCA1MCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubW9iaWxlLWNvbnRhaW5lciAubW9iaWxlX25ve1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNfY29kZSBpbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_country_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/country-code.service */ "./src/app/country-code.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ms-http.service */ "./src/app/ms-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



//importing toastr



let SignupComponent = class SignupComponent {
    constructor(countryCodeService, msHttp, toastr, route) {
        this.countryCodeService = countryCodeService;
        this.msHttp = msHttp;
        this.toastr = toastr;
        this.route = route;
        this.countryName = "IN";
        this.countryCodeInput = "91";
        this.countryList = [];
        this.selectedCountryName = "";
    } //Contructor ends 
    ngOnInit() {
        this.countryCodeService.getCountryPhoneCode()
            .subscribe(data => {
            this.countryCode = data;
        }); // Country code ends here
        this.countryCodeService.getCountryCode()
            .subscribe(data => {
            for (let dt in data) {
                let object = { "code": dt, "name": data[dt] };
                this.countryList.push(object);
            }
        }); // CountryList ends here
    } //ngOnInit ends here
    countrySelected(event) {
        this.seletedCountry = event.target.value;
        for (let code in this.countryCode) {
            if (this.seletedCountry == code) {
                this.countryCodeInput = this.countryCode[code];
            }
        }
    } // countrySelected ends here
    formSubmitted() {
        let signupData = {
            username: this.user,
            password: this.pass,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.emailId,
            mobile: this.mobile_no
        }; //Signup data object ends here 
        this.msHttp.signupFn(signupData)
            .subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                // console.log(apiResponse);
                this.toastr.success('Signup successfull');
                setTimeout(() => { this.redirectToLoginPage(); }, 2000);
            }
            else {
                this.toastr.error(apiResponse.message);
            }
        }, (err) => {
            console.log(err);
            this.toastr.error('Some error occured');
        }); //End of Observable
    } // form Submitted Funciton ends here
    redirectToLoginPage() {
        this.route.navigate(['/login']);
    }
}; //Main Class ends here
SignupComponent.ctorParameters = () => [
    { type: src_app_country_code_service__WEBPACK_IMPORTED_MODULE_2__["CountryCodeService"] },
    { type: src_app_ms_http_service__WEBPACK_IMPORTED_MODULE_4__["MsHttpService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html"),
        providers: [src_app_country_code_service__WEBPACK_IMPORTED_MODULE_2__["CountryCodeService"]],
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ms_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ms-http.service */ "./src/app/ms-http.service.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/user/resetpassword/resetpassword.component.ts");








//Toaster


//http Service


let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_11__["ResetpasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], pathMatch: 'full' },
                { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], pathMatch: 'full' },
                { path: 'resetpassword/:token', component: _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_11__["ResetpasswordComponent"] }
            ])
        ],
        providers: [_ms_http_service__WEBPACK_IMPORTED_MODULE_10__["MsHttpService"]]
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/auks/Desktop/MSProject/ms-app/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/auks/Desktop/MSProject/ms-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map