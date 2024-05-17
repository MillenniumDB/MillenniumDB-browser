import antlr4 from 'antlr4';
import SPARQLLexer from '../../grammar/sparql/SPARQLLexer';
import SPARQLParser from '../../grammar/sparql/SPARQLParser';
import QueryErrorListener from '../query-error-listener';

export default class SPARQLLanguageService {
  doValidation(document) {
    const queryErrorListener = new QueryErrorListener();

    const inputStream = new antlr4.InputStream(document);
    const lexer = new SPARQLLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(queryErrorListener);

    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new SPARQLParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(queryErrorListener);
    parser.query();

    return queryErrorListener.getErrors();
  }
}
