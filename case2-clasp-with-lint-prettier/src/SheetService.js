var SheetService = {};

SheetService.createInitialFile = function(prefix) {
  var fileName = prefix + ' ' + getDayFormat();
  var ss = SpreadsheetApp.create(fileName);
  var range = ss.getRange('A1');
  range.setValue('Hello, clasp!');
  return ss;
};
