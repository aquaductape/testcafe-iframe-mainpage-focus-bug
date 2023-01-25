fixture`Test Focus`.page`./index.html`;

test("Dont fire focusin event", async (t) => {
  await t.switchToIframe(`.container-div #iframe`).click("button");
  await t.switchToMainWindow();
  const { error, log } = await t.getBrowserConsoleMessages();
  log.forEach((log) => console.log(log));
  // logs ['iframe focus fired', 'focusin fired'], when it should be empty array, since focusin shouldn't bubble from iframe and iframe focus shouldn't fire
  await t.expect(log.length).eql(0);
});
