function createNewFile() {
  var ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!');
}