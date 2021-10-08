import React from 'react';
import {
  Col, Modal, Pagination, Row, Tag, Typography,
} from '@ff/ui-kit';
import { Card as WebCatalogCard } from '@ff/web-catalog';

import classes from './Catalog.module.scss';
import FilterForm from './FilterForm';
import TaskContent from '../TaskContent';

const Catalog = () => {
  // tags
  const [tags, setTags] = React.useState([
    'react',
    'redux',
    'mobx',
    'nodejs',
    'jest',
    'typescript',
  ]);
  const handleClose = (closingTag: string) => {
    setTags((currentTags) => currentTags.filter((tag) => tag !== closingTag));
  };
  //

  const [page, setPage] = React.useState(1); // pagination

  // modal
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  //

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ marginBottom: '30px' }}>
        <Typography.Title level={2}>Список задач</Typography.Title>
      </div>
      <Row colGap="lg">
        <Col xs="7">
          <div style={{ marginBottom: '30px' }}>
            {tags.map((tag) => (
              <span key={tag} style={{ marginRight: '10px' }}>
                <Tag label={tag} onClose={() => handleClose(tag)} />
              </span>
            ))}
          </div>
          <div style={{ minHeight: '500px', marginBottom: '30px' }}>
            {Array(10).fill(
              <button type="button" onClick={openModal} className={classes.card}>
                название, сумма премии, владелец, список технологий, оцененная
                длительность, дедлайн, требуемый процент задействования
                исполнителя, текущий статус работы, число просмотров, число
                претендентов-исполнителей, выбранный исполнитель (если он уже
                определён).
              </button>,
            )}
          </div>

          <Row justify="center">
            <Pagination
              size="small"
              itemCount={1000}
              perPage={50}
              currentPage={page}
              onChangeCurrentPage={(newPage) => setPage(newPage)}
            />
          </Row>
        </Col>

        <FilterForm />
        <Modal
          style={{
            position: 'relative',
            margin: '0 20px',
            paddingBottom: '50px',
          }}
          anchor="root"
          visible={isOpen}
          onClose={closeModal}
          title="Название"
          width="800px"
        >
          <TaskContent />
        </Modal>
      </Row>
    </div>
  );
};

export default Catalog;
