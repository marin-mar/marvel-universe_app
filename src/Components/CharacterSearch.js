import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as yup from 'yup';

import Button from './Button';
import useMarvelService from '../services/MarvelService';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

import './CharacterSearch.scss';

const CharacterSearch = () => {
  const [char, setChar] = useState(null);
  const { loading, error, getCharacterByName, clearError } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const onUpdateChar = (charName) => {
    clearError();
    getCharacterByName(charName).then(onCharLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const result = !char ? null : char.length > 0 ? (
    <div className="search__message--success">
      <h3 className="search__text">There is! Visit {char[0].name} page?</h3>
      <Link to={`/characters/${char[0].id}`}>
        <Button buttonClasses={'search__button button--medium'} buttonName="To page" />
      </Link>
    </div>
  ) : (
    <div className="search__message--error">
      <h3 className="search__text">The character was not found. Check the name and try again</h3>
    </div>
  );
  return (
    <div className="search">
      <h2 className="search__title">Or find a character by name:</h2>

      <Formik
        initialValues={{ charName: '' }}
        validationSchema={yup.object({
          charName: yup.string().required('This field is required'),
        })}
        onSubmit={({ charName }) => {
          onUpdateChar(charName);
        }}>
        <Form className="search__form">
          <Field className="search__input" type="text" id="charName" name="charName" placeholder="Enter name" />
          <Button buttonClasses={'search__button button--accent'} buttonName="Find" type="submit" disabled={loading} />
          <FormikErrorMessage name="charName">
            {(msg) => (
              <div className="search__message--error">
                <h3 className="search__text">{msg}</h3>
              </div>
            )}
          </FormikErrorMessage>
        </Form>
      </Formik>
      {errorMessage}
      {spinner}
      {result}
    </div>
  );
};

export default CharacterSearch;
