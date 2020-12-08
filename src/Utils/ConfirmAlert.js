/**
 *
 *
 */
import React from 'react';
import { Modal } from 'antd';

/**
 * 기본값
 */
const defaultParameter = {
  title: '확인',
  content: (
    <div>
      <p>확인버튼을 눌러주세요</p>
    </div>
  ),
  onOk() {}
};

/**
 *
 */
export default {
  info: (
    title = defaultParameter.title,
    content = defaultParameter.content,
    onOk = defaultParameter.onOk
  ) => {
    Modal.info({
      title,
      content,
      onOk
    });
  },

  success: (
    title = defaultParameter.title,
    content = defaultParameter.content,
    onOk = defaultParameter.onOk
  ) => {
    Modal.success({
      title,
      content,
      onOk
    });
  },

  error: (
    title = defaultParameter.title,
    content = defaultParameter.content,
    onOk = defaultParameter.onOk
  ) => {
    Modal.error({
      title,
      content,
      onOk
    });
  },

  warning: (
    title = defaultParameter.title,
    content = defaultParameter.content,
    onOk = defaultParameter.onOk
  ) => {
    Modal.warning({
      title,
      content,
      onOk
    });
  }
};
