// @ts-nocheck
"use client"
import React from 'react';
import { Table } from 'antd';
import useBoardMeetings from '@/hooks/useBoardMeetings';

const BoardMeeting = () => {
  const { data, isLoading, error } = useBoardMeetings();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const columns = [
    {
      title: 'To Consider',
      dataIndex: 'meetingAgenda',
      key: 'meetingAgenda'
    },
    {
      title: 'Schedule Date',
      dataIndex: 'heldDate',
      key: 'heldDate'
    },
    {
      title: 'Schedule Time',
      dataIndex: 'heldTime',
      key: 'heldTime'
    },
    {
      title: 'Place',
      dataIndex: 'location',
      key: 'location'
    },
    {
      title: 'Attachment',
      dataIndex: 'image_link',
      key: 'image_link',
      render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">IMAGE</a>
    }
  ];

  return (
    <div>
      <h1>Board Meeting</h1>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
};

export default BoardMeeting;
