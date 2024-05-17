import antlr4 from 'antlr4';
import MQLLexer from '../../grammar/mql/MQLLexer';
import MQLParser from '../../grammar/mql/MQLParser';
import QueryErrorListener from '../query-error-listener';

export default class MQLLanguageService {
  doValidation(document) {
    const queryErrorListener = new QueryErrorListener();

    const inputStream = new antlr4.InputStream(document);
    const lexer = new MQLLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(queryErrorListener);

    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new MQLParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(queryErrorListener);
    parser.root();

    return queryErrorListener.getErrors();
  }
}
