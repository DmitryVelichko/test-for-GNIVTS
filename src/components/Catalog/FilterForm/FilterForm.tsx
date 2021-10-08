import {
  Col, DatePicker, Select, TextField, Typography,
} from '@ff/ui-kit';
import React from 'react';

import classes from './FilterForm.module.scss';

const FilterForm = () => {
  // тестовые данные для селекта
  const options = [
    { key: 1, value: 'first', label: 'Значение первое' },
    { key: 2, value: 'second', label: 'Значение второе' },
    { key: 3, value: 'third', label: 'Значение третье' },
    { key: 4, value: 'fourth', label: 'Значение четвертое' },
    { key: 5, value: 'fifth', label: 'Значение пятое' },
    { key: 6, value: 'sixth', label: 'Значение шестое' },
  ];

  // тестовые данные для мультиселекта
  const options1 = [
    { key: 1, value: 'first', label: 'Значение первое' },
    { key: 2, value: 'second', label: 'Значение второе' },
    { key: 3, value: 'third', label: 'Значение третье' },
  ];
  return (
    <Col xs="5">
      {/* сделать sticky */}
      <div
        style={{
          height: '600px',
          backgroundColor: '#f5f5f5',
          padding: '30px 20px',
        }}
      >
        <Typography.Title className={classes.mb} level={5}>
          Фильтры
        </Typography.Title>

        <form
          className="container flex justify-center wrap"
          noValidate
          autoComplete="off"
        >
          <TextField
            name="small"
            placeholder="Текстовое поле"
            size="small"
            className={classes.mb}
          />
          <Select
            label="Владелец"
            options={options}
            style={{ width: '300px' }}
            showSearch
            className={classes.mb}
          />
          <div className={classes.mb}>
            Диапазон премии <br />
            <input type="range" />
          </div>{' '}
          {/* найти range */}
          <Select
            label="Технологии"
            options={options}
            style={{ width: '400px' }}
            placeholder="Выберите значение из списка"
            showSearch
            multiple
            className={classes.mb}
          />
          {/* вариант с чекбоксами мне нравится больше -_- */}
          <DatePicker label="Дедлайн" name="date" placeholder="DD.MM.YYYY" />
          <div className={`${classes.mt} ${classes.mb}`}>
            Процент задействования <br />
            <input type="range" />
          </div>
          {/* найти range */}
          <Select
            label="Технологии"
            options={options}
            style={{ width: '400px' }}
            placeholder="Выберите значение из списка"
            showSearch
            multiple
            className={classes.mb}
          />
        </form>
      </div>
    </Col>
  );
};

export default FilterForm;
