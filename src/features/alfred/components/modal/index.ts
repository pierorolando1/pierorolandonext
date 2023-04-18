export { default } from './AlfredModal'

export const scrollToBottom = () => {
  const messages = document.querySelector('.messages');
  if (messages) {
    const scrollToBottom = () => {
      messages.scrollTo({
        top: messages.scrollHeight + 200,
        behavior: 'smooth'
      });
    };
    scrollToBottom();
  }
}
