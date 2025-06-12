import antlr4 from 'antlr4';
import GQLLexer from '../../grammar/gql/GQLLexer';
import GQLParser from '../../grammar/gql/GQLParser';
import QueryErrorListener from '../query-error-listener';

export default class GQLLanguageService {
  doValidation(document) {
    const queryErrorListener = new QueryErrorListener();

    const inputStream = new antlr4.InputStream(document);
    const lexer = new GQLLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(queryErrorListener);

    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new GQLParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(queryErrorListener);
    parser.root();

    return queryErrorListener.getErrors();
  }
}
