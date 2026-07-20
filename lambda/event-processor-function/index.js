exports.handler = async (event) => {
  const failures = [];

  for (const record of event.Records || []) {
    try {
      const message = JSON.parse(record.body);
      console.log('Processing HelpIn event:', JSON.stringify(message));
    } catch (error) {
      console.error('Failed to process message:', error);
      failures.push({ itemIdentifier: record.messageId });
    }
  }

  return { batchItemFailures: failures };
};
