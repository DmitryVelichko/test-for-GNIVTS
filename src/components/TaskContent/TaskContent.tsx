import { Button, UserAvatar, UserProfile } from '@ff/ui-kit';
import React from 'react';

const TaskContent = () => (
  <>
    <div
      style={{
        height: '450px',
        overflow: 'auto',
        fontSize: '14px',
        paddingRight: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          fontSize: '20px',
        }}
      >
        dwayne johnson
        <UserAvatar
          size="medium"
          imageUrl="https://i.pinimg.com/236x/09/a8/f9/09a8f927bf9dd1f193874a0790e13019.jpg"
        />
      </div>
     
      <div>набор файлов-вложений</div>
      <div>
        выбранный исполнитель(если есть):
        <UserProfile userName="dwayne johnson">
          <UserAvatar
            size="small"
            imageUrl="https://i.pinimg.com/236x/09/a8/f9/09a8f927bf9dd1f193874a0790e13019.jpg"
          />
        </UserProfile>
      </div>
      <div>
        список претендентов-исполнителей:
        <div style={{ display: 'flex' }}>
          {Array(5).fill(
            <UserAvatar
              size="small"
              imageUrl="https://i.pinimg.com/236x/09/a8/f9/09a8f927bf9dd1f193874a0790e13019.jpg"
            />,
          )}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: 'calc(100% - 86px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button type="primary">Хочу это сделать</Button> <br />
        <div>{15} просмотров</div>
      </div>
    </div>
  </>
);

export default TaskContent;
