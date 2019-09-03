import { notification, Icon } from 'antd';

const SuccessNotification = (title, content) => {
  notification.success({
    message: title,
    placement: 'bottomLeft',
    duration: 8,
    description: content,
  });
};

export default SuccessNotification;
