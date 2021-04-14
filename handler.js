const SnsSqsSlq = require("sns-sqs-slq-code7");

("use strict");

module.exports.flowReport = async (event) => {
  const snsSqsSlq = new SnsSqsSlq.default();

  const publish = await snsSqsSlq.publishToTopic(
    "sns-flow-report",
    "Flow Report",
    "flow",
    "report",
    "arn:aws:sns:us-east-1:303732912389:sns-flow-report.fifo"
  );

  return publish;
};
