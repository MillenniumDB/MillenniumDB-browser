// Generated from /home/zeus/MDB/MillenniumDB-browser/src/grammar/mql/MQL_Parser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MQL_Parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		K_ACYCLIC=1, K_AND=2, K_ANY=3, K_AS=4, K_AVG=5, K_ALL=6, K_ASC=7, K_BY=8, 
		K_BOOL=9, K_CALL=10, K_COSINE_DISTANCE=11, K_COSINE_SIMILARITY=12, K_COUNT=13, 
		K_CREATE=14, K_DELETE=15, K_DESCRIBE=16, K_DESC=17, K_DIMENSIONS=18, K_DISTINCT=19, 
		K_EDGE=20, K_EUCLIDEAN_DISTANCE=21, K_FROM=22, K_INCOMING=23, K_INDEX=24, 
		K_INSERT=25, K_INTEGER=26, K_INTO=27, K_IS=28, K_FALSE=29, K_FLOAT=30, 
		K_GROUP=31, K_GROUPS=32, K_IDENTITY=33, K_LABELS=34, K_LABEL=35, K_LET=36, 
		K_LIMIT=37, K_MANHATTAN_DISTANCE=38, K_MATCH=39, K_MAX=40, K_MIN=41, K_OBJECTS=42, 
		K_OFFSET=43, K_OPTIONAL=44, K_ORDER=45, K_OR=46, K_OUTGOING=47, K_PREFIX=48, 
		K_PROPERTIES=49, K_PROPERTY=50, K_NOT=51, K_NULL=52, K_SHORTEST=53, K_SHOW=54, 
		K_SIMPLE=55, K_TEXT_SEARCH=56, K_REGEX=57, K_RETURN=58, K_SUM=59, K_STRING=60, 
		K_TRUE=61, K_TRAILS=62, K_VALUES=63, K_WALKS=64, K_WITH=65, K_WHERE=66, 
		K_YIELD=67, TRUE_PROP=68, FALSE_PROP=69, ANON_ID=70, EDGE_ID=71, KEY=72, 
		TYPE=73, TYPE_VAR=74, VARIABLE=75, STRING=76, UNSIGNED_INTEGER=77, UNSIGNED_FLOAT=78, 
		UNSIGNED_SCIENTIFIC_NOTATION=79, NAME=80, LEQ=81, GEQ=82, EQ=83, NEQ=84, 
		LT=85, GT=86, SINGLE_EQ=87, PATH_SEQUENCE=88, PATH_ALTERNATIVE=89, PATH_NEGATION=90, 
		STAR=91, PERCENT=92, QUESTION_MARK=93, PLUS=94, MINUS=95, L_PAR=96, R_PAR=97, 
		LCURLY_BRACKET=98, RCURLY_BRACKET=99, LSQUARE_BRACKET=100, RSQUARE_BRACKET=101, 
		COMMA=102, COLON=103, WHITE_SPACE=104, SINGLE_LINE_COMMENT=105, UNRECOGNIZED=106;
	public static final int
		RULE_root = 0, RULE_matchQuery = 1, RULE_primitiveStatementList = 2, RULE_primitiveStatement = 3, 
		RULE_insertPatterns = 4, RULE_insertLinearPattern = 5, RULE_insertPlainNode = 6, 
		RULE_insertPlainNodeInside = 7, RULE_insertPlainEdge = 8, RULE_createIndexQuery = 9, 
		RULE_createIndexOptions = 10, RULE_createIndexOption = 11, RULE_showQuery = 12, 
		RULE_describeQuery = 13, RULE_describeFlag = 14, RULE_matchStatement = 15, 
		RULE_letStatement = 16, RULE_letDefinitionList = 17, RULE_letDefinition = 18, 
		RULE_whereStatement = 19, RULE_groupByStatement = 20, RULE_orderByStatement = 21, 
		RULE_returnStatement = 22, RULE_callStatement = 23, RULE_yieldStatement = 24, 
		RULE_yieldItem = 25, RULE_callArguments = 26, RULE_limitOffsetClauses = 27, 
		RULE_limitClause = 28, RULE_offsetClause = 29, RULE_returnItem = 30, RULE_alias = 31, 
		RULE_aggregateFunc = 32, RULE_orderByItem = 33, RULE_groupByItem = 34, 
		RULE_graphPattern = 35, RULE_optionalPattern = 36, RULE_basicPattern = 37, 
		RULE_linearPattern = 38, RULE_path = 39, RULE_pathAlternatives = 40, RULE_pathSequence = 41, 
		RULE_pathAtom = 42, RULE_pathSuffix = 43, RULE_pathType = 44, RULE_node = 45, 
		RULE_fixedNode = 46, RULE_fixedNodeInside = 47, RULE_edge = 48, RULE_edgeInside = 49, 
		RULE_varNode = 50, RULE_properties = 51, RULE_property = 52, RULE_conditionalOrType = 53, 
		RULE_identifier = 54, RULE_boolValue = 55, RULE_numericValue = 56, RULE_datatypeValue = 57, 
		RULE_value = 58, RULE_conditionalOrExpr = 59, RULE_conditionalAndExpr = 60, 
		RULE_comparisonExpr = 61, RULE_additiveExpr = 62, RULE_multiplicativeExpr = 63, 
		RULE_unaryExpr = 64, RULE_atomicExpr = 65, RULE_function = 66, RULE_regex = 67, 
		RULE_textSearch = 68, RULE_cosineSimilarity = 69, RULE_cosineDistance = 70, 
		RULE_manhattanDistance = 71, RULE_euclideanDistance = 72, RULE_textSearchIndexMode = 73, 
		RULE_exprTypename = 74, RULE_keyword = 75;
	private static String[] makeRuleNames() {
		return new String[] {
			"root", "matchQuery", "primitiveStatementList", "primitiveStatement", 
			"insertPatterns", "insertLinearPattern", "insertPlainNode", "insertPlainNodeInside", 
			"insertPlainEdge", "createIndexQuery", "createIndexOptions", "createIndexOption", 
			"showQuery", "describeQuery", "describeFlag", "matchStatement", "letStatement", 
			"letDefinitionList", "letDefinition", "whereStatement", "groupByStatement", 
			"orderByStatement", "returnStatement", "callStatement", "yieldStatement", 
			"yieldItem", "callArguments", "limitOffsetClauses", "limitClause", "offsetClause", 
			"returnItem", "alias", "aggregateFunc", "orderByItem", "groupByItem", 
			"graphPattern", "optionalPattern", "basicPattern", "linearPattern", "path", 
			"pathAlternatives", "pathSequence", "pathAtom", "pathSuffix", "pathType", 
			"node", "fixedNode", "fixedNodeInside", "edge", "edgeInside", "varNode", 
			"properties", "property", "conditionalOrType", "identifier", "boolValue", 
			"numericValue", "datatypeValue", "value", "conditionalOrExpr", "conditionalAndExpr", 
			"comparisonExpr", "additiveExpr", "multiplicativeExpr", "unaryExpr", 
			"atomicExpr", "function", "regex", "textSearch", "cosineSimilarity", 
			"cosineDistance", "manhattanDistance", "euclideanDistance", "textSearchIndexMode", 
			"exprTypename", "keyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "'false'", null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "'true'", null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "'<='", 
			"'>='", "'=='", "'!='", "'<'", "'>'", "'='", "'/'", "'|'", "'^'", "'*'", 
			"'%'", "'?'", "'+'", "'-'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
			"','", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "K_ACYCLIC", "K_AND", "K_ANY", "K_AS", "K_AVG", "K_ALL", "K_ASC", 
			"K_BY", "K_BOOL", "K_CALL", "K_COSINE_DISTANCE", "K_COSINE_SIMILARITY", 
			"K_COUNT", "K_CREATE", "K_DELETE", "K_DESCRIBE", "K_DESC", "K_DIMENSIONS", 
			"K_DISTINCT", "K_EDGE", "K_EUCLIDEAN_DISTANCE", "K_FROM", "K_INCOMING", 
			"K_INDEX", "K_INSERT", "K_INTEGER", "K_INTO", "K_IS", "K_FALSE", "K_FLOAT", 
			"K_GROUP", "K_GROUPS", "K_IDENTITY", "K_LABELS", "K_LABEL", "K_LET", 
			"K_LIMIT", "K_MANHATTAN_DISTANCE", "K_MATCH", "K_MAX", "K_MIN", "K_OBJECTS", 
			"K_OFFSET", "K_OPTIONAL", "K_ORDER", "K_OR", "K_OUTGOING", "K_PREFIX", 
			"K_PROPERTIES", "K_PROPERTY", "K_NOT", "K_NULL", "K_SHORTEST", "K_SHOW", 
			"K_SIMPLE", "K_TEXT_SEARCH", "K_REGEX", "K_RETURN", "K_SUM", "K_STRING", 
			"K_TRUE", "K_TRAILS", "K_VALUES", "K_WALKS", "K_WITH", "K_WHERE", "K_YIELD", 
			"TRUE_PROP", "FALSE_PROP", "ANON_ID", "EDGE_ID", "KEY", "TYPE", "TYPE_VAR", 
			"VARIABLE", "STRING", "UNSIGNED_INTEGER", "UNSIGNED_FLOAT", "UNSIGNED_SCIENTIFIC_NOTATION", 
			"NAME", "LEQ", "GEQ", "EQ", "NEQ", "LT", "GT", "SINGLE_EQ", "PATH_SEQUENCE", 
			"PATH_ALTERNATIVE", "PATH_NEGATION", "STAR", "PERCENT", "QUESTION_MARK", 
			"PLUS", "MINUS", "L_PAR", "R_PAR", "LCURLY_BRACKET", "RCURLY_BRACKET", 
			"LSQUARE_BRACKET", "RSQUARE_BRACKET", "COMMA", "COLON", "WHITE_SPACE", 
			"SINGLE_LINE_COMMENT", "UNRECOGNIZED"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MQL_Parser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MQL_Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RootContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(MQL_Parser.EOF, 0); }
		public MatchQueryContext matchQuery() {
			return getRuleContext(MatchQueryContext.class,0);
		}
		public DescribeQueryContext describeQuery() {
			return getRuleContext(DescribeQueryContext.class,0);
		}
		public InsertPatternsContext insertPatterns() {
			return getRuleContext(InsertPatternsContext.class,0);
		}
		public CreateIndexQueryContext createIndexQuery() {
			return getRuleContext(CreateIndexQueryContext.class,0);
		}
		public ShowQueryContext showQuery() {
			return getRuleContext(ShowQueryContext.class,0);
		}
		public RootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root; }
	}

	public final RootContext root() throws RecognitionException {
		RootContext _localctx = new RootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_root);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_CALL:
			case K_LET:
			case K_MATCH:
				{
				setState(152);
				matchQuery();
				}
				break;
			case K_DESCRIBE:
				{
				setState(153);
				describeQuery();
				}
				break;
			case K_INSERT:
				{
				setState(154);
				insertPatterns();
				}
				break;
			case K_CREATE:
				{
				setState(155);
				createIndexQuery();
				}
				break;
			case K_SHOW:
				{
				setState(156);
				showQuery();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(159);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MatchQueryContext extends ParserRuleContext {
		public PrimitiveStatementListContext primitiveStatementList() {
			return getRuleContext(PrimitiveStatementListContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public WhereStatementContext whereStatement() {
			return getRuleContext(WhereStatementContext.class,0);
		}
		public GroupByStatementContext groupByStatement() {
			return getRuleContext(GroupByStatementContext.class,0);
		}
		public OrderByStatementContext orderByStatement() {
			return getRuleContext(OrderByStatementContext.class,0);
		}
		public MatchQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matchQuery; }
	}

	public final MatchQueryContext matchQuery() throws RecognitionException {
		MatchQueryContext _localctx = new MatchQueryContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_matchQuery);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			primitiveStatementList();
			setState(163);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_WHERE) {
				{
				setState(162);
				whereStatement();
				}
			}

			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_GROUP) {
				{
				setState(165);
				groupByStatement();
				}
			}

			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_ORDER) {
				{
				setState(168);
				orderByStatement();
				}
			}

			setState(171);
			returnStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimitiveStatementListContext extends ParserRuleContext {
		public List<PrimitiveStatementContext> primitiveStatement() {
			return getRuleContexts(PrimitiveStatementContext.class);
		}
		public PrimitiveStatementContext primitiveStatement(int i) {
			return getRuleContext(PrimitiveStatementContext.class,i);
		}
		public PrimitiveStatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveStatementList; }
	}

	public final PrimitiveStatementListContext primitiveStatementList() throws RecognitionException {
		PrimitiveStatementListContext _localctx = new PrimitiveStatementListContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_primitiveStatementList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(173);
				primitiveStatement();
				}
				}
				setState(176); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 618475291648L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimitiveStatementContext extends ParserRuleContext {
		public MatchStatementContext matchStatement() {
			return getRuleContext(MatchStatementContext.class,0);
		}
		public CallStatementContext callStatement() {
			return getRuleContext(CallStatementContext.class,0);
		}
		public LetStatementContext letStatement() {
			return getRuleContext(LetStatementContext.class,0);
		}
		public PrimitiveStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveStatement; }
	}

	public final PrimitiveStatementContext primitiveStatement() throws RecognitionException {
		PrimitiveStatementContext _localctx = new PrimitiveStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_primitiveStatement);
		try {
			setState(181);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_MATCH:
				enterOuterAlt(_localctx, 1);
				{
				setState(178);
				matchStatement();
				}
				break;
			case K_CALL:
				enterOuterAlt(_localctx, 2);
				{
				setState(179);
				callStatement();
				}
				break;
			case K_LET:
				enterOuterAlt(_localctx, 3);
				{
				setState(180);
				letStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InsertPatternsContext extends ParserRuleContext {
		public TerminalNode K_INSERT() { return getToken(MQL_Parser.K_INSERT, 0); }
		public List<InsertLinearPatternContext> insertLinearPattern() {
			return getRuleContexts(InsertLinearPatternContext.class);
		}
		public InsertLinearPatternContext insertLinearPattern(int i) {
			return getRuleContext(InsertLinearPatternContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public InsertPatternsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertPatterns; }
	}

	public final InsertPatternsContext insertPatterns() throws RecognitionException {
		InsertPatternsContext _localctx = new InsertPatternsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_insertPatterns);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(K_INSERT);
			setState(184);
			insertLinearPattern();
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(185);
				match(COMMA);
				setState(186);
				insertLinearPattern();
				}
				}
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InsertLinearPatternContext extends ParserRuleContext {
		public List<InsertPlainNodeContext> insertPlainNode() {
			return getRuleContexts(InsertPlainNodeContext.class);
		}
		public InsertPlainNodeContext insertPlainNode(int i) {
			return getRuleContext(InsertPlainNodeContext.class,i);
		}
		public List<InsertPlainEdgeContext> insertPlainEdge() {
			return getRuleContexts(InsertPlainEdgeContext.class);
		}
		public InsertPlainEdgeContext insertPlainEdge(int i) {
			return getRuleContext(InsertPlainEdgeContext.class,i);
		}
		public InsertLinearPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertLinearPattern; }
	}

	public final InsertLinearPatternContext insertLinearPattern() throws RecognitionException {
		InsertLinearPatternContext _localctx = new InsertLinearPatternContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_insertLinearPattern);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			insertPlainNode();
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LT || _la==MINUS) {
				{
				{
				setState(193);
				insertPlainEdge();
				setState(194);
				insertPlainNode();
				}
				}
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InsertPlainNodeContext extends ParserRuleContext {
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public InsertPlainNodeInsideContext insertPlainNodeInside() {
			return getRuleContext(InsertPlainNodeInsideContext.class,0);
		}
		public List<TerminalNode> TYPE() { return getTokens(MQL_Parser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(MQL_Parser.TYPE, i);
		}
		public PropertiesContext properties() {
			return getRuleContext(PropertiesContext.class,0);
		}
		public InsertPlainNodeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertPlainNode; }
	}

	public final InsertPlainNodeContext insertPlainNode() throws RecognitionException {
		InsertPlainNodeContext _localctx = new InsertPlainNodeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_insertPlainNode);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(L_PAR);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & -2305843009750564866L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 65551L) != 0)) {
				{
				setState(202);
				insertPlainNodeInside();
				}
			}

			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TYPE) {
				{
				{
				setState(205);
				match(TYPE);
				}
				}
				setState(210);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LCURLY_BRACKET) {
				{
				setState(211);
				properties();
				}
			}

			setState(214);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InsertPlainNodeInsideContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public InsertPlainNodeInsideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertPlainNodeInside; }
	}

	public final InsertPlainNodeInsideContext insertPlainNodeInside() throws RecognitionException {
		InsertPlainNodeInsideContext _localctx = new InsertPlainNodeInsideContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_insertPlainNodeInside);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InsertPlainEdgeContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(MQL_Parser.LT, 0); }
		public List<TerminalNode> MINUS() { return getTokens(MQL_Parser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(MQL_Parser.MINUS, i);
		}
		public TerminalNode LSQUARE_BRACKET() { return getToken(MQL_Parser.LSQUARE_BRACKET, 0); }
		public TerminalNode TYPE() { return getToken(MQL_Parser.TYPE, 0); }
		public TerminalNode RSQUARE_BRACKET() { return getToken(MQL_Parser.RSQUARE_BRACKET, 0); }
		public PropertiesContext properties() {
			return getRuleContext(PropertiesContext.class,0);
		}
		public TerminalNode GT() { return getToken(MQL_Parser.GT, 0); }
		public InsertPlainEdgeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertPlainEdge; }
	}

	public final InsertPlainEdgeContext insertPlainEdge() throws RecognitionException {
		InsertPlainEdgeContext _localctx = new InsertPlainEdgeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_insertPlainEdge);
		int _la;
		try {
			setState(236);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LT:
				enterOuterAlt(_localctx, 1);
				{
				setState(218);
				match(LT);
				setState(219);
				match(MINUS);
				setState(220);
				match(LSQUARE_BRACKET);
				setState(221);
				match(TYPE);
				setState(223);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LCURLY_BRACKET) {
					{
					setState(222);
					properties();
					}
				}

				setState(225);
				match(RSQUARE_BRACKET);
				setState(226);
				match(MINUS);
				}
				break;
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(227);
				match(MINUS);
				setState(228);
				match(LSQUARE_BRACKET);
				setState(229);
				match(TYPE);
				setState(231);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LCURLY_BRACKET) {
					{
					setState(230);
					properties();
					}
				}

				setState(233);
				match(RSQUARE_BRACKET);
				setState(234);
				match(MINUS);
				setState(235);
				match(GT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CreateIndexQueryContext extends ParserRuleContext {
		public TerminalNode K_CREATE() { return getToken(MQL_Parser.K_CREATE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode K_INDEX() { return getToken(MQL_Parser.K_INDEX, 0); }
		public TerminalNode STRING() { return getToken(MQL_Parser.STRING, 0); }
		public TerminalNode K_WITH() { return getToken(MQL_Parser.K_WITH, 0); }
		public CreateIndexOptionsContext createIndexOptions() {
			return getRuleContext(CreateIndexOptionsContext.class,0);
		}
		public CreateIndexQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndexQuery; }
	}

	public final CreateIndexQueryContext createIndexQuery() throws RecognitionException {
		CreateIndexQueryContext _localctx = new CreateIndexQueryContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_createIndexQuery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(K_CREATE);
			setState(239);
			identifier();
			setState(240);
			match(K_INDEX);
			setState(241);
			match(STRING);
			setState(242);
			match(K_WITH);
			setState(243);
			createIndexOptions();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CreateIndexOptionsContext extends ParserRuleContext {
		public TerminalNode LCURLY_BRACKET() { return getToken(MQL_Parser.LCURLY_BRACKET, 0); }
		public TerminalNode RCURLY_BRACKET() { return getToken(MQL_Parser.RCURLY_BRACKET, 0); }
		public List<CreateIndexOptionContext> createIndexOption() {
			return getRuleContexts(CreateIndexOptionContext.class);
		}
		public CreateIndexOptionContext createIndexOption(int i) {
			return getRuleContext(CreateIndexOptionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public CreateIndexOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndexOptions; }
	}

	public final CreateIndexOptionsContext createIndexOptions() throws RecognitionException {
		CreateIndexOptionsContext _localctx = new CreateIndexOptionsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_createIndexOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			match(LCURLY_BRACKET);
			setState(254);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STRING) {
				{
				setState(246);
				createIndexOption();
				setState(251);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(247);
					match(COMMA);
					setState(248);
					createIndexOption();
					}
					}
					setState(253);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(256);
			match(RCURLY_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CreateIndexOptionContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(MQL_Parser.STRING, 0); }
		public TerminalNode SINGLE_EQ() { return getToken(MQL_Parser.SINGLE_EQ, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public BoolValueContext boolValue() {
			return getRuleContext(BoolValueContext.class,0);
		}
		public CreateIndexOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createIndexOption; }
	}

	public final CreateIndexOptionContext createIndexOption() throws RecognitionException {
		CreateIndexOptionContext _localctx = new CreateIndexOptionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_createIndexOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(STRING);
			setState(262);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SINGLE_EQ:
				{
				setState(259);
				match(SINGLE_EQ);
				setState(260);
				value();
				}
				break;
			case K_FALSE:
			case K_TRUE:
				{
				setState(261);
				boolValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ShowQueryContext extends ParserRuleContext {
		public TerminalNode K_SHOW() { return getToken(MQL_Parser.K_SHOW, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode K_INDEX() { return getToken(MQL_Parser.K_INDEX, 0); }
		public ShowQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showQuery; }
	}

	public final ShowQueryContext showQuery() throws RecognitionException {
		ShowQueryContext _localctx = new ShowQueryContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_showQuery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(K_SHOW);
			setState(269);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				{
				}
				break;
			case K_ACYCLIC:
			case K_AND:
			case K_ANY:
			case K_AS:
			case K_AVG:
			case K_ALL:
			case K_ASC:
			case K_BY:
			case K_BOOL:
			case K_CALL:
			case K_COSINE_DISTANCE:
			case K_COSINE_SIMILARITY:
			case K_COUNT:
			case K_CREATE:
			case K_DELETE:
			case K_DESCRIBE:
			case K_DESC:
			case K_DIMENSIONS:
			case K_DISTINCT:
			case K_EDGE:
			case K_EUCLIDEAN_DISTANCE:
			case K_FROM:
			case K_INCOMING:
			case K_INDEX:
			case K_INSERT:
			case K_INTEGER:
			case K_INTO:
			case K_IS:
			case K_FLOAT:
			case K_GROUP:
			case K_GROUPS:
			case K_IDENTITY:
			case K_LABELS:
			case K_LABEL:
			case K_LET:
			case K_LIMIT:
			case K_MANHATTAN_DISTANCE:
			case K_MATCH:
			case K_MAX:
			case K_MIN:
			case K_OBJECTS:
			case K_OFFSET:
			case K_OPTIONAL:
			case K_ORDER:
			case K_OR:
			case K_OUTGOING:
			case K_PREFIX:
			case K_PROPERTIES:
			case K_PROPERTY:
			case K_NOT:
			case K_NULL:
			case K_SHORTEST:
			case K_SHOW:
			case K_SIMPLE:
			case K_TEXT_SEARCH:
			case K_REGEX:
			case K_RETURN:
			case K_SUM:
			case K_STRING:
			case K_TRAILS:
			case K_VALUES:
			case K_WALKS:
			case K_WITH:
			case K_WHERE:
			case K_YIELD:
			case NAME:
				{
				setState(266);
				identifier();
				setState(267);
				match(K_INDEX);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DescribeQueryContext extends ParserRuleContext {
		public TerminalNode K_DESCRIBE() { return getToken(MQL_Parser.K_DESCRIBE, 0); }
		public FixedNodeInsideContext fixedNodeInside() {
			return getRuleContext(FixedNodeInsideContext.class,0);
		}
		public List<DescribeFlagContext> describeFlag() {
			return getRuleContexts(DescribeFlagContext.class);
		}
		public DescribeFlagContext describeFlag(int i) {
			return getRuleContext(DescribeFlagContext.class,i);
		}
		public DescribeQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_describeQuery; }
	}

	public final DescribeQueryContext describeQuery() throws RecognitionException {
		DescribeQueryContext _localctx = new DescribeQueryContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_describeQuery);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(K_DESCRIBE);
			setState(275);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(272);
					describeFlag();
					}
					} 
				}
				setState(277);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			setState(278);
			fixedNodeInside();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DescribeFlagContext extends ParserRuleContext {
		public TerminalNode K_LABELS() { return getToken(MQL_Parser.K_LABELS, 0); }
		public TerminalNode K_PROPERTIES() { return getToken(MQL_Parser.K_PROPERTIES, 0); }
		public TerminalNode K_OUTGOING() { return getToken(MQL_Parser.K_OUTGOING, 0); }
		public TerminalNode K_INCOMING() { return getToken(MQL_Parser.K_INCOMING, 0); }
		public TerminalNode K_LIMIT() { return getToken(MQL_Parser.K_LIMIT, 0); }
		public TerminalNode UNSIGNED_INTEGER() { return getToken(MQL_Parser.UNSIGNED_INTEGER, 0); }
		public DescribeFlagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_describeFlag; }
	}

	public final DescribeFlagContext describeFlag() throws RecognitionException {
		DescribeFlagContext _localctx = new DescribeFlagContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_describeFlag);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 703704630034432L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(283);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(281);
				match(K_LIMIT);
				setState(282);
				match(UNSIGNED_INTEGER);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MatchStatementContext extends ParserRuleContext {
		public TerminalNode K_MATCH() { return getToken(MQL_Parser.K_MATCH, 0); }
		public GraphPatternContext graphPattern() {
			return getRuleContext(GraphPatternContext.class,0);
		}
		public MatchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matchStatement; }
	}

	public final MatchStatementContext matchStatement() throws RecognitionException {
		MatchStatementContext _localctx = new MatchStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_matchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
			match(K_MATCH);
			setState(286);
			graphPattern();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LetStatementContext extends ParserRuleContext {
		public TerminalNode K_LET() { return getToken(MQL_Parser.K_LET, 0); }
		public LetDefinitionListContext letDefinitionList() {
			return getRuleContext(LetDefinitionListContext.class,0);
		}
		public LetStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStatement; }
	}

	public final LetStatementContext letStatement() throws RecognitionException {
		LetStatementContext _localctx = new LetStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_letStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(K_LET);
			setState(289);
			letDefinitionList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LetDefinitionListContext extends ParserRuleContext {
		public List<LetDefinitionContext> letDefinition() {
			return getRuleContexts(LetDefinitionContext.class);
		}
		public LetDefinitionContext letDefinition(int i) {
			return getRuleContext(LetDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public LetDefinitionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letDefinitionList; }
	}

	public final LetDefinitionListContext letDefinitionList() throws RecognitionException {
		LetDefinitionListContext _localctx = new LetDefinitionListContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_letDefinitionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			letDefinition();
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(292);
				match(COMMA);
				setState(293);
				letDefinition();
				}
				}
				setState(298);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LetDefinitionContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode SINGLE_EQ() { return getToken(MQL_Parser.SINGLE_EQ, 0); }
		public ConditionalOrExprContext conditionalOrExpr() {
			return getRuleContext(ConditionalOrExprContext.class,0);
		}
		public LetDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letDefinition; }
	}

	public final LetDefinitionContext letDefinition() throws RecognitionException {
		LetDefinitionContext _localctx = new LetDefinitionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_letDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			match(VARIABLE);
			setState(300);
			match(SINGLE_EQ);
			setState(301);
			conditionalOrExpr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhereStatementContext extends ParserRuleContext {
		public TerminalNode K_WHERE() { return getToken(MQL_Parser.K_WHERE, 0); }
		public ConditionalOrExprContext conditionalOrExpr() {
			return getRuleContext(ConditionalOrExprContext.class,0);
		}
		public WhereStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whereStatement; }
	}

	public final WhereStatementContext whereStatement() throws RecognitionException {
		WhereStatementContext _localctx = new WhereStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_whereStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(K_WHERE);
			setState(304);
			conditionalOrExpr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GroupByStatementContext extends ParserRuleContext {
		public TerminalNode K_GROUP() { return getToken(MQL_Parser.K_GROUP, 0); }
		public TerminalNode K_BY() { return getToken(MQL_Parser.K_BY, 0); }
		public List<GroupByItemContext> groupByItem() {
			return getRuleContexts(GroupByItemContext.class);
		}
		public GroupByItemContext groupByItem(int i) {
			return getRuleContext(GroupByItemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public GroupByStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupByStatement; }
	}

	public final GroupByStatementContext groupByStatement() throws RecognitionException {
		GroupByStatementContext _localctx = new GroupByStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_groupByStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			match(K_GROUP);
			setState(307);
			match(K_BY);
			setState(308);
			groupByItem();
			setState(313);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(309);
				match(COMMA);
				setState(310);
				groupByItem();
				}
				}
				setState(315);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OrderByStatementContext extends ParserRuleContext {
		public TerminalNode K_ORDER() { return getToken(MQL_Parser.K_ORDER, 0); }
		public TerminalNode K_BY() { return getToken(MQL_Parser.K_BY, 0); }
		public List<OrderByItemContext> orderByItem() {
			return getRuleContexts(OrderByItemContext.class);
		}
		public OrderByItemContext orderByItem(int i) {
			return getRuleContext(OrderByItemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public OrderByStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderByStatement; }
	}

	public final OrderByStatementContext orderByStatement() throws RecognitionException {
		OrderByStatementContext _localctx = new OrderByStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_orderByStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			match(K_ORDER);
			setState(317);
			match(K_BY);
			setState(318);
			orderByItem();
			setState(323);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(319);
				match(COMMA);
				setState(320);
				orderByItem();
				}
				}
				setState(325);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends ParserRuleContext {
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	 
		public ReturnStatementContext() { }
		public void copyFrom(ReturnStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnAllContext extends ReturnStatementContext {
		public TerminalNode K_RETURN() { return getToken(MQL_Parser.K_RETURN, 0); }
		public TerminalNode STAR() { return getToken(MQL_Parser.STAR, 0); }
		public TerminalNode K_DISTINCT() { return getToken(MQL_Parser.K_DISTINCT, 0); }
		public LimitOffsetClausesContext limitOffsetClauses() {
			return getRuleContext(LimitOffsetClausesContext.class,0);
		}
		public ReturnAllContext(ReturnStatementContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnListContext extends ReturnStatementContext {
		public TerminalNode K_RETURN() { return getToken(MQL_Parser.K_RETURN, 0); }
		public List<ReturnItemContext> returnItem() {
			return getRuleContexts(ReturnItemContext.class);
		}
		public ReturnItemContext returnItem(int i) {
			return getRuleContext(ReturnItemContext.class,i);
		}
		public TerminalNode K_DISTINCT() { return getToken(MQL_Parser.K_DISTINCT, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public LimitOffsetClausesContext limitOffsetClauses() {
			return getRuleContext(LimitOffsetClausesContext.class,0);
		}
		public ReturnListContext(ReturnStatementContext ctx) { copyFrom(ctx); }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_returnStatement);
		int _la;
		try {
			setState(349);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				_localctx = new ReturnListContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(326);
				match(K_RETURN);
				setState(328);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
				case 1:
					{
					setState(327);
					match(K_DISTINCT);
					}
					break;
				}
				setState(330);
				returnItem();
				setState(335);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(331);
					match(COMMA);
					setState(332);
					returnItem();
					}
					}
					setState(337);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(339);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_LIMIT || _la==K_OFFSET) {
					{
					setState(338);
					limitOffsetClauses();
					}
				}

				}
				break;
			case 2:
				_localctx = new ReturnAllContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(341);
				match(K_RETURN);
				setState(343);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_DISTINCT) {
					{
					setState(342);
					match(K_DISTINCT);
					}
				}

				setState(345);
				match(STAR);
				setState(347);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_LIMIT || _la==K_OFFSET) {
					{
					setState(346);
					limitOffsetClauses();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CallStatementContext extends ParserRuleContext {
		public TerminalNode K_CALL() { return getToken(MQL_Parser.K_CALL, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public CallArgumentsContext callArguments() {
			return getRuleContext(CallArgumentsContext.class,0);
		}
		public YieldStatementContext yieldStatement() {
			return getRuleContext(YieldStatementContext.class,0);
		}
		public CallStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callStatement; }
	}

	public final CallStatementContext callStatement() throws RecognitionException {
		CallStatementContext _localctx = new CallStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_callStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(K_CALL);
			setState(352);
			identifier();
			setState(353);
			match(L_PAR);
			setState(355);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & -2L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 7516321999L) != 0)) {
				{
				setState(354);
				callArguments();
				}
			}

			setState(357);
			match(R_PAR);
			setState(359);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_YIELD) {
				{
				setState(358);
				yieldStatement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class YieldStatementContext extends ParserRuleContext {
		public TerminalNode K_YIELD() { return getToken(MQL_Parser.K_YIELD, 0); }
		public TerminalNode STAR() { return getToken(MQL_Parser.STAR, 0); }
		public List<YieldItemContext> yieldItem() {
			return getRuleContexts(YieldItemContext.class);
		}
		public YieldItemContext yieldItem(int i) {
			return getRuleContext(YieldItemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public YieldStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yieldStatement; }
	}

	public final YieldStatementContext yieldStatement() throws RecognitionException {
		YieldStatementContext _localctx = new YieldStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_yieldStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			match(K_YIELD);
			setState(371);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STAR:
				{
				setState(362);
				match(STAR);
				}
				break;
			case VARIABLE:
				{
				setState(363);
				yieldItem();
				setState(368);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(364);
					match(COMMA);
					setState(365);
					yieldItem();
					}
					}
					setState(370);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class YieldItemContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public AliasContext alias() {
			return getRuleContext(AliasContext.class,0);
		}
		public YieldItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_yieldItem; }
	}

	public final YieldItemContext yieldItem() throws RecognitionException {
		YieldItemContext _localctx = new YieldItemContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_yieldItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			match(VARIABLE);
			setState(375);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==K_AS) {
				{
				setState(374);
				alias();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CallArgumentsContext extends ParserRuleContext {
		public List<ConditionalOrExprContext> conditionalOrExpr() {
			return getRuleContexts(ConditionalOrExprContext.class);
		}
		public ConditionalOrExprContext conditionalOrExpr(int i) {
			return getRuleContext(ConditionalOrExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public CallArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callArguments; }
	}

	public final CallArgumentsContext callArguments() throws RecognitionException {
		CallArgumentsContext _localctx = new CallArgumentsContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_callArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
			conditionalOrExpr();
			setState(382);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(378);
				match(COMMA);
				setState(379);
				conditionalOrExpr();
				}
				}
				setState(384);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LimitOffsetClausesContext extends ParserRuleContext {
		public LimitClauseContext limitClause() {
			return getRuleContext(LimitClauseContext.class,0);
		}
		public OffsetClauseContext offsetClause() {
			return getRuleContext(OffsetClauseContext.class,0);
		}
		public LimitOffsetClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitOffsetClauses; }
	}

	public final LimitOffsetClausesContext limitOffsetClauses() throws RecognitionException {
		LimitOffsetClausesContext _localctx = new LimitOffsetClausesContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_limitOffsetClauses);
		int _la;
		try {
			setState(393);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_LIMIT:
				enterOuterAlt(_localctx, 1);
				{
				setState(385);
				limitClause();
				setState(387);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_OFFSET) {
					{
					setState(386);
					offsetClause();
					}
				}

				}
				break;
			case K_OFFSET:
				enterOuterAlt(_localctx, 2);
				{
				setState(389);
				offsetClause();
				setState(391);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_LIMIT) {
					{
					setState(390);
					limitClause();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LimitClauseContext extends ParserRuleContext {
		public TerminalNode K_LIMIT() { return getToken(MQL_Parser.K_LIMIT, 0); }
		public TerminalNode UNSIGNED_INTEGER() { return getToken(MQL_Parser.UNSIGNED_INTEGER, 0); }
		public LimitClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitClause; }
	}

	public final LimitClauseContext limitClause() throws RecognitionException {
		LimitClauseContext _localctx = new LimitClauseContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_limitClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(K_LIMIT);
			setState(396);
			match(UNSIGNED_INTEGER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OffsetClauseContext extends ParserRuleContext {
		public TerminalNode K_OFFSET() { return getToken(MQL_Parser.K_OFFSET, 0); }
		public TerminalNode UNSIGNED_INTEGER() { return getToken(MQL_Parser.UNSIGNED_INTEGER, 0); }
		public OffsetClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_offsetClause; }
	}

	public final OffsetClauseContext offsetClause() throws RecognitionException {
		OffsetClauseContext _localctx = new OffsetClauseContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_offsetClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			match(K_OFFSET);
			setState(399);
			match(UNSIGNED_INTEGER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnItemContext extends ParserRuleContext {
		public ReturnItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnItem; }
	 
		public ReturnItemContext() { }
		public void copyFrom(ReturnItemContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnItemExprContext extends ReturnItemContext {
		public ConditionalOrExprContext conditionalOrExpr() {
			return getRuleContext(ConditionalOrExprContext.class,0);
		}
		public AliasContext alias() {
			return getRuleContext(AliasContext.class,0);
		}
		public ReturnItemExprContext(ReturnItemContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnItemVarContext extends ReturnItemContext {
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public ReturnItemVarContext(ReturnItemContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnItemAggContext extends ReturnItemContext {
		public AggregateFuncContext aggregateFunc() {
			return getRuleContext(AggregateFuncContext.class,0);
		}
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public AliasContext alias() {
			return getRuleContext(AliasContext.class,0);
		}
		public ReturnItemAggContext(ReturnItemContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReturnItemCountContext extends ReturnItemContext {
		public TerminalNode K_COUNT() { return getToken(MQL_Parser.K_COUNT, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode STAR() { return getToken(MQL_Parser.STAR, 0); }
		public TerminalNode K_DISTINCT() { return getToken(MQL_Parser.K_DISTINCT, 0); }
		public AliasContext alias() {
			return getRuleContext(AliasContext.class,0);
		}
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public ReturnItemCountContext(ReturnItemContext ctx) { copyFrom(ctx); }
	}

	public final ReturnItemContext returnItem() throws RecognitionException {
		ReturnItemContext _localctx = new ReturnItemContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_returnItem);
		int _la;
		try {
			setState(434);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				_localctx = new ReturnItemVarContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(401);
				match(VARIABLE);
				setState(403);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KEY) {
					{
					setState(402);
					match(KEY);
					}
				}

				}
				break;
			case 2:
				_localctx = new ReturnItemAggContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(405);
				aggregateFunc();
				setState(406);
				match(L_PAR);
				setState(407);
				match(VARIABLE);
				setState(409);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KEY) {
					{
					setState(408);
					match(KEY);
					}
				}

				setState(411);
				match(R_PAR);
				setState(413);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AS) {
					{
					setState(412);
					alias();
					}
				}

				}
				break;
			case 3:
				_localctx = new ReturnItemCountContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(415);
				match(K_COUNT);
				setState(416);
				match(L_PAR);
				setState(418);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_DISTINCT) {
					{
					setState(417);
					match(K_DISTINCT);
					}
				}

				setState(425);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case VARIABLE:
					{
					setState(420);
					match(VARIABLE);
					setState(422);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==KEY) {
						{
						setState(421);
						match(KEY);
						}
					}

					}
					break;
				case STAR:
					{
					setState(424);
					match(STAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(427);
				match(R_PAR);
				setState(429);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_AS) {
					{
					setState(428);
					alias();
					}
				}

				}
				break;
			case 4:
				_localctx = new ReturnItemExprContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(431);
				conditionalOrExpr();
				setState(432);
				alias();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AliasContext extends ParserRuleContext {
		public TerminalNode K_AS() { return getToken(MQL_Parser.K_AS, 0); }
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public AliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alias; }
	}

	public final AliasContext alias() throws RecognitionException {
		AliasContext _localctx = new AliasContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_alias);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			match(K_AS);
			setState(437);
			match(VARIABLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AggregateFuncContext extends ParserRuleContext {
		public TerminalNode K_SUM() { return getToken(MQL_Parser.K_SUM, 0); }
		public TerminalNode K_MAX() { return getToken(MQL_Parser.K_MAX, 0); }
		public TerminalNode K_MIN() { return getToken(MQL_Parser.K_MIN, 0); }
		public TerminalNode K_AVG() { return getToken(MQL_Parser.K_AVG, 0); }
		public AggregateFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregateFunc; }
	}

	public final AggregateFuncContext aggregateFunc() throws RecognitionException {
		AggregateFuncContext _localctx = new AggregateFuncContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_aggregateFunc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 576464050838306848L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OrderByItemContext extends ParserRuleContext {
		public OrderByItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderByItem; }
	 
		public OrderByItemContext() { }
		public void copyFrom(OrderByItemContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OrderByItemCountContext extends OrderByItemContext {
		public TerminalNode K_COUNT() { return getToken(MQL_Parser.K_COUNT, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public TerminalNode K_DISTINCT() { return getToken(MQL_Parser.K_DISTINCT, 0); }
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public TerminalNode K_ASC() { return getToken(MQL_Parser.K_ASC, 0); }
		public TerminalNode K_DESC() { return getToken(MQL_Parser.K_DESC, 0); }
		public OrderByItemCountContext(OrderByItemContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OrderByItemExprContext extends OrderByItemContext {
		public ConditionalOrExprContext conditionalOrExpr() {
			return getRuleContext(ConditionalOrExprContext.class,0);
		}
		public TerminalNode K_ASC() { return getToken(MQL_Parser.K_ASC, 0); }
		public TerminalNode K_DESC() { return getToken(MQL_Parser.K_DESC, 0); }
		public OrderByItemExprContext(OrderByItemContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OrderByItemVarContext extends OrderByItemContext {
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public TerminalNode K_ASC() { return getToken(MQL_Parser.K_ASC, 0); }
		public TerminalNode K_DESC() { return getToken(MQL_Parser.K_DESC, 0); }
		public OrderByItemVarContext(OrderByItemContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OrderByItemAggContext extends OrderByItemContext {
		public AggregateFuncContext aggregateFunc() {
			return getRuleContext(AggregateFuncContext.class,0);
		}
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public TerminalNode K_ASC() { return getToken(MQL_Parser.K_ASC, 0); }
		public TerminalNode K_DESC() { return getToken(MQL_Parser.K_DESC, 0); }
		public OrderByItemAggContext(OrderByItemContext ctx) { copyFrom(ctx); }
	}

	public final OrderByItemContext orderByItem() throws RecognitionException {
		OrderByItemContext _localctx = new OrderByItemContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_orderByItem);
		int _la;
		try {
			setState(475);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				_localctx = new OrderByItemVarContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(441);
				match(VARIABLE);
				setState(443);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KEY) {
					{
					setState(442);
					match(KEY);
					}
				}

				setState(446);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_ASC || _la==K_DESC) {
					{
					setState(445);
					_la = _input.LA(1);
					if ( !(_la==K_ASC || _la==K_DESC) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case 2:
				_localctx = new OrderByItemAggContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(448);
				aggregateFunc();
				setState(449);
				match(L_PAR);
				setState(450);
				match(VARIABLE);
				setState(452);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KEY) {
					{
					setState(451);
					match(KEY);
					}
				}

				setState(454);
				match(R_PAR);
				setState(456);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_ASC || _la==K_DESC) {
					{
					setState(455);
					_la = _input.LA(1);
					if ( !(_la==K_ASC || _la==K_DESC) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case 3:
				_localctx = new OrderByItemCountContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(458);
				match(K_COUNT);
				setState(459);
				match(L_PAR);
				setState(461);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_DISTINCT) {
					{
					setState(460);
					match(K_DISTINCT);
					}
				}

				setState(463);
				match(VARIABLE);
				setState(465);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KEY) {
					{
					setState(464);
					match(KEY);
					}
				}

				setState(467);
				match(R_PAR);
				setState(469);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_ASC || _la==K_DESC) {
					{
					setState(468);
					_la = _input.LA(1);
					if ( !(_la==K_ASC || _la==K_DESC) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case 4:
				_localctx = new OrderByItemExprContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(471);
				conditionalOrExpr();
				setState(473);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_ASC || _la==K_DESC) {
					{
					setState(472);
					_la = _input.LA(1);
					if ( !(_la==K_ASC || _la==K_DESC) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GroupByItemContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public GroupByItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupByItem; }
	}

	public final GroupByItemContext groupByItem() throws RecognitionException {
		GroupByItemContext _localctx = new GroupByItemContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_groupByItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			match(VARIABLE);
			setState(479);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KEY) {
				{
				setState(478);
				match(KEY);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GraphPatternContext extends ParserRuleContext {
		public BasicPatternContext basicPattern() {
			return getRuleContext(BasicPatternContext.class,0);
		}
		public List<OptionalPatternContext> optionalPattern() {
			return getRuleContexts(OptionalPatternContext.class);
		}
		public OptionalPatternContext optionalPattern(int i) {
			return getRuleContext(OptionalPatternContext.class,i);
		}
		public GraphPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_graphPattern; }
	}

	public final GraphPatternContext graphPattern() throws RecognitionException {
		GraphPatternContext _localctx = new GraphPatternContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_graphPattern);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			basicPattern();
			setState(485);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_OPTIONAL) {
				{
				{
				setState(482);
				optionalPattern();
				}
				}
				setState(487);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OptionalPatternContext extends ParserRuleContext {
		public TerminalNode K_OPTIONAL() { return getToken(MQL_Parser.K_OPTIONAL, 0); }
		public TerminalNode LCURLY_BRACKET() { return getToken(MQL_Parser.LCURLY_BRACKET, 0); }
		public GraphPatternContext graphPattern() {
			return getRuleContext(GraphPatternContext.class,0);
		}
		public TerminalNode RCURLY_BRACKET() { return getToken(MQL_Parser.RCURLY_BRACKET, 0); }
		public OptionalPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalPattern; }
	}

	public final OptionalPatternContext optionalPattern() throws RecognitionException {
		OptionalPatternContext _localctx = new OptionalPatternContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_optionalPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(488);
			match(K_OPTIONAL);
			setState(489);
			match(LCURLY_BRACKET);
			setState(490);
			graphPattern();
			setState(491);
			match(RCURLY_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BasicPatternContext extends ParserRuleContext {
		public List<LinearPatternContext> linearPattern() {
			return getRuleContexts(LinearPatternContext.class);
		}
		public LinearPatternContext linearPattern(int i) {
			return getRuleContext(LinearPatternContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public BasicPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicPattern; }
	}

	public final BasicPatternContext basicPattern() throws RecognitionException {
		BasicPatternContext _localctx = new BasicPatternContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_basicPattern);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(493);
			linearPattern();
			setState(498);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(494);
				match(COMMA);
				setState(495);
				linearPattern();
				}
				}
				setState(500);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LinearPatternContext extends ParserRuleContext {
		public List<NodeContext> node() {
			return getRuleContexts(NodeContext.class);
		}
		public NodeContext node(int i) {
			return getRuleContext(NodeContext.class,i);
		}
		public List<EdgeContext> edge() {
			return getRuleContexts(EdgeContext.class);
		}
		public EdgeContext edge(int i) {
			return getRuleContext(EdgeContext.class,i);
		}
		public List<PathContext> path() {
			return getRuleContexts(PathContext.class);
		}
		public PathContext path(int i) {
			return getRuleContext(PathContext.class,i);
		}
		public LinearPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linearPattern; }
	}

	public final LinearPatternContext linearPattern() throws RecognitionException {
		LinearPatternContext _localctx = new LinearPatternContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_linearPattern);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(501);
			node();
			setState(510);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 81)) & ~0x3f) == 0 && ((1L << (_la - 81)) & 16465L) != 0)) {
				{
				{
				setState(504);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LT:
				case MINUS:
					{
					setState(502);
					edge();
					}
					break;
				case LEQ:
				case SINGLE_EQ:
					{
					setState(503);
					path();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(506);
				node();
				}
				}
				setState(512);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PathContext extends ParserRuleContext {
		public TerminalNode LEQ() { return getToken(MQL_Parser.LEQ, 0); }
		public TerminalNode LSQUARE_BRACKET() { return getToken(MQL_Parser.LSQUARE_BRACKET, 0); }
		public PathAlternativesContext pathAlternatives() {
			return getRuleContext(PathAlternativesContext.class,0);
		}
		public TerminalNode RSQUARE_BRACKET() { return getToken(MQL_Parser.RSQUARE_BRACKET, 0); }
		public List<TerminalNode> SINGLE_EQ() { return getTokens(MQL_Parser.SINGLE_EQ); }
		public TerminalNode SINGLE_EQ(int i) {
			return getToken(MQL_Parser.SINGLE_EQ, i);
		}
		public PathTypeContext pathType() {
			return getRuleContext(PathTypeContext.class,0);
		}
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode GT() { return getToken(MQL_Parser.GT, 0); }
		public PathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_path; }
	}

	public final PathContext path() throws RecognitionException {
		PathContext _localctx = new PathContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_path);
		int _la;
		try {
			setState(538);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LEQ:
				enterOuterAlt(_localctx, 1);
				{
				setState(513);
				match(LEQ);
				setState(514);
				match(LSQUARE_BRACKET);
				setState(516);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9007199254741064L) != 0)) {
					{
					setState(515);
					pathType();
					}
				}

				setState(519);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VARIABLE) {
					{
					setState(518);
					match(VARIABLE);
					}
				}

				setState(521);
				pathAlternatives();
				setState(522);
				match(RSQUARE_BRACKET);
				setState(523);
				match(SINGLE_EQ);
				}
				break;
			case SINGLE_EQ:
				enterOuterAlt(_localctx, 2);
				{
				setState(525);
				match(SINGLE_EQ);
				setState(526);
				match(LSQUARE_BRACKET);
				setState(528);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 9007199254741064L) != 0)) {
					{
					setState(527);
					pathType();
					}
				}

				setState(531);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VARIABLE) {
					{
					setState(530);
					match(VARIABLE);
					}
				}

				setState(533);
				pathAlternatives();
				setState(534);
				match(RSQUARE_BRACKET);
				setState(535);
				match(SINGLE_EQ);
				setState(536);
				match(GT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PathAlternativesContext extends ParserRuleContext {
		public List<PathSequenceContext> pathSequence() {
			return getRuleContexts(PathSequenceContext.class);
		}
		public PathSequenceContext pathSequence(int i) {
			return getRuleContext(PathSequenceContext.class,i);
		}
		public List<TerminalNode> PATH_ALTERNATIVE() { return getTokens(MQL_Parser.PATH_ALTERNATIVE); }
		public TerminalNode PATH_ALTERNATIVE(int i) {
			return getToken(MQL_Parser.PATH_ALTERNATIVE, i);
		}
		public PathAlternativesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathAlternatives; }
	}

	public final PathAlternativesContext pathAlternatives() throws RecognitionException {
		PathAlternativesContext _localctx = new PathAlternativesContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_pathAlternatives);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			pathSequence();
			setState(545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PATH_ALTERNATIVE) {
				{
				{
				setState(541);
				match(PATH_ALTERNATIVE);
				setState(542);
				pathSequence();
				}
				}
				setState(547);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PathSequenceContext extends ParserRuleContext {
		public List<PathAtomContext> pathAtom() {
			return getRuleContexts(PathAtomContext.class);
		}
		public PathAtomContext pathAtom(int i) {
			return getRuleContext(PathAtomContext.class,i);
		}
		public List<TerminalNode> PATH_SEQUENCE() { return getTokens(MQL_Parser.PATH_SEQUENCE); }
		public TerminalNode PATH_SEQUENCE(int i) {
			return getToken(MQL_Parser.PATH_SEQUENCE, i);
		}
		public PathSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathSequence; }
	}

	public final PathSequenceContext pathSequence() throws RecognitionException {
		PathSequenceContext _localctx = new PathSequenceContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_pathSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(548);
			pathAtom();
			setState(553);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PATH_SEQUENCE) {
				{
				{
				setState(549);
				match(PATH_SEQUENCE);
				setState(550);
				pathAtom();
				}
				}
				setState(555);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PathAtomContext extends ParserRuleContext {
		public PathAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathAtom; }
	 
		public PathAtomContext() { }
		public void copyFrom(PathAtomContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PathAtomAlternativesContext extends PathAtomContext {
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public PathAlternativesContext pathAlternatives() {
			return getRuleContext(PathAlternativesContext.class,0);
		}
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public TerminalNode PATH_NEGATION() { return getToken(MQL_Parser.PATH_NEGATION, 0); }
		public PathSuffixContext pathSuffix() {
			return getRuleContext(PathSuffixContext.class,0);
		}
		public PathAtomAlternativesContext(PathAtomContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PathAtomSimpleContext extends PathAtomContext {
		public TerminalNode TYPE() { return getToken(MQL_Parser.TYPE, 0); }
		public TerminalNode PATH_NEGATION() { return getToken(MQL_Parser.PATH_NEGATION, 0); }
		public PathSuffixContext pathSuffix() {
			return getRuleContext(PathSuffixContext.class,0);
		}
		public PathAtomSimpleContext(PathAtomContext ctx) { copyFrom(ctx); }
	}

	public final PathAtomContext pathAtom() throws RecognitionException {
		PathAtomContext _localctx = new PathAtomContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_pathAtom);
		int _la;
		try {
			setState(572);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
			case 1:
				_localctx = new PathAtomSimpleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(557);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PATH_NEGATION) {
					{
					setState(556);
					match(PATH_NEGATION);
					}
				}

				setState(559);
				match(TYPE);
				setState(561);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & 141L) != 0)) {
					{
					setState(560);
					pathSuffix();
					}
				}

				}
				break;
			case 2:
				_localctx = new PathAtomAlternativesContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(564);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PATH_NEGATION) {
					{
					setState(563);
					match(PATH_NEGATION);
					}
				}

				setState(566);
				match(L_PAR);
				setState(567);
				pathAlternatives();
				setState(568);
				match(R_PAR);
				setState(570);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & 141L) != 0)) {
					{
					setState(569);
					pathSuffix();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PathSuffixContext extends ParserRuleContext {
		public Token op;
		public Token min;
		public Token max;
		public TerminalNode STAR() { return getToken(MQL_Parser.STAR, 0); }
		public TerminalNode PLUS() { return getToken(MQL_Parser.PLUS, 0); }
		public TerminalNode QUESTION_MARK() { return getToken(MQL_Parser.QUESTION_MARK, 0); }
		public TerminalNode LCURLY_BRACKET() { return getToken(MQL_Parser.LCURLY_BRACKET, 0); }
		public TerminalNode COMMA() { return getToken(MQL_Parser.COMMA, 0); }
		public TerminalNode RCURLY_BRACKET() { return getToken(MQL_Parser.RCURLY_BRACKET, 0); }
		public List<TerminalNode> UNSIGNED_INTEGER() { return getTokens(MQL_Parser.UNSIGNED_INTEGER); }
		public TerminalNode UNSIGNED_INTEGER(int i) {
			return getToken(MQL_Parser.UNSIGNED_INTEGER, i);
		}
		public PathSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathSuffix; }
	}

	public final PathSuffixContext pathSuffix() throws RecognitionException {
		PathSuffixContext _localctx = new PathSuffixContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_pathSuffix);
		try {
			setState(582);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(574);
				((PathSuffixContext)_localctx).op = match(STAR);
				}
				break;
			case PLUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(575);
				((PathSuffixContext)_localctx).op = match(PLUS);
				}
				break;
			case QUESTION_MARK:
				enterOuterAlt(_localctx, 3);
				{
				setState(576);
				((PathSuffixContext)_localctx).op = match(QUESTION_MARK);
				}
				break;
			case LCURLY_BRACKET:
				enterOuterAlt(_localctx, 4);
				{
				setState(577);
				match(LCURLY_BRACKET);
				setState(578);
				((PathSuffixContext)_localctx).min = match(UNSIGNED_INTEGER);
				setState(579);
				match(COMMA);
				setState(580);
				((PathSuffixContext)_localctx).max = match(UNSIGNED_INTEGER);
				setState(581);
				match(RCURLY_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PathTypeContext extends ParserRuleContext {
		public TerminalNode K_ANY() { return getToken(MQL_Parser.K_ANY, 0); }
		public TerminalNode K_ALL() { return getToken(MQL_Parser.K_ALL, 0); }
		public TerminalNode K_SHORTEST() { return getToken(MQL_Parser.K_SHORTEST, 0); }
		public TerminalNode K_WALKS() { return getToken(MQL_Parser.K_WALKS, 0); }
		public TerminalNode K_SIMPLE() { return getToken(MQL_Parser.K_SIMPLE, 0); }
		public TerminalNode K_ACYCLIC() { return getToken(MQL_Parser.K_ACYCLIC, 0); }
		public TerminalNode K_TRAILS() { return getToken(MQL_Parser.K_TRAILS, 0); }
		public TerminalNode UNSIGNED_INTEGER() { return getToken(MQL_Parser.UNSIGNED_INTEGER, 0); }
		public TerminalNode K_GROUPS() { return getToken(MQL_Parser.K_GROUPS, 0); }
		public PathTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathType; }
	}

	public final PathTypeContext pathType() throws RecognitionException {
		PathTypeContext _localctx = new PathTypeContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_pathType);
		int _la;
		try {
			setState(599);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_ANY:
			case K_ALL:
				enterOuterAlt(_localctx, 1);
				{
				setState(584);
				_la = _input.LA(1);
				if ( !(_la==K_ANY || _la==K_ALL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(586);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_SHORTEST) {
					{
					setState(585);
					match(K_SHORTEST);
					}
				}

				setState(589);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & -6899514629131599871L) != 0)) {
					{
					setState(588);
					_la = _input.LA(1);
					if ( !(((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & -6899514629131599871L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case K_SHORTEST:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(591);
				match(K_SHORTEST);
				}
				setState(592);
				match(UNSIGNED_INTEGER);
				setState(594);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_GROUPS) {
					{
					setState(593);
					match(K_GROUPS);
					}
				}

				setState(597);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & -6899514629131599871L) != 0)) {
					{
					setState(596);
					_la = _input.LA(1);
					if ( !(((((_la - 1)) & ~0x3f) == 0 && ((1L << (_la - 1)) & -6899514629131599871L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NodeContext extends ParserRuleContext {
		public FixedNodeContext fixedNode() {
			return getRuleContext(FixedNodeContext.class,0);
		}
		public VarNodeContext varNode() {
			return getRuleContext(VarNodeContext.class,0);
		}
		public NodeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_node; }
	}

	public final NodeContext node() throws RecognitionException {
		NodeContext _localctx = new NodeContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_node);
		try {
			setState(603);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(601);
				fixedNode();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(602);
				varNode();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FixedNodeContext extends ParserRuleContext {
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public FixedNodeInsideContext fixedNodeInside() {
			return getRuleContext(FixedNodeInsideContext.class,0);
		}
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public FixedNodeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fixedNode; }
	}

	public final FixedNodeContext fixedNode() throws RecognitionException {
		FixedNodeContext _localctx = new FixedNodeContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_fixedNode);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(605);
			match(L_PAR);
			setState(606);
			fixedNodeInside();
			setState(607);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FixedNodeInsideContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ANON_ID() { return getToken(MQL_Parser.ANON_ID, 0); }
		public TerminalNode EDGE_ID() { return getToken(MQL_Parser.EDGE_ID, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public FixedNodeInsideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fixedNodeInside; }
	}

	public final FixedNodeInsideContext fixedNodeInside() throws RecognitionException {
		FixedNodeInsideContext _localctx = new FixedNodeInsideContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_fixedNodeInside);
		try {
			setState(613);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(609);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(610);
				match(ANON_ID);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(611);
				match(EDGE_ID);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(612);
				value();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EdgeContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(MQL_Parser.LT, 0); }
		public List<TerminalNode> MINUS() { return getTokens(MQL_Parser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(MQL_Parser.MINUS, i);
		}
		public EdgeInsideContext edgeInside() {
			return getRuleContext(EdgeInsideContext.class,0);
		}
		public TerminalNode GT() { return getToken(MQL_Parser.GT, 0); }
		public EdgeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_edge; }
	}

	public final EdgeContext edge() throws RecognitionException {
		EdgeContext _localctx = new EdgeContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_edge);
		int _la;
		try {
			setState(628);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LT:
				enterOuterAlt(_localctx, 1);
				{
				setState(615);
				match(LT);
				setState(618);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
				case 1:
					{
					setState(616);
					match(MINUS);
					setState(617);
					edgeInside();
					}
					break;
				}
				setState(620);
				match(MINUS);
				}
				break;
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(621);
				match(MINUS);
				setState(625);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LSQUARE_BRACKET) {
					{
					setState(622);
					edgeInside();
					setState(623);
					match(MINUS);
					}
				}

				setState(627);
				match(GT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EdgeInsideContext extends ParserRuleContext {
		public TerminalNode LSQUARE_BRACKET() { return getToken(MQL_Parser.LSQUARE_BRACKET, 0); }
		public TerminalNode RSQUARE_BRACKET() { return getToken(MQL_Parser.RSQUARE_BRACKET, 0); }
		public PropertiesContext properties() {
			return getRuleContext(PropertiesContext.class,0);
		}
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode EDGE_ID() { return getToken(MQL_Parser.EDGE_ID, 0); }
		public TerminalNode TYPE() { return getToken(MQL_Parser.TYPE, 0); }
		public TerminalNode TYPE_VAR() { return getToken(MQL_Parser.TYPE_VAR, 0); }
		public EdgeInsideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_edgeInside; }
	}

	public final EdgeInsideContext edgeInside() throws RecognitionException {
		EdgeInsideContext _localctx = new EdgeInsideContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_edgeInside);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(630);
			match(LSQUARE_BRACKET);
			setState(632);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EDGE_ID || _la==VARIABLE) {
				{
				setState(631);
				_la = _input.LA(1);
				if ( !(_la==EDGE_ID || _la==VARIABLE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(635);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TYPE || _la==TYPE_VAR) {
				{
				setState(634);
				_la = _input.LA(1);
				if ( !(_la==TYPE || _la==TYPE_VAR) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(638);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LCURLY_BRACKET) {
				{
				setState(637);
				properties();
				}
			}

			setState(640);
			match(RSQUARE_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarNodeContext extends ParserRuleContext {
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public List<TerminalNode> TYPE() { return getTokens(MQL_Parser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(MQL_Parser.TYPE, i);
		}
		public PropertiesContext properties() {
			return getRuleContext(PropertiesContext.class,0);
		}
		public VarNodeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varNode; }
	}

	public final VarNodeContext varNode() throws RecognitionException {
		VarNodeContext _localctx = new VarNodeContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_varNode);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(642);
			match(L_PAR);
			setState(644);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARIABLE) {
				{
				setState(643);
				match(VARIABLE);
				}
			}

			setState(649);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TYPE) {
				{
				{
				setState(646);
				match(TYPE);
				}
				}
				setState(651);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(653);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LCURLY_BRACKET) {
				{
				setState(652);
				properties();
				}
			}

			setState(655);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertiesContext extends ParserRuleContext {
		public TerminalNode LCURLY_BRACKET() { return getToken(MQL_Parser.LCURLY_BRACKET, 0); }
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public TerminalNode RCURLY_BRACKET() { return getToken(MQL_Parser.RCURLY_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public PropertiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_properties; }
	}

	public final PropertiesContext properties() throws RecognitionException {
		PropertiesContext _localctx = new PropertiesContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_properties);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(657);
			match(LCURLY_BRACKET);
			setState(658);
			property();
			setState(663);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(659);
				match(COMMA);
				setState(660);
				property();
				}
				}
				setState(665);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(666);
			match(RCURLY_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertyContext extends ParserRuleContext {
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	 
		public PropertyContext() { }
		public void copyFrom(PropertyContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Property2Context extends PropertyContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode TYPE() { return getToken(MQL_Parser.TYPE, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode STRING() { return getToken(MQL_Parser.STRING, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public Property2Context(PropertyContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Property1Context extends PropertyContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(MQL_Parser.COLON, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode TRUE_PROP() { return getToken(MQL_Parser.TRUE_PROP, 0); }
		public TerminalNode FALSE_PROP() { return getToken(MQL_Parser.FALSE_PROP, 0); }
		public Property1Context(PropertyContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Property4Context extends PropertyContext {
		public Token op;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode EQ() { return getToken(MQL_Parser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(MQL_Parser.NEQ, 0); }
		public TerminalNode LT() { return getToken(MQL_Parser.LT, 0); }
		public TerminalNode GT() { return getToken(MQL_Parser.GT, 0); }
		public TerminalNode LEQ() { return getToken(MQL_Parser.LEQ, 0); }
		public TerminalNode GEQ() { return getToken(MQL_Parser.GEQ, 0); }
		public Property4Context(PropertyContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Property3Context extends PropertyContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode K_IS() { return getToken(MQL_Parser.K_IS, 0); }
		public ExprTypenameContext exprTypename() {
			return getRuleContext(ExprTypenameContext.class,0);
		}
		public TerminalNode K_NOT() { return getToken(MQL_Parser.K_NOT, 0); }
		public List<ConditionalOrTypeContext> conditionalOrType() {
			return getRuleContexts(ConditionalOrTypeContext.class);
		}
		public ConditionalOrTypeContext conditionalOrType(int i) {
			return getRuleContext(ConditionalOrTypeContext.class,i);
		}
		public Property3Context(PropertyContext ctx) { copyFrom(ctx); }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_property);
		int _la;
		try {
			setState(697);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
			case 1:
				_localctx = new Property1Context(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(668);
				identifier();
				setState(673);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case COLON:
					{
					setState(669);
					match(COLON);
					setState(670);
					value();
					}
					break;
				case TRUE_PROP:
					{
					setState(671);
					match(TRUE_PROP);
					}
					break;
				case FALSE_PROP:
					{
					setState(672);
					match(FALSE_PROP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				_localctx = new Property2Context(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(675);
				identifier();
				setState(676);
				match(TYPE);
				setState(677);
				match(L_PAR);
				setState(678);
				match(STRING);
				setState(679);
				match(R_PAR);
				}
				break;
			case 3:
				_localctx = new Property3Context(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(681);
				identifier();
				setState(682);
				match(K_IS);
				setState(684);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_NOT) {
					{
					setState(683);
					match(K_NOT);
					}
				}

				setState(686);
				exprTypename();
				setState(690);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==K_OR) {
					{
					{
					setState(687);
					conditionalOrType();
					}
					}
					setState(692);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 4:
				_localctx = new Property4Context(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(693);
				identifier();
				{
				setState(694);
				((Property4Context)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 81)) & ~0x3f) == 0 && ((1L << (_la - 81)) & 63L) != 0)) ) {
					((Property4Context)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(695);
				value();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionalOrTypeContext extends ParserRuleContext {
		public TerminalNode K_OR() { return getToken(MQL_Parser.K_OR, 0); }
		public ExprTypenameContext exprTypename() {
			return getRuleContext(ExprTypenameContext.class,0);
		}
		public ConditionalOrTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalOrType; }
	}

	public final ConditionalOrTypeContext conditionalOrType() throws RecognitionException {
		ConditionalOrTypeContext _localctx = new ConditionalOrTypeContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_conditionalOrType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(699);
			match(K_OR);
			setState(700);
			exprTypename();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(MQL_Parser.NAME, 0); }
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_identifier);
		try {
			setState(704);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(702);
				match(NAME);
				}
				break;
			case K_ACYCLIC:
			case K_AND:
			case K_ANY:
			case K_AS:
			case K_AVG:
			case K_ALL:
			case K_ASC:
			case K_BY:
			case K_BOOL:
			case K_CALL:
			case K_COSINE_DISTANCE:
			case K_COSINE_SIMILARITY:
			case K_COUNT:
			case K_CREATE:
			case K_DELETE:
			case K_DESCRIBE:
			case K_DESC:
			case K_DIMENSIONS:
			case K_DISTINCT:
			case K_EDGE:
			case K_EUCLIDEAN_DISTANCE:
			case K_FROM:
			case K_INCOMING:
			case K_INDEX:
			case K_INSERT:
			case K_INTEGER:
			case K_INTO:
			case K_IS:
			case K_FLOAT:
			case K_GROUP:
			case K_GROUPS:
			case K_IDENTITY:
			case K_LABELS:
			case K_LABEL:
			case K_LET:
			case K_LIMIT:
			case K_MANHATTAN_DISTANCE:
			case K_MATCH:
			case K_MAX:
			case K_MIN:
			case K_OBJECTS:
			case K_OFFSET:
			case K_OPTIONAL:
			case K_ORDER:
			case K_OR:
			case K_OUTGOING:
			case K_PREFIX:
			case K_PROPERTIES:
			case K_PROPERTY:
			case K_NOT:
			case K_NULL:
			case K_SHORTEST:
			case K_SHOW:
			case K_SIMPLE:
			case K_TEXT_SEARCH:
			case K_REGEX:
			case K_RETURN:
			case K_SUM:
			case K_STRING:
			case K_TRAILS:
			case K_VALUES:
			case K_WALKS:
			case K_WITH:
			case K_WHERE:
			case K_YIELD:
				enterOuterAlt(_localctx, 2);
				{
				setState(703);
				keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BoolValueContext extends ParserRuleContext {
		public TerminalNode K_TRUE() { return getToken(MQL_Parser.K_TRUE, 0); }
		public TerminalNode K_FALSE() { return getToken(MQL_Parser.K_FALSE, 0); }
		public BoolValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolValue; }
	}

	public final BoolValueContext boolValue() throws RecognitionException {
		BoolValueContext _localctx = new BoolValueContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_boolValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(706);
			_la = _input.LA(1);
			if ( !(_la==K_FALSE || _la==K_TRUE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumericValueContext extends ParserRuleContext {
		public TerminalNode UNSIGNED_INTEGER() { return getToken(MQL_Parser.UNSIGNED_INTEGER, 0); }
		public TerminalNode UNSIGNED_FLOAT() { return getToken(MQL_Parser.UNSIGNED_FLOAT, 0); }
		public TerminalNode UNSIGNED_SCIENTIFIC_NOTATION() { return getToken(MQL_Parser.UNSIGNED_SCIENTIFIC_NOTATION, 0); }
		public TerminalNode PLUS() { return getToken(MQL_Parser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(MQL_Parser.MINUS, 0); }
		public NumericValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericValue; }
	}

	public final NumericValueContext numericValue() throws RecognitionException {
		NumericValueContext _localctx = new NumericValueContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_numericValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(709);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLUS || _la==MINUS) {
				{
				setState(708);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(711);
			_la = _input.LA(1);
			if ( !(((((_la - 77)) & ~0x3f) == 0 && ((1L << (_la - 77)) & 7L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DatatypeValueContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public TerminalNode STRING() { return getToken(MQL_Parser.STRING, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public DatatypeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_datatypeValue; }
	}

	public final DatatypeValueContext datatypeValue() throws RecognitionException {
		DatatypeValueContext _localctx = new DatatypeValueContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_datatypeValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(713);
			identifier();
			setState(714);
			match(L_PAR);
			setState(715);
			match(STRING);
			setState(716);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValueContext extends ParserRuleContext {
		public NumericValueContext numericValue() {
			return getRuleContext(NumericValueContext.class,0);
		}
		public TerminalNode STRING() { return getToken(MQL_Parser.STRING, 0); }
		public BoolValueContext boolValue() {
			return getRuleContext(BoolValueContext.class,0);
		}
		public DatatypeValueContext datatypeValue() {
			return getRuleContext(DatatypeValueContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_value);
		try {
			setState(722);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNSIGNED_INTEGER:
			case UNSIGNED_FLOAT:
			case UNSIGNED_SCIENTIFIC_NOTATION:
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(718);
				numericValue();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(719);
				match(STRING);
				}
				break;
			case K_FALSE:
			case K_TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(720);
				boolValue();
				}
				break;
			case K_ACYCLIC:
			case K_AND:
			case K_ANY:
			case K_AS:
			case K_AVG:
			case K_ALL:
			case K_ASC:
			case K_BY:
			case K_BOOL:
			case K_CALL:
			case K_COSINE_DISTANCE:
			case K_COSINE_SIMILARITY:
			case K_COUNT:
			case K_CREATE:
			case K_DELETE:
			case K_DESCRIBE:
			case K_DESC:
			case K_DIMENSIONS:
			case K_DISTINCT:
			case K_EDGE:
			case K_EUCLIDEAN_DISTANCE:
			case K_FROM:
			case K_INCOMING:
			case K_INDEX:
			case K_INSERT:
			case K_INTEGER:
			case K_INTO:
			case K_IS:
			case K_FLOAT:
			case K_GROUP:
			case K_GROUPS:
			case K_IDENTITY:
			case K_LABELS:
			case K_LABEL:
			case K_LET:
			case K_LIMIT:
			case K_MANHATTAN_DISTANCE:
			case K_MATCH:
			case K_MAX:
			case K_MIN:
			case K_OBJECTS:
			case K_OFFSET:
			case K_OPTIONAL:
			case K_ORDER:
			case K_OR:
			case K_OUTGOING:
			case K_PREFIX:
			case K_PROPERTIES:
			case K_PROPERTY:
			case K_NOT:
			case K_NULL:
			case K_SHORTEST:
			case K_SHOW:
			case K_SIMPLE:
			case K_TEXT_SEARCH:
			case K_REGEX:
			case K_RETURN:
			case K_SUM:
			case K_STRING:
			case K_TRAILS:
			case K_VALUES:
			case K_WALKS:
			case K_WITH:
			case K_WHERE:
			case K_YIELD:
			case NAME:
				enterOuterAlt(_localctx, 4);
				{
				setState(721);
				datatypeValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionalOrExprContext extends ParserRuleContext {
		public List<ConditionalAndExprContext> conditionalAndExpr() {
			return getRuleContexts(ConditionalAndExprContext.class);
		}
		public ConditionalAndExprContext conditionalAndExpr(int i) {
			return getRuleContext(ConditionalAndExprContext.class,i);
		}
		public List<TerminalNode> K_OR() { return getTokens(MQL_Parser.K_OR); }
		public TerminalNode K_OR(int i) {
			return getToken(MQL_Parser.K_OR, i);
		}
		public ConditionalOrExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalOrExpr; }
	}

	public final ConditionalOrExprContext conditionalOrExpr() throws RecognitionException {
		ConditionalOrExprContext _localctx = new ConditionalOrExprContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_conditionalOrExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(724);
			conditionalAndExpr();
			setState(729);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_OR) {
				{
				{
				setState(725);
				match(K_OR);
				setState(726);
				conditionalAndExpr();
				}
				}
				setState(731);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionalAndExprContext extends ParserRuleContext {
		public List<ComparisonExprContext> comparisonExpr() {
			return getRuleContexts(ComparisonExprContext.class);
		}
		public ComparisonExprContext comparisonExpr(int i) {
			return getRuleContext(ComparisonExprContext.class,i);
		}
		public List<TerminalNode> K_AND() { return getTokens(MQL_Parser.K_AND); }
		public TerminalNode K_AND(int i) {
			return getToken(MQL_Parser.K_AND, i);
		}
		public ConditionalAndExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalAndExpr; }
	}

	public final ConditionalAndExprContext conditionalAndExpr() throws RecognitionException {
		ConditionalAndExprContext _localctx = new ConditionalAndExprContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_conditionalAndExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(732);
			comparisonExpr();
			setState(737);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==K_AND) {
				{
				{
				setState(733);
				match(K_AND);
				setState(734);
				comparisonExpr();
				}
				}
				setState(739);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComparisonExprContext extends ParserRuleContext {
		public ComparisonExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonExpr; }
	 
		public ComparisonExprContext() { }
		public void copyFrom(ComparisonExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ComparisonExprIsContext extends ComparisonExprContext {
		public AdditiveExprContext additiveExpr() {
			return getRuleContext(AdditiveExprContext.class,0);
		}
		public TerminalNode K_IS() { return getToken(MQL_Parser.K_IS, 0); }
		public ExprTypenameContext exprTypename() {
			return getRuleContext(ExprTypenameContext.class,0);
		}
		public TerminalNode K_NOT() { return getToken(MQL_Parser.K_NOT, 0); }
		public ComparisonExprIsContext(ComparisonExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ComparisonExprOpContext extends ComparisonExprContext {
		public Token op;
		public List<AdditiveExprContext> additiveExpr() {
			return getRuleContexts(AdditiveExprContext.class);
		}
		public AdditiveExprContext additiveExpr(int i) {
			return getRuleContext(AdditiveExprContext.class,i);
		}
		public TerminalNode EQ() { return getToken(MQL_Parser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(MQL_Parser.NEQ, 0); }
		public TerminalNode LT() { return getToken(MQL_Parser.LT, 0); }
		public TerminalNode GT() { return getToken(MQL_Parser.GT, 0); }
		public TerminalNode LEQ() { return getToken(MQL_Parser.LEQ, 0); }
		public TerminalNode GEQ() { return getToken(MQL_Parser.GEQ, 0); }
		public ComparisonExprOpContext(ComparisonExprContext ctx) { copyFrom(ctx); }
	}

	public final ComparisonExprContext comparisonExpr() throws RecognitionException {
		ComparisonExprContext _localctx = new ComparisonExprContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_comparisonExpr);
		int _la;
		try {
			setState(752);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				_localctx = new ComparisonExprOpContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(740);
				additiveExpr();
				setState(743);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 81)) & ~0x3f) == 0 && ((1L << (_la - 81)) & 63L) != 0)) {
					{
					setState(741);
					((ComparisonExprOpContext)_localctx).op = _input.LT(1);
					_la = _input.LA(1);
					if ( !(((((_la - 81)) & ~0x3f) == 0 && ((1L << (_la - 81)) & 63L) != 0)) ) {
						((ComparisonExprOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(742);
					additiveExpr();
					}
				}

				}
				break;
			case 2:
				_localctx = new ComparisonExprIsContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(745);
				additiveExpr();
				setState(746);
				match(K_IS);
				setState(748);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==K_NOT) {
					{
					setState(747);
					match(K_NOT);
					}
				}

				setState(750);
				exprTypename();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AdditiveExprContext extends ParserRuleContext {
		public Token s94;
		public List<Token> op = new ArrayList<Token>();
		public Token s95;
		public Token _tset1392;
		public List<MultiplicativeExprContext> multiplicativeExpr() {
			return getRuleContexts(MultiplicativeExprContext.class);
		}
		public MultiplicativeExprContext multiplicativeExpr(int i) {
			return getRuleContext(MultiplicativeExprContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(MQL_Parser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(MQL_Parser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(MQL_Parser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(MQL_Parser.MINUS, i);
		}
		public AdditiveExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additiveExpr; }
	}

	public final AdditiveExprContext additiveExpr() throws RecognitionException {
		AdditiveExprContext _localctx = new AdditiveExprContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_additiveExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(754);
			multiplicativeExpr();
			setState(759);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(755);
				((AdditiveExprContext)_localctx)._tset1392 = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
					((AdditiveExprContext)_localctx)._tset1392 = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				((AdditiveExprContext)_localctx).op.add(((AdditiveExprContext)_localctx)._tset1392);
				setState(756);
				multiplicativeExpr();
				}
				}
				setState(761);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultiplicativeExprContext extends ParserRuleContext {
		public Token s91;
		public List<Token> op = new ArrayList<Token>();
		public Token s88;
		public Token s92;
		public Token _tset1411;
		public List<UnaryExprContext> unaryExpr() {
			return getRuleContexts(UnaryExprContext.class);
		}
		public UnaryExprContext unaryExpr(int i) {
			return getRuleContext(UnaryExprContext.class,i);
		}
		public List<TerminalNode> STAR() { return getTokens(MQL_Parser.STAR); }
		public TerminalNode STAR(int i) {
			return getToken(MQL_Parser.STAR, i);
		}
		public List<TerminalNode> PATH_SEQUENCE() { return getTokens(MQL_Parser.PATH_SEQUENCE); }
		public TerminalNode PATH_SEQUENCE(int i) {
			return getToken(MQL_Parser.PATH_SEQUENCE, i);
		}
		public List<TerminalNode> PERCENT() { return getTokens(MQL_Parser.PERCENT); }
		public TerminalNode PERCENT(int i) {
			return getToken(MQL_Parser.PERCENT, i);
		}
		public MultiplicativeExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicativeExpr; }
	}

	public final MultiplicativeExprContext multiplicativeExpr() throws RecognitionException {
		MultiplicativeExprContext _localctx = new MultiplicativeExprContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_multiplicativeExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(762);
			unaryExpr();
			setState(767);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 25L) != 0)) {
				{
				{
				setState(763);
				((MultiplicativeExprContext)_localctx)._tset1411 = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 25L) != 0)) ) {
					((MultiplicativeExprContext)_localctx)._tset1411 = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				((MultiplicativeExprContext)_localctx).op.add(((MultiplicativeExprContext)_localctx)._tset1411);
				setState(764);
				unaryExpr();
				}
				}
				setState(769);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnaryExprContext extends ParserRuleContext {
		public TerminalNode K_NOT() { return getToken(MQL_Parser.K_NOT, 0); }
		public UnaryExprContext unaryExpr() {
			return getRuleContext(UnaryExprContext.class,0);
		}
		public AtomicExprContext atomicExpr() {
			return getRuleContext(AtomicExprContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(MQL_Parser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(MQL_Parser.MINUS, 0); }
		public UnaryExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpr; }
	}

	public final UnaryExprContext unaryExpr() throws RecognitionException {
		UnaryExprContext _localctx = new UnaryExprContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_unaryExpr);
		try {
			setState(777);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(770);
				match(K_NOT);
				setState(771);
				unaryExpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(772);
				atomicExpr();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(773);
				match(PLUS);
				setState(774);
				unaryExpr();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(775);
				match(MINUS);
				setState(776);
				unaryExpr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AtomicExprContext extends ParserRuleContext {
		public AtomicExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atomicExpr; }
	 
		public AtomicExprContext() { }
		public void copyFrom(AtomicExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprFunctionContext extends AtomicExprContext {
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public ExprFunctionContext(AtomicExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprValueContext extends AtomicExprContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ExprValueContext(AtomicExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprFixedNodeInsideContext extends AtomicExprContext {
		public FixedNodeInsideContext fixedNodeInside() {
			return getRuleContext(FixedNodeInsideContext.class,0);
		}
		public ExprFixedNodeInsideContext(AtomicExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprVarContext extends AtomicExprContext {
		public TerminalNode VARIABLE() { return getToken(MQL_Parser.VARIABLE, 0); }
		public TerminalNode KEY() { return getToken(MQL_Parser.KEY, 0); }
		public ExprVarContext(AtomicExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprParenthesisContext extends AtomicExprContext {
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public ConditionalOrExprContext conditionalOrExpr() {
			return getRuleContext(ConditionalOrExprContext.class,0);
		}
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public ExprParenthesisContext(AtomicExprContext ctx) { copyFrom(ctx); }
	}

	public final AtomicExprContext atomicExpr() throws RecognitionException {
		AtomicExprContext _localctx = new AtomicExprContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_atomicExpr);
		int _la;
		try {
			setState(790);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				_localctx = new ExprVarContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(779);
				match(VARIABLE);
				setState(781);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KEY) {
					{
					setState(780);
					match(KEY);
					}
				}

				}
				break;
			case 2:
				_localctx = new ExprValueContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(783);
				value();
				}
				break;
			case 3:
				_localctx = new ExprFixedNodeInsideContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(784);
				fixedNodeInside();
				}
				break;
			case 4:
				_localctx = new ExprParenthesisContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(785);
				match(L_PAR);
				setState(786);
				conditionalOrExpr();
				setState(787);
				match(R_PAR);
				}
				break;
			case 5:
				_localctx = new ExprFunctionContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(789);
				function();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionContext extends ParserRuleContext {
		public RegexContext regex() {
			return getRuleContext(RegexContext.class,0);
		}
		public TextSearchContext textSearch() {
			return getRuleContext(TextSearchContext.class,0);
		}
		public CosineSimilarityContext cosineSimilarity() {
			return getRuleContext(CosineSimilarityContext.class,0);
		}
		public CosineDistanceContext cosineDistance() {
			return getRuleContext(CosineDistanceContext.class,0);
		}
		public ManhattanDistanceContext manhattanDistance() {
			return getRuleContext(ManhattanDistanceContext.class,0);
		}
		public EuclideanDistanceContext euclideanDistance() {
			return getRuleContext(EuclideanDistanceContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_function);
		try {
			setState(798);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case K_REGEX:
				enterOuterAlt(_localctx, 1);
				{
				setState(792);
				regex();
				}
				break;
			case K_TEXT_SEARCH:
				enterOuterAlt(_localctx, 2);
				{
				setState(793);
				textSearch();
				}
				break;
			case K_COSINE_SIMILARITY:
				enterOuterAlt(_localctx, 3);
				{
				setState(794);
				cosineSimilarity();
				}
				break;
			case K_COSINE_DISTANCE:
				enterOuterAlt(_localctx, 4);
				{
				setState(795);
				cosineDistance();
				}
				break;
			case K_MANHATTAN_DISTANCE:
				enterOuterAlt(_localctx, 5);
				{
				setState(796);
				manhattanDistance();
				}
				break;
			case K_EUCLIDEAN_DISTANCE:
				enterOuterAlt(_localctx, 6);
				{
				setState(797);
				euclideanDistance();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RegexContext extends ParserRuleContext {
		public TerminalNode K_REGEX() { return getToken(MQL_Parser.K_REGEX, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public List<ConditionalOrExprContext> conditionalOrExpr() {
			return getRuleContexts(ConditionalOrExprContext.class);
		}
		public ConditionalOrExprContext conditionalOrExpr(int i) {
			return getRuleContext(ConditionalOrExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public RegexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regex; }
	}

	public final RegexContext regex() throws RecognitionException {
		RegexContext _localctx = new RegexContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_regex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(800);
			match(K_REGEX);
			setState(801);
			match(L_PAR);
			setState(802);
			conditionalOrExpr();
			setState(803);
			match(COMMA);
			setState(804);
			conditionalOrExpr();
			setState(807);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(805);
				match(COMMA);
				setState(806);
				conditionalOrExpr();
				}
			}

			setState(809);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextSearchContext extends ParserRuleContext {
		public TerminalNode K_TEXT_SEARCH() { return getToken(MQL_Parser.K_TEXT_SEARCH, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public List<TerminalNode> STRING() { return getTokens(MQL_Parser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(MQL_Parser.STRING, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MQL_Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MQL_Parser.COMMA, i);
		}
		public TextSearchIndexModeContext textSearchIndexMode() {
			return getRuleContext(TextSearchIndexModeContext.class,0);
		}
		public List<TerminalNode> VARIABLE() { return getTokens(MQL_Parser.VARIABLE); }
		public TerminalNode VARIABLE(int i) {
			return getToken(MQL_Parser.VARIABLE, i);
		}
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public TextSearchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_textSearch; }
	}

	public final TextSearchContext textSearch() throws RecognitionException {
		TextSearchContext _localctx = new TextSearchContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_textSearch);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(811);
			match(K_TEXT_SEARCH);
			setState(812);
			match(L_PAR);
			setState(813);
			match(STRING);
			setState(814);
			match(COMMA);
			setState(815);
			match(STRING);
			setState(816);
			match(COMMA);
			setState(817);
			textSearchIndexMode();
			setState(818);
			match(COMMA);
			setState(819);
			match(VARIABLE);
			setState(822);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(820);
				match(COMMA);
				setState(821);
				match(VARIABLE);
				}
			}

			setState(824);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CosineSimilarityContext extends ParserRuleContext {
		public TerminalNode K_COSINE_SIMILARITY() { return getToken(MQL_Parser.K_COSINE_SIMILARITY, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public List<ConditionalOrExprContext> conditionalOrExpr() {
			return getRuleContexts(ConditionalOrExprContext.class);
		}
		public ConditionalOrExprContext conditionalOrExpr(int i) {
			return getRuleContext(ConditionalOrExprContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(MQL_Parser.COMMA, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public CosineSimilarityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cosineSimilarity; }
	}

	public final CosineSimilarityContext cosineSimilarity() throws RecognitionException {
		CosineSimilarityContext _localctx = new CosineSimilarityContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_cosineSimilarity);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(826);
			match(K_COSINE_SIMILARITY);
			setState(827);
			match(L_PAR);
			setState(828);
			conditionalOrExpr();
			setState(829);
			match(COMMA);
			setState(830);
			conditionalOrExpr();
			setState(831);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CosineDistanceContext extends ParserRuleContext {
		public TerminalNode K_COSINE_DISTANCE() { return getToken(MQL_Parser.K_COSINE_DISTANCE, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public List<ConditionalOrExprContext> conditionalOrExpr() {
			return getRuleContexts(ConditionalOrExprContext.class);
		}
		public ConditionalOrExprContext conditionalOrExpr(int i) {
			return getRuleContext(ConditionalOrExprContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(MQL_Parser.COMMA, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public CosineDistanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cosineDistance; }
	}

	public final CosineDistanceContext cosineDistance() throws RecognitionException {
		CosineDistanceContext _localctx = new CosineDistanceContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_cosineDistance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(833);
			match(K_COSINE_DISTANCE);
			setState(834);
			match(L_PAR);
			setState(835);
			conditionalOrExpr();
			setState(836);
			match(COMMA);
			setState(837);
			conditionalOrExpr();
			setState(838);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ManhattanDistanceContext extends ParserRuleContext {
		public TerminalNode K_MANHATTAN_DISTANCE() { return getToken(MQL_Parser.K_MANHATTAN_DISTANCE, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public List<ConditionalOrExprContext> conditionalOrExpr() {
			return getRuleContexts(ConditionalOrExprContext.class);
		}
		public ConditionalOrExprContext conditionalOrExpr(int i) {
			return getRuleContext(ConditionalOrExprContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(MQL_Parser.COMMA, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public ManhattanDistanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_manhattanDistance; }
	}

	public final ManhattanDistanceContext manhattanDistance() throws RecognitionException {
		ManhattanDistanceContext _localctx = new ManhattanDistanceContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_manhattanDistance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(840);
			match(K_MANHATTAN_DISTANCE);
			setState(841);
			match(L_PAR);
			setState(842);
			conditionalOrExpr();
			setState(843);
			match(COMMA);
			setState(844);
			conditionalOrExpr();
			setState(845);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EuclideanDistanceContext extends ParserRuleContext {
		public TerminalNode K_EUCLIDEAN_DISTANCE() { return getToken(MQL_Parser.K_EUCLIDEAN_DISTANCE, 0); }
		public TerminalNode L_PAR() { return getToken(MQL_Parser.L_PAR, 0); }
		public List<ConditionalOrExprContext> conditionalOrExpr() {
			return getRuleContexts(ConditionalOrExprContext.class);
		}
		public ConditionalOrExprContext conditionalOrExpr(int i) {
			return getRuleContext(ConditionalOrExprContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(MQL_Parser.COMMA, 0); }
		public TerminalNode R_PAR() { return getToken(MQL_Parser.R_PAR, 0); }
		public EuclideanDistanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_euclideanDistance; }
	}

	public final EuclideanDistanceContext euclideanDistance() throws RecognitionException {
		EuclideanDistanceContext _localctx = new EuclideanDistanceContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_euclideanDistance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(847);
			match(K_EUCLIDEAN_DISTANCE);
			setState(848);
			match(L_PAR);
			setState(849);
			conditionalOrExpr();
			setState(850);
			match(COMMA);
			setState(851);
			conditionalOrExpr();
			setState(852);
			match(R_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextSearchIndexModeContext extends ParserRuleContext {
		public TerminalNode K_PREFIX() { return getToken(MQL_Parser.K_PREFIX, 0); }
		public TerminalNode K_MATCH() { return getToken(MQL_Parser.K_MATCH, 0); }
		public TextSearchIndexModeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_textSearchIndexMode; }
	}

	public final TextSearchIndexModeContext textSearchIndexMode() throws RecognitionException {
		TextSearchIndexModeContext _localctx = new TextSearchIndexModeContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_textSearchIndexMode);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(854);
			_la = _input.LA(1);
			if ( !(_la==K_MATCH || _la==K_PREFIX) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprTypenameContext extends ParserRuleContext {
		public TerminalNode K_NULL() { return getToken(MQL_Parser.K_NULL, 0); }
		public TerminalNode K_STRING() { return getToken(MQL_Parser.K_STRING, 0); }
		public TerminalNode K_BOOL() { return getToken(MQL_Parser.K_BOOL, 0); }
		public TerminalNode K_INTEGER() { return getToken(MQL_Parser.K_INTEGER, 0); }
		public TerminalNode K_FLOAT() { return getToken(MQL_Parser.K_FLOAT, 0); }
		public ExprTypenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprTypename; }
	}

	public final ExprTypenameContext exprTypename() throws RecognitionException {
		ExprTypenameContext _localctx = new ExprTypenameContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_exprTypename);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(856);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1157425105375068672L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode K_ACYCLIC() { return getToken(MQL_Parser.K_ACYCLIC, 0); }
		public TerminalNode K_AND() { return getToken(MQL_Parser.K_AND, 0); }
		public TerminalNode K_ANY() { return getToken(MQL_Parser.K_ANY, 0); }
		public TerminalNode K_AS() { return getToken(MQL_Parser.K_AS, 0); }
		public TerminalNode K_AVG() { return getToken(MQL_Parser.K_AVG, 0); }
		public TerminalNode K_ALL() { return getToken(MQL_Parser.K_ALL, 0); }
		public TerminalNode K_ASC() { return getToken(MQL_Parser.K_ASC, 0); }
		public TerminalNode K_BY() { return getToken(MQL_Parser.K_BY, 0); }
		public TerminalNode K_BOOL() { return getToken(MQL_Parser.K_BOOL, 0); }
		public TerminalNode K_CALL() { return getToken(MQL_Parser.K_CALL, 0); }
		public TerminalNode K_COSINE_DISTANCE() { return getToken(MQL_Parser.K_COSINE_DISTANCE, 0); }
		public TerminalNode K_COSINE_SIMILARITY() { return getToken(MQL_Parser.K_COSINE_SIMILARITY, 0); }
		public TerminalNode K_COUNT() { return getToken(MQL_Parser.K_COUNT, 0); }
		public TerminalNode K_CREATE() { return getToken(MQL_Parser.K_CREATE, 0); }
		public TerminalNode K_DELETE() { return getToken(MQL_Parser.K_DELETE, 0); }
		public TerminalNode K_DESCRIBE() { return getToken(MQL_Parser.K_DESCRIBE, 0); }
		public TerminalNode K_DESC() { return getToken(MQL_Parser.K_DESC, 0); }
		public TerminalNode K_DIMENSIONS() { return getToken(MQL_Parser.K_DIMENSIONS, 0); }
		public TerminalNode K_DISTINCT() { return getToken(MQL_Parser.K_DISTINCT, 0); }
		public TerminalNode K_EDGE() { return getToken(MQL_Parser.K_EDGE, 0); }
		public TerminalNode K_EUCLIDEAN_DISTANCE() { return getToken(MQL_Parser.K_EUCLIDEAN_DISTANCE, 0); }
		public TerminalNode K_FROM() { return getToken(MQL_Parser.K_FROM, 0); }
		public TerminalNode K_INCOMING() { return getToken(MQL_Parser.K_INCOMING, 0); }
		public TerminalNode K_INDEX() { return getToken(MQL_Parser.K_INDEX, 0); }
		public TerminalNode K_INSERT() { return getToken(MQL_Parser.K_INSERT, 0); }
		public TerminalNode K_INTEGER() { return getToken(MQL_Parser.K_INTEGER, 0); }
		public TerminalNode K_INTO() { return getToken(MQL_Parser.K_INTO, 0); }
		public TerminalNode K_IS() { return getToken(MQL_Parser.K_IS, 0); }
		public TerminalNode K_FLOAT() { return getToken(MQL_Parser.K_FLOAT, 0); }
		public TerminalNode K_GROUP() { return getToken(MQL_Parser.K_GROUP, 0); }
		public TerminalNode K_GROUPS() { return getToken(MQL_Parser.K_GROUPS, 0); }
		public TerminalNode K_IDENTITY() { return getToken(MQL_Parser.K_IDENTITY, 0); }
		public TerminalNode K_LABELS() { return getToken(MQL_Parser.K_LABELS, 0); }
		public TerminalNode K_LABEL() { return getToken(MQL_Parser.K_LABEL, 0); }
		public TerminalNode K_LET() { return getToken(MQL_Parser.K_LET, 0); }
		public TerminalNode K_LIMIT() { return getToken(MQL_Parser.K_LIMIT, 0); }
		public TerminalNode K_MANHATTAN_DISTANCE() { return getToken(MQL_Parser.K_MANHATTAN_DISTANCE, 0); }
		public TerminalNode K_MATCH() { return getToken(MQL_Parser.K_MATCH, 0); }
		public TerminalNode K_MAX() { return getToken(MQL_Parser.K_MAX, 0); }
		public TerminalNode K_MIN() { return getToken(MQL_Parser.K_MIN, 0); }
		public TerminalNode K_OBJECTS() { return getToken(MQL_Parser.K_OBJECTS, 0); }
		public TerminalNode K_OFFSET() { return getToken(MQL_Parser.K_OFFSET, 0); }
		public TerminalNode K_OPTIONAL() { return getToken(MQL_Parser.K_OPTIONAL, 0); }
		public TerminalNode K_ORDER() { return getToken(MQL_Parser.K_ORDER, 0); }
		public TerminalNode K_OR() { return getToken(MQL_Parser.K_OR, 0); }
		public TerminalNode K_OUTGOING() { return getToken(MQL_Parser.K_OUTGOING, 0); }
		public TerminalNode K_PREFIX() { return getToken(MQL_Parser.K_PREFIX, 0); }
		public TerminalNode K_PROPERTIES() { return getToken(MQL_Parser.K_PROPERTIES, 0); }
		public TerminalNode K_PROPERTY() { return getToken(MQL_Parser.K_PROPERTY, 0); }
		public TerminalNode K_NOT() { return getToken(MQL_Parser.K_NOT, 0); }
		public TerminalNode K_NULL() { return getToken(MQL_Parser.K_NULL, 0); }
		public TerminalNode K_SHORTEST() { return getToken(MQL_Parser.K_SHORTEST, 0); }
		public TerminalNode K_SHOW() { return getToken(MQL_Parser.K_SHOW, 0); }
		public TerminalNode K_SIMPLE() { return getToken(MQL_Parser.K_SIMPLE, 0); }
		public TerminalNode K_TEXT_SEARCH() { return getToken(MQL_Parser.K_TEXT_SEARCH, 0); }
		public TerminalNode K_REGEX() { return getToken(MQL_Parser.K_REGEX, 0); }
		public TerminalNode K_RETURN() { return getToken(MQL_Parser.K_RETURN, 0); }
		public TerminalNode K_SUM() { return getToken(MQL_Parser.K_SUM, 0); }
		public TerminalNode K_STRING() { return getToken(MQL_Parser.K_STRING, 0); }
		public TerminalNode K_TRAILS() { return getToken(MQL_Parser.K_TRAILS, 0); }
		public TerminalNode K_VALUES() { return getToken(MQL_Parser.K_VALUES, 0); }
		public TerminalNode K_WALKS() { return getToken(MQL_Parser.K_WALKS, 0); }
		public TerminalNode K_WITH() { return getToken(MQL_Parser.K_WITH, 0); }
		public TerminalNode K_WHERE() { return getToken(MQL_Parser.K_WHERE, 0); }
		public TerminalNode K_YIELD() { return getToken(MQL_Parser.K_YIELD, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_keyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(858);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & -2305843009750564866L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 15L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001j\u035d\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007@\u0002"+
		"A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007E\u0002"+
		"F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007J\u0002"+
		"K\u0007K\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003"+
		"\u0000\u009e\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003"+
		"\u0001\u00a4\b\u0001\u0001\u0001\u0003\u0001\u00a7\b\u0001\u0001\u0001"+
		"\u0003\u0001\u00aa\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0004\u0002"+
		"\u00af\b\u0002\u000b\u0002\f\u0002\u00b0\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003\u00b6\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0005\u0004\u00bc\b\u0004\n\u0004\f\u0004\u00bf\t\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005\u00c5\b\u0005\n\u0005"+
		"\f\u0005\u00c8\t\u0005\u0001\u0006\u0001\u0006\u0003\u0006\u00cc\b\u0006"+
		"\u0001\u0006\u0005\u0006\u00cf\b\u0006\n\u0006\f\u0006\u00d2\t\u0006\u0001"+
		"\u0006\u0003\u0006\u00d5\b\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u00e0\b\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b\u00e8\b\b\u0001\b\u0001"+
		"\b\u0001\b\u0003\b\u00ed\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n\u00fa\b\n\n\n\f\n\u00fd"+
		"\t\n\u0003\n\u00ff\b\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0003\u000b\u0107\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f"+
		"\u0001\f\u0003\f\u010e\b\f\u0001\r\u0001\r\u0005\r\u0112\b\r\n\r\f\r\u0115"+
		"\t\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u011c"+
		"\b\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0005\u0011\u0127\b\u0011\n"+
		"\u0011\f\u0011\u012a\t\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0005\u0014\u0138\b\u0014\n\u0014\f\u0014"+
		"\u013b\t\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0005\u0015\u0142\b\u0015\n\u0015\f\u0015\u0145\t\u0015\u0001\u0016\u0001"+
		"\u0016\u0003\u0016\u0149\b\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0005"+
		"\u0016\u014e\b\u0016\n\u0016\f\u0016\u0151\t\u0016\u0001\u0016\u0003\u0016"+
		"\u0154\b\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u0158\b\u0016\u0001"+
		"\u0016\u0001\u0016\u0003\u0016\u015c\b\u0016\u0003\u0016\u015e\b\u0016"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u0164\b\u0017"+
		"\u0001\u0017\u0001\u0017\u0003\u0017\u0168\b\u0017\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0005\u0018\u016f\b\u0018\n\u0018"+
		"\f\u0018\u0172\t\u0018\u0003\u0018\u0174\b\u0018\u0001\u0019\u0001\u0019"+
		"\u0003\u0019\u0178\b\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0005\u001a"+
		"\u017d\b\u001a\n\u001a\f\u001a\u0180\t\u001a\u0001\u001b\u0001\u001b\u0003"+
		"\u001b\u0184\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u0188\b\u001b"+
		"\u0003\u001b\u018a\b\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0003\u001e\u0194\b\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e\u019a\b\u001e"+
		"\u0001\u001e\u0001\u001e\u0003\u001e\u019e\b\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0003\u001e\u01a3\b\u001e\u0001\u001e\u0001\u001e\u0003\u001e"+
		"\u01a7\b\u001e\u0001\u001e\u0003\u001e\u01aa\b\u001e\u0001\u001e\u0001"+
		"\u001e\u0003\u001e\u01ae\b\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003"+
		"\u001e\u01b3\b\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001"+
		" \u0001!\u0001!\u0003!\u01bc\b!\u0001!\u0003!\u01bf\b!\u0001!\u0001!\u0001"+
		"!\u0001!\u0003!\u01c5\b!\u0001!\u0001!\u0003!\u01c9\b!\u0001!\u0001!\u0001"+
		"!\u0003!\u01ce\b!\u0001!\u0001!\u0003!\u01d2\b!\u0001!\u0001!\u0003!\u01d6"+
		"\b!\u0001!\u0001!\u0003!\u01da\b!\u0003!\u01dc\b!\u0001\"\u0001\"\u0003"+
		"\"\u01e0\b\"\u0001#\u0001#\u0005#\u01e4\b#\n#\f#\u01e7\t#\u0001$\u0001"+
		"$\u0001$\u0001$\u0001$\u0001%\u0001%\u0001%\u0005%\u01f1\b%\n%\f%\u01f4"+
		"\t%\u0001&\u0001&\u0001&\u0003&\u01f9\b&\u0001&\u0001&\u0005&\u01fd\b"+
		"&\n&\f&\u0200\t&\u0001\'\u0001\'\u0001\'\u0003\'\u0205\b\'\u0001\'\u0003"+
		"\'\u0208\b\'\u0001\'\u0001\'\u0001\'\u0001\'\u0001\'\u0001\'\u0001\'\u0003"+
		"\'\u0211\b\'\u0001\'\u0003\'\u0214\b\'\u0001\'\u0001\'\u0001\'\u0001\'"+
		"\u0001\'\u0003\'\u021b\b\'\u0001(\u0001(\u0001(\u0005(\u0220\b(\n(\f("+
		"\u0223\t(\u0001)\u0001)\u0001)\u0005)\u0228\b)\n)\f)\u022b\t)\u0001*\u0003"+
		"*\u022e\b*\u0001*\u0001*\u0003*\u0232\b*\u0001*\u0003*\u0235\b*\u0001"+
		"*\u0001*\u0001*\u0001*\u0003*\u023b\b*\u0003*\u023d\b*\u0001+\u0001+\u0001"+
		"+\u0001+\u0001+\u0001+\u0001+\u0001+\u0003+\u0247\b+\u0001,\u0001,\u0003"+
		",\u024b\b,\u0001,\u0003,\u024e\b,\u0001,\u0001,\u0001,\u0003,\u0253\b"+
		",\u0001,\u0003,\u0256\b,\u0003,\u0258\b,\u0001-\u0001-\u0003-\u025c\b"+
		"-\u0001.\u0001.\u0001.\u0001.\u0001/\u0001/\u0001/\u0001/\u0003/\u0266"+
		"\b/\u00010\u00010\u00010\u00030\u026b\b0\u00010\u00010\u00010\u00010\u0001"+
		"0\u00030\u0272\b0\u00010\u00030\u0275\b0\u00011\u00011\u00031\u0279\b"+
		"1\u00011\u00031\u027c\b1\u00011\u00031\u027f\b1\u00011\u00011\u00012\u0001"+
		"2\u00032\u0285\b2\u00012\u00052\u0288\b2\n2\f2\u028b\t2\u00012\u00032"+
		"\u028e\b2\u00012\u00012\u00013\u00013\u00013\u00013\u00053\u0296\b3\n"+
		"3\f3\u0299\t3\u00013\u00013\u00014\u00014\u00014\u00014\u00014\u00034"+
		"\u02a2\b4\u00014\u00014\u00014\u00014\u00014\u00014\u00014\u00014\u0001"+
		"4\u00034\u02ad\b4\u00014\u00014\u00054\u02b1\b4\n4\f4\u02b4\t4\u00014"+
		"\u00014\u00014\u00014\u00034\u02ba\b4\u00015\u00015\u00015\u00016\u0001"+
		"6\u00036\u02c1\b6\u00017\u00017\u00018\u00038\u02c6\b8\u00018\u00018\u0001"+
		"9\u00019\u00019\u00019\u00019\u0001:\u0001:\u0001:\u0001:\u0003:\u02d3"+
		"\b:\u0001;\u0001;\u0001;\u0005;\u02d8\b;\n;\f;\u02db\t;\u0001<\u0001<"+
		"\u0001<\u0005<\u02e0\b<\n<\f<\u02e3\t<\u0001=\u0001=\u0001=\u0003=\u02e8"+
		"\b=\u0001=\u0001=\u0001=\u0003=\u02ed\b=\u0001=\u0001=\u0003=\u02f1\b"+
		"=\u0001>\u0001>\u0001>\u0005>\u02f6\b>\n>\f>\u02f9\t>\u0001?\u0001?\u0001"+
		"?\u0005?\u02fe\b?\n?\f?\u0301\t?\u0001@\u0001@\u0001@\u0001@\u0001@\u0001"+
		"@\u0001@\u0003@\u030a\b@\u0001A\u0001A\u0003A\u030e\bA\u0001A\u0001A\u0001"+
		"A\u0001A\u0001A\u0001A\u0001A\u0003A\u0317\bA\u0001B\u0001B\u0001B\u0001"+
		"B\u0001B\u0001B\u0003B\u031f\bB\u0001C\u0001C\u0001C\u0001C\u0001C\u0001"+
		"C\u0001C\u0003C\u0328\bC\u0001C\u0001C\u0001D\u0001D\u0001D\u0001D\u0001"+
		"D\u0001D\u0001D\u0001D\u0001D\u0001D\u0001D\u0003D\u0337\bD\u0001D\u0001"+
		"D\u0001E\u0001E\u0001E\u0001E\u0001E\u0001E\u0001E\u0001F\u0001F\u0001"+
		"F\u0001F\u0001F\u0001F\u0001F\u0001G\u0001G\u0001G\u0001G\u0001G\u0001"+
		"G\u0001G\u0001H\u0001H\u0001H\u0001H\u0001H\u0001H\u0001H\u0001I\u0001"+
		"I\u0001J\u0001J\u0001K\u0001K\u0001K\u0000\u0000L\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,."+
		"02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088"+
		"\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0000\u000f\u0004\u0000\u0017"+
		"\u0017\"\"//11\u0003\u0000\u0005\u0005();;\u0002\u0000\u0007\u0007\u0011"+
		"\u0011\u0002\u0000\u0003\u0003\u0006\u0006\u0004\u0000\u0001\u000177>"+
		">@@\u0002\u0000GGKK\u0001\u0000IJ\u0001\u0000QV\u0002\u0000\u001d\u001d"+
		"==\u0001\u0000^_\u0001\u0000MO\u0002\u0000XX[\\\u0002\u0000\'\'00\u0005"+
		"\u0000\t\t\u001a\u001a\u001e\u001e44<<\u0003\u0000\u0001\u001c\u001e<"+
		">C\u0398\u0000\u009d\u0001\u0000\u0000\u0000\u0002\u00a1\u0001\u0000\u0000"+
		"\u0000\u0004\u00ae\u0001\u0000\u0000\u0000\u0006\u00b5\u0001\u0000\u0000"+
		"\u0000\b\u00b7\u0001\u0000\u0000\u0000\n\u00c0\u0001\u0000\u0000\u0000"+
		"\f\u00c9\u0001\u0000\u0000\u0000\u000e\u00d8\u0001\u0000\u0000\u0000\u0010"+
		"\u00ec\u0001\u0000\u0000\u0000\u0012\u00ee\u0001\u0000\u0000\u0000\u0014"+
		"\u00f5\u0001\u0000\u0000\u0000\u0016\u0102\u0001\u0000\u0000\u0000\u0018"+
		"\u0108\u0001\u0000\u0000\u0000\u001a\u010f\u0001\u0000\u0000\u0000\u001c"+
		"\u0118\u0001\u0000\u0000\u0000\u001e\u011d\u0001\u0000\u0000\u0000 \u0120"+
		"\u0001\u0000\u0000\u0000\"\u0123\u0001\u0000\u0000\u0000$\u012b\u0001"+
		"\u0000\u0000\u0000&\u012f\u0001\u0000\u0000\u0000(\u0132\u0001\u0000\u0000"+
		"\u0000*\u013c\u0001\u0000\u0000\u0000,\u015d\u0001\u0000\u0000\u0000."+
		"\u015f\u0001\u0000\u0000\u00000\u0169\u0001\u0000\u0000\u00002\u0175\u0001"+
		"\u0000\u0000\u00004\u0179\u0001\u0000\u0000\u00006\u0189\u0001\u0000\u0000"+
		"\u00008\u018b\u0001\u0000\u0000\u0000:\u018e\u0001\u0000\u0000\u0000<"+
		"\u01b2\u0001\u0000\u0000\u0000>\u01b4\u0001\u0000\u0000\u0000@\u01b7\u0001"+
		"\u0000\u0000\u0000B\u01db\u0001\u0000\u0000\u0000D\u01dd\u0001\u0000\u0000"+
		"\u0000F\u01e1\u0001\u0000\u0000\u0000H\u01e8\u0001\u0000\u0000\u0000J"+
		"\u01ed\u0001\u0000\u0000\u0000L\u01f5\u0001\u0000\u0000\u0000N\u021a\u0001"+
		"\u0000\u0000\u0000P\u021c\u0001\u0000\u0000\u0000R\u0224\u0001\u0000\u0000"+
		"\u0000T\u023c\u0001\u0000\u0000\u0000V\u0246\u0001\u0000\u0000\u0000X"+
		"\u0257\u0001\u0000\u0000\u0000Z\u025b\u0001\u0000\u0000\u0000\\\u025d"+
		"\u0001\u0000\u0000\u0000^\u0265\u0001\u0000\u0000\u0000`\u0274\u0001\u0000"+
		"\u0000\u0000b\u0276\u0001\u0000\u0000\u0000d\u0282\u0001\u0000\u0000\u0000"+
		"f\u0291\u0001\u0000\u0000\u0000h\u02b9\u0001\u0000\u0000\u0000j\u02bb"+
		"\u0001\u0000\u0000\u0000l\u02c0\u0001\u0000\u0000\u0000n\u02c2\u0001\u0000"+
		"\u0000\u0000p\u02c5\u0001\u0000\u0000\u0000r\u02c9\u0001\u0000\u0000\u0000"+
		"t\u02d2\u0001\u0000\u0000\u0000v\u02d4\u0001\u0000\u0000\u0000x\u02dc"+
		"\u0001\u0000\u0000\u0000z\u02f0\u0001\u0000\u0000\u0000|\u02f2\u0001\u0000"+
		"\u0000\u0000~\u02fa\u0001\u0000\u0000\u0000\u0080\u0309\u0001\u0000\u0000"+
		"\u0000\u0082\u0316\u0001\u0000\u0000\u0000\u0084\u031e\u0001\u0000\u0000"+
		"\u0000\u0086\u0320\u0001\u0000\u0000\u0000\u0088\u032b\u0001\u0000\u0000"+
		"\u0000\u008a\u033a\u0001\u0000\u0000\u0000\u008c\u0341\u0001\u0000\u0000"+
		"\u0000\u008e\u0348\u0001\u0000\u0000\u0000\u0090\u034f\u0001\u0000\u0000"+
		"\u0000\u0092\u0356\u0001\u0000\u0000\u0000\u0094\u0358\u0001\u0000\u0000"+
		"\u0000\u0096\u035a\u0001\u0000\u0000\u0000\u0098\u009e\u0003\u0002\u0001"+
		"\u0000\u0099\u009e\u0003\u001a\r\u0000\u009a\u009e\u0003\b\u0004\u0000"+
		"\u009b\u009e\u0003\u0012\t\u0000\u009c\u009e\u0003\u0018\f\u0000\u009d"+
		"\u0098\u0001\u0000\u0000\u0000\u009d\u0099\u0001\u0000\u0000\u0000\u009d"+
		"\u009a\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009d"+
		"\u009c\u0001\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f"+
		"\u00a0\u0005\u0000\u0000\u0001\u00a0\u0001\u0001\u0000\u0000\u0000\u00a1"+
		"\u00a3\u0003\u0004\u0002\u0000\u00a2\u00a4\u0003&\u0013\u0000\u00a3\u00a2"+
		"\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001\u0000\u0000\u0000\u00a4\u00a6"+
		"\u0001\u0000\u0000\u0000\u00a5\u00a7\u0003(\u0014\u0000\u00a6\u00a5\u0001"+
		"\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7\u00a9\u0001"+
		"\u0000\u0000\u0000\u00a8\u00aa\u0003*\u0015\u0000\u00a9\u00a8\u0001\u0000"+
		"\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000"+
		"\u0000\u0000\u00ab\u00ac\u0003,\u0016\u0000\u00ac\u0003\u0001\u0000\u0000"+
		"\u0000\u00ad\u00af\u0003\u0006\u0003\u0000\u00ae\u00ad\u0001\u0000\u0000"+
		"\u0000\u00af\u00b0\u0001\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000"+
		"\u0000\u00b0\u00b1\u0001\u0000\u0000\u0000\u00b1\u0005\u0001\u0000\u0000"+
		"\u0000\u00b2\u00b6\u0003\u001e\u000f\u0000\u00b3\u00b6\u0003.\u0017\u0000"+
		"\u00b4\u00b6\u0003 \u0010\u0000\u00b5\u00b2\u0001\u0000\u0000\u0000\u00b5"+
		"\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b4\u0001\u0000\u0000\u0000\u00b6"+
		"\u0007\u0001\u0000\u0000\u0000\u00b7\u00b8\u0005\u0019\u0000\u0000\u00b8"+
		"\u00bd\u0003\n\u0005\u0000\u00b9\u00ba\u0005f\u0000\u0000\u00ba\u00bc"+
		"\u0003\n\u0005\u0000\u00bb\u00b9\u0001\u0000\u0000\u0000\u00bc\u00bf\u0001"+
		"\u0000\u0000\u0000\u00bd\u00bb\u0001\u0000\u0000\u0000\u00bd\u00be\u0001"+
		"\u0000\u0000\u0000\u00be\t\u0001\u0000\u0000\u0000\u00bf\u00bd\u0001\u0000"+
		"\u0000\u0000\u00c0\u00c6\u0003\f\u0006\u0000\u00c1\u00c2\u0003\u0010\b"+
		"\u0000\u00c2\u00c3\u0003\f\u0006\u0000\u00c3\u00c5\u0001\u0000\u0000\u0000"+
		"\u00c4\u00c1\u0001\u0000\u0000\u0000\u00c5\u00c8\u0001\u0000\u0000\u0000"+
		"\u00c6\u00c4\u0001\u0000\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000"+
		"\u00c7\u000b\u0001\u0000\u0000\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000"+
		"\u00c9\u00cb\u0005`\u0000\u0000\u00ca\u00cc\u0003\u000e\u0007\u0000\u00cb"+
		"\u00ca\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000\u0000\u0000\u00cc"+
		"\u00d0\u0001\u0000\u0000\u0000\u00cd\u00cf\u0005I\u0000\u0000\u00ce\u00cd"+
		"\u0001\u0000\u0000\u0000\u00cf\u00d2\u0001\u0000\u0000\u0000\u00d0\u00ce"+
		"\u0001\u0000\u0000\u0000\u00d0\u00d1\u0001\u0000\u0000\u0000\u00d1\u00d4"+
		"\u0001\u0000\u0000\u0000\u00d2\u00d0\u0001\u0000\u0000\u0000\u00d3\u00d5"+
		"\u0003f3\u0000\u00d4\u00d3\u0001\u0000\u0000\u0000\u00d4\u00d5\u0001\u0000"+
		"\u0000\u0000\u00d5\u00d6\u0001\u0000\u0000\u0000\u00d6\u00d7\u0005a\u0000"+
		"\u0000\u00d7\r\u0001\u0000\u0000\u0000\u00d8\u00d9\u0003l6\u0000\u00d9"+
		"\u000f\u0001\u0000\u0000\u0000\u00da\u00db\u0005U\u0000\u0000\u00db\u00dc"+
		"\u0005_\u0000\u0000\u00dc\u00dd\u0005d\u0000\u0000\u00dd\u00df\u0005I"+
		"\u0000\u0000\u00de\u00e0\u0003f3\u0000\u00df\u00de\u0001\u0000\u0000\u0000"+
		"\u00df\u00e0\u0001\u0000\u0000\u0000\u00e0\u00e1\u0001\u0000\u0000\u0000"+
		"\u00e1\u00e2\u0005e\u0000\u0000\u00e2\u00ed\u0005_\u0000\u0000\u00e3\u00e4"+
		"\u0005_\u0000\u0000\u00e4\u00e5\u0005d\u0000\u0000\u00e5\u00e7\u0005I"+
		"\u0000\u0000\u00e6\u00e8\u0003f3\u0000\u00e7\u00e6\u0001\u0000\u0000\u0000"+
		"\u00e7\u00e8\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001\u0000\u0000\u0000"+
		"\u00e9\u00ea\u0005e\u0000\u0000\u00ea\u00eb\u0005_\u0000\u0000\u00eb\u00ed"+
		"\u0005V\u0000\u0000\u00ec\u00da\u0001\u0000\u0000\u0000\u00ec\u00e3\u0001"+
		"\u0000\u0000\u0000\u00ed\u0011\u0001\u0000\u0000\u0000\u00ee\u00ef\u0005"+
		"\u000e\u0000\u0000\u00ef\u00f0\u0003l6\u0000\u00f0\u00f1\u0005\u0018\u0000"+
		"\u0000\u00f1\u00f2\u0005L\u0000\u0000\u00f2\u00f3\u0005A\u0000\u0000\u00f3"+
		"\u00f4\u0003\u0014\n\u0000\u00f4\u0013\u0001\u0000\u0000\u0000\u00f5\u00fe"+
		"\u0005b\u0000\u0000\u00f6\u00fb\u0003\u0016\u000b\u0000\u00f7\u00f8\u0005"+
		"f\u0000\u0000\u00f8\u00fa\u0003\u0016\u000b\u0000\u00f9\u00f7\u0001\u0000"+
		"\u0000\u0000\u00fa\u00fd\u0001\u0000\u0000\u0000\u00fb\u00f9\u0001\u0000"+
		"\u0000\u0000\u00fb\u00fc\u0001\u0000\u0000\u0000\u00fc\u00ff\u0001\u0000"+
		"\u0000\u0000\u00fd\u00fb\u0001\u0000\u0000\u0000\u00fe\u00f6\u0001\u0000"+
		"\u0000\u0000\u00fe\u00ff\u0001\u0000\u0000\u0000\u00ff\u0100\u0001\u0000"+
		"\u0000\u0000\u0100\u0101\u0005c\u0000\u0000\u0101\u0015\u0001\u0000\u0000"+
		"\u0000\u0102\u0106\u0005L\u0000\u0000\u0103\u0104\u0005W\u0000\u0000\u0104"+
		"\u0107\u0003t:\u0000\u0105\u0107\u0003n7\u0000\u0106\u0103\u0001\u0000"+
		"\u0000\u0000\u0106\u0105\u0001\u0000\u0000\u0000\u0107\u0017\u0001\u0000"+
		"\u0000\u0000\u0108\u010d\u00056\u0000\u0000\u0109\u010e\u0001\u0000\u0000"+
		"\u0000\u010a\u010b\u0003l6\u0000\u010b\u010c\u0005\u0018\u0000\u0000\u010c"+
		"\u010e\u0001\u0000\u0000\u0000\u010d\u0109\u0001\u0000\u0000\u0000\u010d"+
		"\u010a\u0001\u0000\u0000\u0000\u010e\u0019\u0001\u0000\u0000\u0000\u010f"+
		"\u0113\u0005\u0010\u0000\u0000\u0110\u0112\u0003\u001c\u000e\u0000\u0111"+
		"\u0110\u0001\u0000\u0000\u0000\u0112\u0115\u0001\u0000\u0000\u0000\u0113"+
		"\u0111\u0001\u0000\u0000\u0000\u0113\u0114\u0001\u0000\u0000\u0000\u0114"+
		"\u0116\u0001\u0000\u0000\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0116"+
		"\u0117\u0003^/\u0000\u0117\u001b\u0001\u0000\u0000\u0000\u0118\u011b\u0007"+
		"\u0000\u0000\u0000\u0119\u011a\u0005%\u0000\u0000\u011a\u011c\u0005M\u0000"+
		"\u0000\u011b\u0119\u0001\u0000\u0000\u0000\u011b\u011c\u0001\u0000\u0000"+
		"\u0000\u011c\u001d\u0001\u0000\u0000\u0000\u011d\u011e\u0005\'\u0000\u0000"+
		"\u011e\u011f\u0003F#\u0000\u011f\u001f\u0001\u0000\u0000\u0000\u0120\u0121"+
		"\u0005$\u0000\u0000\u0121\u0122\u0003\"\u0011\u0000\u0122!\u0001\u0000"+
		"\u0000\u0000\u0123\u0128\u0003$\u0012\u0000\u0124\u0125\u0005f\u0000\u0000"+
		"\u0125\u0127\u0003$\u0012\u0000\u0126\u0124\u0001\u0000\u0000\u0000\u0127"+
		"\u012a\u0001\u0000\u0000\u0000\u0128\u0126\u0001\u0000\u0000\u0000\u0128"+
		"\u0129\u0001\u0000\u0000\u0000\u0129#\u0001\u0000\u0000\u0000\u012a\u0128"+
		"\u0001\u0000\u0000\u0000\u012b\u012c\u0005K\u0000\u0000\u012c\u012d\u0005"+
		"W\u0000\u0000\u012d\u012e\u0003v;\u0000\u012e%\u0001\u0000\u0000\u0000"+
		"\u012f\u0130\u0005B\u0000\u0000\u0130\u0131\u0003v;\u0000\u0131\'\u0001"+
		"\u0000\u0000\u0000\u0132\u0133\u0005\u001f\u0000\u0000\u0133\u0134\u0005"+
		"\b\u0000\u0000\u0134\u0139\u0003D\"\u0000\u0135\u0136\u0005f\u0000\u0000"+
		"\u0136\u0138\u0003D\"\u0000\u0137\u0135\u0001\u0000\u0000\u0000\u0138"+
		"\u013b\u0001\u0000\u0000\u0000\u0139\u0137\u0001\u0000\u0000\u0000\u0139"+
		"\u013a\u0001\u0000\u0000\u0000\u013a)\u0001\u0000\u0000\u0000\u013b\u0139"+
		"\u0001\u0000\u0000\u0000\u013c\u013d\u0005-\u0000\u0000\u013d\u013e\u0005"+
		"\b\u0000\u0000\u013e\u0143\u0003B!\u0000\u013f\u0140\u0005f\u0000\u0000"+
		"\u0140\u0142\u0003B!\u0000\u0141\u013f\u0001\u0000\u0000\u0000\u0142\u0145"+
		"\u0001\u0000\u0000\u0000\u0143\u0141\u0001\u0000\u0000\u0000\u0143\u0144"+
		"\u0001\u0000\u0000\u0000\u0144+\u0001\u0000\u0000\u0000\u0145\u0143\u0001"+
		"\u0000\u0000\u0000\u0146\u0148\u0005:\u0000\u0000\u0147\u0149\u0005\u0013"+
		"\u0000\u0000\u0148\u0147\u0001\u0000\u0000\u0000\u0148\u0149\u0001\u0000"+
		"\u0000\u0000\u0149\u014a\u0001\u0000\u0000\u0000\u014a\u014f\u0003<\u001e"+
		"\u0000\u014b\u014c\u0005f\u0000\u0000\u014c\u014e\u0003<\u001e\u0000\u014d"+
		"\u014b\u0001\u0000\u0000\u0000\u014e\u0151\u0001\u0000\u0000\u0000\u014f"+
		"\u014d\u0001\u0000\u0000\u0000\u014f\u0150\u0001\u0000\u0000\u0000\u0150"+
		"\u0153\u0001\u0000\u0000\u0000\u0151\u014f\u0001\u0000\u0000\u0000\u0152"+
		"\u0154\u00036\u001b\u0000\u0153\u0152\u0001\u0000\u0000\u0000\u0153\u0154"+
		"\u0001\u0000\u0000\u0000\u0154\u015e\u0001\u0000\u0000\u0000\u0155\u0157"+
		"\u0005:\u0000\u0000\u0156\u0158\u0005\u0013\u0000\u0000\u0157\u0156\u0001"+
		"\u0000\u0000\u0000\u0157\u0158\u0001\u0000\u0000\u0000\u0158\u0159\u0001"+
		"\u0000\u0000\u0000\u0159\u015b\u0005[\u0000\u0000\u015a\u015c\u00036\u001b"+
		"\u0000\u015b\u015a\u0001\u0000\u0000\u0000\u015b\u015c\u0001\u0000\u0000"+
		"\u0000\u015c\u015e\u0001\u0000\u0000\u0000\u015d\u0146\u0001\u0000\u0000"+
		"\u0000\u015d\u0155\u0001\u0000\u0000\u0000\u015e-\u0001\u0000\u0000\u0000"+
		"\u015f\u0160\u0005\n\u0000\u0000\u0160\u0161\u0003l6\u0000\u0161\u0163"+
		"\u0005`\u0000\u0000\u0162\u0164\u00034\u001a\u0000\u0163\u0162\u0001\u0000"+
		"\u0000\u0000\u0163\u0164\u0001\u0000\u0000\u0000\u0164\u0165\u0001\u0000"+
		"\u0000\u0000\u0165\u0167\u0005a\u0000\u0000\u0166\u0168\u00030\u0018\u0000"+
		"\u0167\u0166\u0001\u0000\u0000\u0000\u0167\u0168\u0001\u0000\u0000\u0000"+
		"\u0168/\u0001\u0000\u0000\u0000\u0169\u0173\u0005C\u0000\u0000\u016a\u0174"+
		"\u0005[\u0000\u0000\u016b\u0170\u00032\u0019\u0000\u016c\u016d\u0005f"+
		"\u0000\u0000\u016d\u016f\u00032\u0019\u0000\u016e\u016c\u0001\u0000\u0000"+
		"\u0000\u016f\u0172\u0001\u0000\u0000\u0000\u0170\u016e\u0001\u0000\u0000"+
		"\u0000\u0170\u0171\u0001\u0000\u0000\u0000\u0171\u0174\u0001\u0000\u0000"+
		"\u0000\u0172\u0170\u0001\u0000\u0000\u0000\u0173\u016a\u0001\u0000\u0000"+
		"\u0000\u0173\u016b\u0001\u0000\u0000\u0000\u01741\u0001\u0000\u0000\u0000"+
		"\u0175\u0177\u0005K\u0000\u0000\u0176\u0178\u0003>\u001f\u0000\u0177\u0176"+
		"\u0001\u0000\u0000\u0000\u0177\u0178\u0001\u0000\u0000\u0000\u01783\u0001"+
		"\u0000\u0000\u0000\u0179\u017e\u0003v;\u0000\u017a\u017b\u0005f\u0000"+
		"\u0000\u017b\u017d\u0003v;\u0000\u017c\u017a\u0001\u0000\u0000\u0000\u017d"+
		"\u0180\u0001\u0000\u0000\u0000\u017e\u017c\u0001\u0000\u0000\u0000\u017e"+
		"\u017f\u0001\u0000\u0000\u0000\u017f5\u0001\u0000\u0000\u0000\u0180\u017e"+
		"\u0001\u0000\u0000\u0000\u0181\u0183\u00038\u001c\u0000\u0182\u0184\u0003"+
		":\u001d\u0000\u0183\u0182\u0001\u0000\u0000\u0000\u0183\u0184\u0001\u0000"+
		"\u0000\u0000\u0184\u018a\u0001\u0000\u0000\u0000\u0185\u0187\u0003:\u001d"+
		"\u0000\u0186\u0188\u00038\u001c\u0000\u0187\u0186\u0001\u0000\u0000\u0000"+
		"\u0187\u0188\u0001\u0000\u0000\u0000\u0188\u018a\u0001\u0000\u0000\u0000"+
		"\u0189\u0181\u0001\u0000\u0000\u0000\u0189\u0185\u0001\u0000\u0000\u0000"+
		"\u018a7\u0001\u0000\u0000\u0000\u018b\u018c\u0005%\u0000\u0000\u018c\u018d"+
		"\u0005M\u0000\u0000\u018d9\u0001\u0000\u0000\u0000\u018e\u018f\u0005+"+
		"\u0000\u0000\u018f\u0190\u0005M\u0000\u0000\u0190;\u0001\u0000\u0000\u0000"+
		"\u0191\u0193\u0005K\u0000\u0000\u0192\u0194\u0005H\u0000\u0000\u0193\u0192"+
		"\u0001\u0000\u0000\u0000\u0193\u0194\u0001\u0000\u0000\u0000\u0194\u01b3"+
		"\u0001\u0000\u0000\u0000\u0195\u0196\u0003@ \u0000\u0196\u0197\u0005`"+
		"\u0000\u0000\u0197\u0199\u0005K\u0000\u0000\u0198\u019a\u0005H\u0000\u0000"+
		"\u0199\u0198\u0001\u0000\u0000\u0000\u0199\u019a\u0001\u0000\u0000\u0000"+
		"\u019a\u019b\u0001\u0000\u0000\u0000\u019b\u019d\u0005a\u0000\u0000\u019c"+
		"\u019e\u0003>\u001f\u0000\u019d\u019c\u0001\u0000\u0000\u0000\u019d\u019e"+
		"\u0001\u0000\u0000\u0000\u019e\u01b3\u0001\u0000\u0000\u0000\u019f\u01a0"+
		"\u0005\r\u0000\u0000\u01a0\u01a2\u0005`\u0000\u0000\u01a1\u01a3\u0005"+
		"\u0013\u0000\u0000\u01a2\u01a1\u0001\u0000\u0000\u0000\u01a2\u01a3\u0001"+
		"\u0000\u0000\u0000\u01a3\u01a9\u0001\u0000\u0000\u0000\u01a4\u01a6\u0005"+
		"K\u0000\u0000\u01a5\u01a7\u0005H\u0000\u0000\u01a6\u01a5\u0001\u0000\u0000"+
		"\u0000\u01a6\u01a7\u0001\u0000\u0000\u0000\u01a7\u01aa\u0001\u0000\u0000"+
		"\u0000\u01a8\u01aa\u0005[\u0000\u0000\u01a9\u01a4\u0001\u0000\u0000\u0000"+
		"\u01a9\u01a8\u0001\u0000\u0000\u0000\u01aa\u01ab\u0001\u0000\u0000\u0000"+
		"\u01ab\u01ad\u0005a\u0000\u0000\u01ac\u01ae\u0003>\u001f\u0000\u01ad\u01ac"+
		"\u0001\u0000\u0000\u0000\u01ad\u01ae\u0001\u0000\u0000\u0000\u01ae\u01b3"+
		"\u0001\u0000\u0000\u0000\u01af\u01b0\u0003v;\u0000\u01b0\u01b1\u0003>"+
		"\u001f\u0000\u01b1\u01b3\u0001\u0000\u0000\u0000\u01b2\u0191\u0001\u0000"+
		"\u0000\u0000\u01b2\u0195\u0001\u0000\u0000\u0000\u01b2\u019f\u0001\u0000"+
		"\u0000\u0000\u01b2\u01af\u0001\u0000\u0000\u0000\u01b3=\u0001\u0000\u0000"+
		"\u0000\u01b4\u01b5\u0005\u0004\u0000\u0000\u01b5\u01b6\u0005K\u0000\u0000"+
		"\u01b6?\u0001\u0000\u0000\u0000\u01b7\u01b8\u0007\u0001\u0000\u0000\u01b8"+
		"A\u0001\u0000\u0000\u0000\u01b9\u01bb\u0005K\u0000\u0000\u01ba\u01bc\u0005"+
		"H\u0000\u0000\u01bb\u01ba\u0001\u0000\u0000\u0000\u01bb\u01bc\u0001\u0000"+
		"\u0000\u0000\u01bc\u01be\u0001\u0000\u0000\u0000\u01bd\u01bf\u0007\u0002"+
		"\u0000\u0000\u01be\u01bd\u0001\u0000\u0000\u0000\u01be\u01bf\u0001\u0000"+
		"\u0000\u0000\u01bf\u01dc\u0001\u0000\u0000\u0000\u01c0\u01c1\u0003@ \u0000"+
		"\u01c1\u01c2\u0005`\u0000\u0000\u01c2\u01c4\u0005K\u0000\u0000\u01c3\u01c5"+
		"\u0005H\u0000\u0000\u01c4\u01c3\u0001\u0000\u0000\u0000\u01c4\u01c5\u0001"+
		"\u0000\u0000\u0000\u01c5\u01c6\u0001\u0000\u0000\u0000\u01c6\u01c8\u0005"+
		"a\u0000\u0000\u01c7\u01c9\u0007\u0002\u0000\u0000\u01c8\u01c7\u0001\u0000"+
		"\u0000\u0000\u01c8\u01c9\u0001\u0000\u0000\u0000\u01c9\u01dc\u0001\u0000"+
		"\u0000\u0000\u01ca\u01cb\u0005\r\u0000\u0000\u01cb\u01cd\u0005`\u0000"+
		"\u0000\u01cc\u01ce\u0005\u0013\u0000\u0000\u01cd\u01cc\u0001\u0000\u0000"+
		"\u0000\u01cd\u01ce\u0001\u0000\u0000\u0000\u01ce\u01cf\u0001\u0000\u0000"+
		"\u0000\u01cf\u01d1\u0005K\u0000\u0000\u01d0\u01d2\u0005H\u0000\u0000\u01d1"+
		"\u01d0\u0001\u0000\u0000\u0000\u01d1\u01d2\u0001\u0000\u0000\u0000\u01d2"+
		"\u01d3\u0001\u0000\u0000\u0000\u01d3\u01d5\u0005a\u0000\u0000\u01d4\u01d6"+
		"\u0007\u0002\u0000\u0000\u01d5\u01d4\u0001\u0000\u0000\u0000\u01d5\u01d6"+
		"\u0001\u0000\u0000\u0000\u01d6\u01dc\u0001\u0000\u0000\u0000\u01d7\u01d9"+
		"\u0003v;\u0000\u01d8\u01da\u0007\u0002\u0000\u0000\u01d9\u01d8\u0001\u0000"+
		"\u0000\u0000\u01d9\u01da\u0001\u0000\u0000\u0000\u01da\u01dc\u0001\u0000"+
		"\u0000\u0000\u01db\u01b9\u0001\u0000\u0000\u0000\u01db\u01c0\u0001\u0000"+
		"\u0000\u0000\u01db\u01ca\u0001\u0000\u0000\u0000\u01db\u01d7\u0001\u0000"+
		"\u0000\u0000\u01dcC\u0001\u0000\u0000\u0000\u01dd\u01df\u0005K\u0000\u0000"+
		"\u01de\u01e0\u0005H\u0000\u0000\u01df\u01de\u0001\u0000\u0000\u0000\u01df"+
		"\u01e0\u0001\u0000\u0000\u0000\u01e0E\u0001\u0000\u0000\u0000\u01e1\u01e5"+
		"\u0003J%\u0000\u01e2\u01e4\u0003H$\u0000\u01e3\u01e2\u0001\u0000\u0000"+
		"\u0000\u01e4\u01e7\u0001\u0000\u0000\u0000\u01e5\u01e3\u0001\u0000\u0000"+
		"\u0000\u01e5\u01e6\u0001\u0000\u0000\u0000\u01e6G\u0001\u0000\u0000\u0000"+
		"\u01e7\u01e5\u0001\u0000\u0000\u0000\u01e8\u01e9\u0005,\u0000\u0000\u01e9"+
		"\u01ea\u0005b\u0000\u0000\u01ea\u01eb\u0003F#\u0000\u01eb\u01ec\u0005"+
		"c\u0000\u0000\u01ecI\u0001\u0000\u0000\u0000\u01ed\u01f2\u0003L&\u0000"+
		"\u01ee\u01ef\u0005f\u0000\u0000\u01ef\u01f1\u0003L&\u0000\u01f0\u01ee"+
		"\u0001\u0000\u0000\u0000\u01f1\u01f4\u0001\u0000\u0000\u0000\u01f2\u01f0"+
		"\u0001\u0000\u0000\u0000\u01f2\u01f3\u0001\u0000\u0000\u0000\u01f3K\u0001"+
		"\u0000\u0000\u0000\u01f4\u01f2\u0001\u0000\u0000\u0000\u01f5\u01fe\u0003"+
		"Z-\u0000\u01f6\u01f9\u0003`0\u0000\u01f7\u01f9\u0003N\'\u0000\u01f8\u01f6"+
		"\u0001\u0000\u0000\u0000\u01f8\u01f7\u0001\u0000\u0000\u0000\u01f9\u01fa"+
		"\u0001\u0000\u0000\u0000\u01fa\u01fb\u0003Z-\u0000\u01fb\u01fd\u0001\u0000"+
		"\u0000\u0000\u01fc\u01f8\u0001\u0000\u0000\u0000\u01fd\u0200\u0001\u0000"+
		"\u0000\u0000\u01fe\u01fc\u0001\u0000\u0000\u0000\u01fe\u01ff\u0001\u0000"+
		"\u0000\u0000\u01ffM\u0001\u0000\u0000\u0000\u0200\u01fe\u0001\u0000\u0000"+
		"\u0000\u0201\u0202\u0005Q\u0000\u0000\u0202\u0204\u0005d\u0000\u0000\u0203"+
		"\u0205\u0003X,\u0000\u0204\u0203\u0001\u0000\u0000\u0000\u0204\u0205\u0001"+
		"\u0000\u0000\u0000\u0205\u0207\u0001\u0000\u0000\u0000\u0206\u0208\u0005"+
		"K\u0000\u0000\u0207\u0206\u0001\u0000\u0000\u0000\u0207\u0208\u0001\u0000"+
		"\u0000\u0000\u0208\u0209\u0001\u0000\u0000\u0000\u0209\u020a\u0003P(\u0000"+
		"\u020a\u020b\u0005e\u0000\u0000\u020b\u020c\u0005W\u0000\u0000\u020c\u021b"+
		"\u0001\u0000\u0000\u0000\u020d\u020e\u0005W\u0000\u0000\u020e\u0210\u0005"+
		"d\u0000\u0000\u020f\u0211\u0003X,\u0000\u0210\u020f\u0001\u0000\u0000"+
		"\u0000\u0210\u0211\u0001\u0000\u0000\u0000\u0211\u0213\u0001\u0000\u0000"+
		"\u0000\u0212\u0214\u0005K\u0000\u0000\u0213\u0212\u0001\u0000\u0000\u0000"+
		"\u0213\u0214\u0001\u0000\u0000\u0000\u0214\u0215\u0001\u0000\u0000\u0000"+
		"\u0215\u0216\u0003P(\u0000\u0216\u0217\u0005e\u0000\u0000\u0217\u0218"+
		"\u0005W\u0000\u0000\u0218\u0219\u0005V\u0000\u0000\u0219\u021b\u0001\u0000"+
		"\u0000\u0000\u021a\u0201\u0001\u0000\u0000\u0000\u021a\u020d\u0001\u0000"+
		"\u0000\u0000\u021bO\u0001\u0000\u0000\u0000\u021c\u0221\u0003R)\u0000"+
		"\u021d\u021e\u0005Y\u0000\u0000\u021e\u0220\u0003R)\u0000\u021f\u021d"+
		"\u0001\u0000\u0000\u0000\u0220\u0223\u0001\u0000\u0000\u0000\u0221\u021f"+
		"\u0001\u0000\u0000\u0000\u0221\u0222\u0001\u0000\u0000\u0000\u0222Q\u0001"+
		"\u0000\u0000\u0000\u0223\u0221\u0001\u0000\u0000\u0000\u0224\u0229\u0003"+
		"T*\u0000\u0225\u0226\u0005X\u0000\u0000\u0226\u0228\u0003T*\u0000\u0227"+
		"\u0225\u0001\u0000\u0000\u0000\u0228\u022b\u0001\u0000\u0000\u0000\u0229"+
		"\u0227\u0001\u0000\u0000\u0000\u0229\u022a\u0001\u0000\u0000\u0000\u022a"+
		"S\u0001\u0000\u0000\u0000\u022b\u0229\u0001\u0000\u0000\u0000\u022c\u022e"+
		"\u0005Z\u0000\u0000\u022d\u022c\u0001\u0000\u0000\u0000\u022d\u022e\u0001"+
		"\u0000\u0000\u0000\u022e\u022f\u0001\u0000\u0000\u0000\u022f\u0231\u0005"+
		"I\u0000\u0000\u0230\u0232\u0003V+\u0000\u0231\u0230\u0001\u0000\u0000"+
		"\u0000\u0231\u0232\u0001\u0000\u0000\u0000\u0232\u023d\u0001\u0000\u0000"+
		"\u0000\u0233\u0235\u0005Z\u0000\u0000\u0234\u0233\u0001\u0000\u0000\u0000"+
		"\u0234\u0235\u0001\u0000\u0000\u0000\u0235\u0236\u0001\u0000\u0000\u0000"+
		"\u0236\u0237\u0005`\u0000\u0000\u0237\u0238\u0003P(\u0000\u0238\u023a"+
		"\u0005a\u0000\u0000\u0239\u023b\u0003V+\u0000\u023a\u0239\u0001\u0000"+
		"\u0000\u0000\u023a\u023b\u0001\u0000\u0000\u0000\u023b\u023d\u0001\u0000"+
		"\u0000\u0000\u023c\u022d\u0001\u0000\u0000\u0000\u023c\u0234\u0001\u0000"+
		"\u0000\u0000\u023dU\u0001\u0000\u0000\u0000\u023e\u0247\u0005[\u0000\u0000"+
		"\u023f\u0247\u0005^\u0000\u0000\u0240\u0247\u0005]\u0000\u0000\u0241\u0242"+
		"\u0005b\u0000\u0000\u0242\u0243\u0005M\u0000\u0000\u0243\u0244\u0005f"+
		"\u0000\u0000\u0244\u0245\u0005M\u0000\u0000\u0245\u0247\u0005c\u0000\u0000"+
		"\u0246\u023e\u0001\u0000\u0000\u0000\u0246\u023f\u0001\u0000\u0000\u0000"+
		"\u0246\u0240\u0001\u0000\u0000\u0000\u0246\u0241\u0001\u0000\u0000\u0000"+
		"\u0247W\u0001\u0000\u0000\u0000\u0248\u024a\u0007\u0003\u0000\u0000\u0249"+
		"\u024b\u00055\u0000\u0000\u024a\u0249\u0001\u0000\u0000\u0000\u024a\u024b"+
		"\u0001\u0000\u0000\u0000\u024b\u024d\u0001\u0000\u0000\u0000\u024c\u024e"+
		"\u0007\u0004\u0000\u0000\u024d\u024c\u0001\u0000\u0000\u0000\u024d\u024e"+
		"\u0001\u0000\u0000\u0000\u024e\u0258\u0001\u0000\u0000\u0000\u024f\u0250"+
		"\u00055\u0000\u0000\u0250\u0252\u0005M\u0000\u0000\u0251\u0253\u0005 "+
		"\u0000\u0000\u0252\u0251\u0001\u0000\u0000\u0000\u0252\u0253\u0001\u0000"+
		"\u0000\u0000\u0253\u0255\u0001\u0000\u0000\u0000\u0254\u0256\u0007\u0004"+
		"\u0000\u0000\u0255\u0254\u0001\u0000\u0000\u0000\u0255\u0256\u0001\u0000"+
		"\u0000\u0000\u0256\u0258\u0001\u0000\u0000\u0000\u0257\u0248\u0001\u0000"+
		"\u0000\u0000\u0257\u024f\u0001\u0000\u0000\u0000\u0258Y\u0001\u0000\u0000"+
		"\u0000\u0259\u025c\u0003\\.\u0000\u025a\u025c\u0003d2\u0000\u025b\u0259"+
		"\u0001\u0000\u0000\u0000\u025b\u025a\u0001\u0000\u0000\u0000\u025c[\u0001"+
		"\u0000\u0000\u0000\u025d\u025e\u0005`\u0000\u0000\u025e\u025f\u0003^/"+
		"\u0000\u025f\u0260\u0005a\u0000\u0000\u0260]\u0001\u0000\u0000\u0000\u0261"+
		"\u0266\u0003l6\u0000\u0262\u0266\u0005F\u0000\u0000\u0263\u0266\u0005"+
		"G\u0000\u0000\u0264\u0266\u0003t:\u0000\u0265\u0261\u0001\u0000\u0000"+
		"\u0000\u0265\u0262\u0001\u0000\u0000\u0000\u0265\u0263\u0001\u0000\u0000"+
		"\u0000\u0265\u0264\u0001\u0000\u0000\u0000\u0266_\u0001\u0000\u0000\u0000"+
		"\u0267\u026a\u0005U\u0000\u0000\u0268\u0269\u0005_\u0000\u0000\u0269\u026b"+
		"\u0003b1\u0000\u026a\u0268\u0001\u0000\u0000\u0000\u026a\u026b\u0001\u0000"+
		"\u0000\u0000\u026b\u026c\u0001\u0000\u0000\u0000\u026c\u0275\u0005_\u0000"+
		"\u0000\u026d\u0271\u0005_\u0000\u0000\u026e\u026f\u0003b1\u0000\u026f"+
		"\u0270\u0005_\u0000\u0000\u0270\u0272\u0001\u0000\u0000\u0000\u0271\u026e"+
		"\u0001\u0000\u0000\u0000\u0271\u0272\u0001\u0000\u0000\u0000\u0272\u0273"+
		"\u0001\u0000\u0000\u0000\u0273\u0275\u0005V\u0000\u0000\u0274\u0267\u0001"+
		"\u0000\u0000\u0000\u0274\u026d\u0001\u0000\u0000\u0000\u0275a\u0001\u0000"+
		"\u0000\u0000\u0276\u0278\u0005d\u0000\u0000\u0277\u0279\u0007\u0005\u0000"+
		"\u0000\u0278\u0277\u0001\u0000\u0000\u0000\u0278\u0279\u0001\u0000\u0000"+
		"\u0000\u0279\u027b\u0001\u0000\u0000\u0000\u027a\u027c\u0007\u0006\u0000"+
		"\u0000\u027b\u027a\u0001\u0000\u0000\u0000\u027b\u027c\u0001\u0000\u0000"+
		"\u0000\u027c\u027e\u0001\u0000\u0000\u0000\u027d\u027f\u0003f3\u0000\u027e"+
		"\u027d\u0001\u0000\u0000\u0000\u027e\u027f\u0001\u0000\u0000\u0000\u027f"+
		"\u0280\u0001\u0000\u0000\u0000\u0280\u0281\u0005e\u0000\u0000\u0281c\u0001"+
		"\u0000\u0000\u0000\u0282\u0284\u0005`\u0000\u0000\u0283\u0285\u0005K\u0000"+
		"\u0000\u0284\u0283\u0001\u0000\u0000\u0000\u0284\u0285\u0001\u0000\u0000"+
		"\u0000\u0285\u0289\u0001\u0000\u0000\u0000\u0286\u0288\u0005I\u0000\u0000"+
		"\u0287\u0286\u0001\u0000\u0000\u0000\u0288\u028b\u0001\u0000\u0000\u0000"+
		"\u0289\u0287\u0001\u0000\u0000\u0000\u0289\u028a\u0001\u0000\u0000\u0000"+
		"\u028a\u028d\u0001\u0000\u0000\u0000\u028b\u0289\u0001\u0000\u0000\u0000"+
		"\u028c\u028e\u0003f3\u0000\u028d\u028c\u0001\u0000\u0000\u0000\u028d\u028e"+
		"\u0001\u0000\u0000\u0000\u028e\u028f\u0001\u0000\u0000\u0000\u028f\u0290"+
		"\u0005a\u0000\u0000\u0290e\u0001\u0000\u0000\u0000\u0291\u0292\u0005b"+
		"\u0000\u0000\u0292\u0297\u0003h4\u0000\u0293\u0294\u0005f\u0000\u0000"+
		"\u0294\u0296\u0003h4\u0000\u0295\u0293\u0001\u0000\u0000\u0000\u0296\u0299"+
		"\u0001\u0000\u0000\u0000\u0297\u0295\u0001\u0000\u0000\u0000\u0297\u0298"+
		"\u0001\u0000\u0000\u0000\u0298\u029a\u0001\u0000\u0000\u0000\u0299\u0297"+
		"\u0001\u0000\u0000\u0000\u029a\u029b\u0005c\u0000\u0000\u029bg\u0001\u0000"+
		"\u0000\u0000\u029c\u02a1\u0003l6\u0000\u029d\u029e\u0005g\u0000\u0000"+
		"\u029e\u02a2\u0003t:\u0000\u029f\u02a2\u0005D\u0000\u0000\u02a0\u02a2"+
		"\u0005E\u0000\u0000\u02a1\u029d\u0001\u0000\u0000\u0000\u02a1\u029f\u0001"+
		"\u0000\u0000\u0000\u02a1\u02a0\u0001\u0000\u0000\u0000\u02a2\u02ba\u0001"+
		"\u0000\u0000\u0000\u02a3\u02a4\u0003l6\u0000\u02a4\u02a5\u0005I\u0000"+
		"\u0000\u02a5\u02a6\u0005`\u0000\u0000\u02a6\u02a7\u0005L\u0000\u0000\u02a7"+
		"\u02a8\u0005a\u0000\u0000\u02a8\u02ba\u0001\u0000\u0000\u0000\u02a9\u02aa"+
		"\u0003l6\u0000\u02aa\u02ac\u0005\u001c\u0000\u0000\u02ab\u02ad\u00053"+
		"\u0000\u0000\u02ac\u02ab\u0001\u0000\u0000\u0000\u02ac\u02ad\u0001\u0000"+
		"\u0000\u0000\u02ad\u02ae\u0001\u0000\u0000\u0000\u02ae\u02b2\u0003\u0094"+
		"J\u0000\u02af\u02b1\u0003j5\u0000\u02b0\u02af\u0001\u0000\u0000\u0000"+
		"\u02b1\u02b4\u0001\u0000\u0000\u0000\u02b2\u02b0\u0001\u0000\u0000\u0000"+
		"\u02b2\u02b3\u0001\u0000\u0000\u0000\u02b3\u02ba\u0001\u0000\u0000\u0000"+
		"\u02b4\u02b2\u0001\u0000\u0000\u0000\u02b5\u02b6\u0003l6\u0000\u02b6\u02b7"+
		"\u0007\u0007\u0000\u0000\u02b7\u02b8\u0003t:\u0000\u02b8\u02ba\u0001\u0000"+
		"\u0000\u0000\u02b9\u029c\u0001\u0000\u0000\u0000\u02b9\u02a3\u0001\u0000"+
		"\u0000\u0000\u02b9\u02a9\u0001\u0000\u0000\u0000\u02b9\u02b5\u0001\u0000"+
		"\u0000\u0000\u02bai\u0001\u0000\u0000\u0000\u02bb\u02bc\u0005.\u0000\u0000"+
		"\u02bc\u02bd\u0003\u0094J\u0000\u02bdk\u0001\u0000\u0000\u0000\u02be\u02c1"+
		"\u0005P\u0000\u0000\u02bf\u02c1\u0003\u0096K\u0000\u02c0\u02be\u0001\u0000"+
		"\u0000\u0000\u02c0\u02bf\u0001\u0000\u0000\u0000\u02c1m\u0001\u0000\u0000"+
		"\u0000\u02c2\u02c3\u0007\b\u0000\u0000\u02c3o\u0001\u0000\u0000\u0000"+
		"\u02c4\u02c6\u0007\t\u0000\u0000\u02c5\u02c4\u0001\u0000\u0000\u0000\u02c5"+
		"\u02c6\u0001\u0000\u0000\u0000\u02c6\u02c7\u0001\u0000\u0000\u0000\u02c7"+
		"\u02c8\u0007\n\u0000\u0000\u02c8q\u0001\u0000\u0000\u0000\u02c9\u02ca"+
		"\u0003l6\u0000\u02ca\u02cb\u0005`\u0000\u0000\u02cb\u02cc\u0005L\u0000"+
		"\u0000\u02cc\u02cd\u0005a\u0000\u0000\u02cds\u0001\u0000\u0000\u0000\u02ce"+
		"\u02d3\u0003p8\u0000\u02cf\u02d3\u0005L\u0000\u0000\u02d0\u02d3\u0003"+
		"n7\u0000\u02d1\u02d3\u0003r9\u0000\u02d2\u02ce\u0001\u0000\u0000\u0000"+
		"\u02d2\u02cf\u0001\u0000\u0000\u0000\u02d2\u02d0\u0001\u0000\u0000\u0000"+
		"\u02d2\u02d1\u0001\u0000\u0000\u0000\u02d3u\u0001\u0000\u0000\u0000\u02d4"+
		"\u02d9\u0003x<\u0000\u02d5\u02d6\u0005.\u0000\u0000\u02d6\u02d8\u0003"+
		"x<\u0000\u02d7\u02d5\u0001\u0000\u0000\u0000\u02d8\u02db\u0001\u0000\u0000"+
		"\u0000\u02d9\u02d7\u0001\u0000\u0000\u0000\u02d9\u02da\u0001\u0000\u0000"+
		"\u0000\u02daw\u0001\u0000\u0000\u0000\u02db\u02d9\u0001\u0000\u0000\u0000"+
		"\u02dc\u02e1\u0003z=\u0000\u02dd\u02de\u0005\u0002\u0000\u0000\u02de\u02e0"+
		"\u0003z=\u0000\u02df\u02dd\u0001\u0000\u0000\u0000\u02e0\u02e3\u0001\u0000"+
		"\u0000\u0000\u02e1\u02df\u0001\u0000\u0000\u0000\u02e1\u02e2\u0001\u0000"+
		"\u0000\u0000\u02e2y\u0001\u0000\u0000\u0000\u02e3\u02e1\u0001\u0000\u0000"+
		"\u0000\u02e4\u02e7\u0003|>\u0000\u02e5\u02e6\u0007\u0007\u0000\u0000\u02e6"+
		"\u02e8\u0003|>\u0000\u02e7\u02e5\u0001\u0000\u0000\u0000\u02e7\u02e8\u0001"+
		"\u0000\u0000\u0000\u02e8\u02f1\u0001\u0000\u0000\u0000\u02e9\u02ea\u0003"+
		"|>\u0000\u02ea\u02ec\u0005\u001c\u0000\u0000\u02eb\u02ed\u00053\u0000"+
		"\u0000\u02ec\u02eb\u0001\u0000\u0000\u0000\u02ec\u02ed\u0001\u0000\u0000"+
		"\u0000\u02ed\u02ee\u0001\u0000\u0000\u0000\u02ee\u02ef\u0003\u0094J\u0000"+
		"\u02ef\u02f1\u0001\u0000\u0000\u0000\u02f0\u02e4\u0001\u0000\u0000\u0000"+
		"\u02f0\u02e9\u0001\u0000\u0000\u0000\u02f1{\u0001\u0000\u0000\u0000\u02f2"+
		"\u02f7\u0003~?\u0000\u02f3\u02f4\u0007\t\u0000\u0000\u02f4\u02f6\u0003"+
		"~?\u0000\u02f5\u02f3\u0001\u0000\u0000\u0000\u02f6\u02f9\u0001\u0000\u0000"+
		"\u0000\u02f7\u02f5\u0001\u0000\u0000\u0000\u02f7\u02f8\u0001\u0000\u0000"+
		"\u0000\u02f8}\u0001\u0000\u0000\u0000\u02f9\u02f7\u0001\u0000\u0000\u0000"+
		"\u02fa\u02ff\u0003\u0080@\u0000\u02fb\u02fc\u0007\u000b\u0000\u0000\u02fc"+
		"\u02fe\u0003\u0080@\u0000\u02fd\u02fb\u0001\u0000\u0000\u0000\u02fe\u0301"+
		"\u0001\u0000\u0000\u0000\u02ff\u02fd\u0001\u0000\u0000\u0000\u02ff\u0300"+
		"\u0001\u0000\u0000\u0000\u0300\u007f\u0001\u0000\u0000\u0000\u0301\u02ff"+
		"\u0001\u0000\u0000\u0000\u0302\u0303\u00053\u0000\u0000\u0303\u030a\u0003"+
		"\u0080@\u0000\u0304\u030a\u0003\u0082A\u0000\u0305\u0306\u0005^\u0000"+
		"\u0000\u0306\u030a\u0003\u0080@\u0000\u0307\u0308\u0005_\u0000\u0000\u0308"+
		"\u030a\u0003\u0080@\u0000\u0309\u0302\u0001\u0000\u0000\u0000\u0309\u0304"+
		"\u0001\u0000\u0000\u0000\u0309\u0305\u0001\u0000\u0000\u0000\u0309\u0307"+
		"\u0001\u0000\u0000\u0000\u030a\u0081\u0001\u0000\u0000\u0000\u030b\u030d"+
		"\u0005K\u0000\u0000\u030c\u030e\u0005H\u0000\u0000\u030d\u030c\u0001\u0000"+
		"\u0000\u0000\u030d\u030e\u0001\u0000\u0000\u0000\u030e\u0317\u0001\u0000"+
		"\u0000\u0000\u030f\u0317\u0003t:\u0000\u0310\u0317\u0003^/\u0000\u0311"+
		"\u0312\u0005`\u0000\u0000\u0312\u0313\u0003v;\u0000\u0313\u0314\u0005"+
		"a\u0000\u0000\u0314\u0317\u0001\u0000\u0000\u0000\u0315\u0317\u0003\u0084"+
		"B\u0000\u0316\u030b\u0001\u0000\u0000\u0000\u0316\u030f\u0001\u0000\u0000"+
		"\u0000\u0316\u0310\u0001\u0000\u0000\u0000\u0316\u0311\u0001\u0000\u0000"+
		"\u0000\u0316\u0315\u0001\u0000\u0000\u0000\u0317\u0083\u0001\u0000\u0000"+
		"\u0000\u0318\u031f\u0003\u0086C\u0000\u0319\u031f\u0003\u0088D\u0000\u031a"+
		"\u031f\u0003\u008aE\u0000\u031b\u031f\u0003\u008cF\u0000\u031c\u031f\u0003"+
		"\u008eG\u0000\u031d\u031f\u0003\u0090H\u0000\u031e\u0318\u0001\u0000\u0000"+
		"\u0000\u031e\u0319\u0001\u0000\u0000\u0000\u031e\u031a\u0001\u0000\u0000"+
		"\u0000\u031e\u031b\u0001\u0000\u0000\u0000\u031e\u031c\u0001\u0000\u0000"+
		"\u0000\u031e\u031d\u0001\u0000\u0000\u0000\u031f\u0085\u0001\u0000\u0000"+
		"\u0000\u0320\u0321\u00059\u0000\u0000\u0321\u0322\u0005`\u0000\u0000\u0322"+
		"\u0323\u0003v;\u0000\u0323\u0324\u0005f\u0000\u0000\u0324\u0327\u0003"+
		"v;\u0000\u0325\u0326\u0005f\u0000\u0000\u0326\u0328\u0003v;\u0000\u0327"+
		"\u0325\u0001\u0000\u0000\u0000\u0327\u0328\u0001\u0000\u0000\u0000\u0328"+
		"\u0329\u0001\u0000\u0000\u0000\u0329\u032a\u0005a\u0000\u0000\u032a\u0087"+
		"\u0001\u0000\u0000\u0000\u032b\u032c\u00058\u0000\u0000\u032c\u032d\u0005"+
		"`\u0000\u0000\u032d\u032e\u0005L\u0000\u0000\u032e\u032f\u0005f\u0000"+
		"\u0000\u032f\u0330\u0005L\u0000\u0000\u0330\u0331\u0005f\u0000\u0000\u0331"+
		"\u0332\u0003\u0092I\u0000\u0332\u0333\u0005f\u0000\u0000\u0333\u0336\u0005"+
		"K\u0000\u0000\u0334\u0335\u0005f\u0000\u0000\u0335\u0337\u0005K\u0000"+
		"\u0000\u0336\u0334\u0001\u0000\u0000\u0000\u0336\u0337\u0001\u0000\u0000"+
		"\u0000\u0337\u0338\u0001\u0000\u0000\u0000\u0338\u0339\u0005a\u0000\u0000"+
		"\u0339\u0089\u0001\u0000\u0000\u0000\u033a\u033b\u0005\f\u0000\u0000\u033b"+
		"\u033c\u0005`\u0000\u0000\u033c\u033d\u0003v;\u0000\u033d\u033e\u0005"+
		"f\u0000\u0000\u033e\u033f\u0003v;\u0000\u033f\u0340\u0005a\u0000\u0000"+
		"\u0340\u008b\u0001\u0000\u0000\u0000\u0341\u0342\u0005\u000b\u0000\u0000"+
		"\u0342\u0343\u0005`\u0000\u0000\u0343\u0344\u0003v;\u0000\u0344\u0345"+
		"\u0005f\u0000\u0000\u0345\u0346\u0003v;\u0000\u0346\u0347\u0005a\u0000"+
		"\u0000\u0347\u008d\u0001\u0000\u0000\u0000\u0348\u0349\u0005&\u0000\u0000"+
		"\u0349\u034a\u0005`\u0000\u0000\u034a\u034b\u0003v;\u0000\u034b\u034c"+
		"\u0005f\u0000\u0000\u034c\u034d\u0003v;\u0000\u034d\u034e\u0005a\u0000"+
		"\u0000\u034e\u008f\u0001\u0000\u0000\u0000\u034f\u0350\u0005\u0015\u0000"+
		"\u0000\u0350\u0351\u0005`\u0000\u0000\u0351\u0352\u0003v;\u0000\u0352"+
		"\u0353\u0005f\u0000\u0000\u0353\u0354\u0003v;\u0000\u0354\u0355\u0005"+
		"a\u0000\u0000\u0355\u0091\u0001\u0000\u0000\u0000\u0356\u0357\u0007\f"+
		"\u0000\u0000\u0357\u0093\u0001\u0000\u0000\u0000\u0358\u0359\u0007\r\u0000"+
		"\u0000\u0359\u0095\u0001\u0000\u0000\u0000\u035a\u035b\u0007\u000e\u0000"+
		"\u0000\u035b\u0097\u0001\u0000\u0000\u0000n\u009d\u00a3\u00a6\u00a9\u00b0"+
		"\u00b5\u00bd\u00c6\u00cb\u00d0\u00d4\u00df\u00e7\u00ec\u00fb\u00fe\u0106"+
		"\u010d\u0113\u011b\u0128\u0139\u0143\u0148\u014f\u0153\u0157\u015b\u015d"+
		"\u0163\u0167\u0170\u0173\u0177\u017e\u0183\u0187\u0189\u0193\u0199\u019d"+
		"\u01a2\u01a6\u01a9\u01ad\u01b2\u01bb\u01be\u01c4\u01c8\u01cd\u01d1\u01d5"+
		"\u01d9\u01db\u01df\u01e5\u01f2\u01f8\u01fe\u0204\u0207\u0210\u0213\u021a"+
		"\u0221\u0229\u022d\u0231\u0234\u023a\u023c\u0246\u024a\u024d\u0252\u0255"+
		"\u0257\u025b\u0265\u026a\u0271\u0274\u0278\u027b\u027e\u0284\u0289\u028d"+
		"\u0297\u02a1\u02ac\u02b2\u02b9\u02c0\u02c5\u02d2\u02d9\u02e1\u02e7\u02ec"+
		"\u02f0\u02f7\u02ff\u0309\u030d\u0316\u031e\u0327\u0336";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}