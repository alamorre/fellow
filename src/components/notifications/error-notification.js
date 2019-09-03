import { notification, Icon } from 'antd';

const ErrorNotification = (title, content) => {
  notification.error({
    message: title,
    placement: 'bottomRight',
    duration: 8,
    description: content,
  });
};

export default ErrorNotification;
