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
      <div>
        текущий статус работы:{' '}
        <span style={{ color: 'green' }}>статус</span>
      </div>
      <div>сумму премии: {10000} руб</div>
      <div>список технологий: {['React', 'Typescript', 'Node js']}</div>
      <div>оцененную длительность в днях: {14} дней</div>
      <div>дедлайн: 25.05.2024</div>
      <div>требуемый процент задействования исполнителя: {100}%</div>
      <div style={{ marginBottom: '30px' }}>
        <a href="#"> ссылку на первоисточник</a>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        quia maxime, qui obcaecati fugiat accusamus saepe animi atque sit
        veritatis enim! Nihil quisquam sit a voluptatem cupiditate tenetur,
        cumque temporibus. Eaque delectus sunt repellendus earum voluptates,
        possimus vel ipsa natus modi, eligendi rerum commodi eius itaque,
        similique ut! Officia ipsam veritatis minus facere qui aliquid
        similique minima explicabo aliquam impedit. Suscipit reprehenderit
        magnam nihil tenetur! Aliquam, voluptates delectus architecto maiores
        ducimus facere praesentium, vero iusto ad id dolorum error eveniet sed
        ullam explicabo incidunt dignissimos? Possimus aliquid aliquam ducimus
        quasi? Sunt perferendis et adipisci numquam vel, natus vero corrupti
        dolorem dolore fugit aliquam, dolorum eaque qui deleniti nobis quis
        perspiciatis est facilis omnis porro praesentium dignissimos nesciunt
        expedita! In, quia! Delectus debitis ipsum voluptatum quidem rerum aut
        doloribus. Mollitia molestias suscipit beatae laboriosam modi, maiores
        neque unde quis aut impedit. Laudantium, eligendi ratione animi illo
        omnis itaque porro doloribus dolorum.
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
