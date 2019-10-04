import React from 'react';
import './GlossaryPage.css';
import { Search } from '../common/index';
import { Link } from 'react-router-dom';

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import terms from '../../lib/data';
import SearchResults from './results/SearchResults';

const DayPhrase = ({ entry }) => {
  return (
    <span className={'glossary__day-phrase'}>
      Você sabe o que é&nbsp;
      <Link
        className='emphasis pointer-hover light-accent lighter-hover'
        to={`/${entry}`}
      >
        {entry}
      </Link>
      ?
    </span>
  );
};

const GlossaryPage = props => {
  const handleAcronymChange = selected => {
    props.history.push(`/${selected}`);
  };

  const getRandomEntry = () => {
    const entries = Object.keys(terms);
    const index = Math.floor(Math.random() * entries.length);
    return entries[index];
  };

  const getTerm = () => props.match.params.term;

  const isSearchEmpty = () => {
    return getTerm() === undefined;
  };

  const glossaryContainerClass = isSearchEmpty()
    ? 'glossary__container--has-not-search'
    : 'glossary__container--has-search';
  return (
    <div className={`glossary__container ${glossaryContainerClass}`}>
      <div className={'glossary__search-tools'}>
        <Link to={''} className={'glossary__logo'}>
          <img src={glossarioLogo} />
        </Link>
        <Search
          className={'glossary__search'}
          items={Object.keys(terms).sort()}
          handleSelect={handleAcronymChange}
        />
        {isSearchEmpty() && <DayPhrase entry={getRandomEntry()} />}
      </div>
      {!isSearchEmpty() && <SearchResults term={getTerm()} />}
    </div>
  );
};
=======
  getTerm = () => this.props.match.params.term;

  isSearchEmpty = () => {
    return this.getTerm() === undefined;
  };

  render() {
    const randomEntry = this.getRandomEntry();
    const glossaryContainerClass = this.isSearchEmpty()
      ? 'glossary__container--has-not-search'
      : 'glossary__container--has-search';
    return (
      <div className={`glossary__container ${glossaryContainerClass}`}>
        <div className={'glossary__search-tools'}>
          <Link to={''} className={'glossary__logo'}>
            <img src={glossarioLogo} />
          </Link>
          <Search
            className={'glossary__search'}
            items={Object.keys(terms).sort()}
            handleSelect={this.handleAcronymChange}
          />
          {this.isSearchEmpty() && <DayPhrase entry={randomEntry} />}
        </div>
        {!this.isSearchEmpty() && <SearchResults term={this.getTerm()} />}
      </div>
    );
  }
}
>>>>>>> Adicionado .prettierrc e consertada formatação dos arquivos

export default GlossaryPage;
