// Generated from /home/zeus/MDB/MillenniumDB-browser/src/grammar/gql/GQLParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link GQLParser}.
 */
public interface GQLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link GQLParser#root}.
	 * @param ctx the parse tree
	 */
	void enterRoot(GQLParser.RootContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#root}.
	 * @param ctx the parse tree
	 */
	void exitRoot(GQLParser.RootContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#gqlProgram}.
	 * @param ctx the parse tree
	 */
	void enterGqlProgram(GQLParser.GqlProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#gqlProgram}.
	 * @param ctx the parse tree
	 */
	void exitGqlProgram(GQLParser.GqlProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#programActivity}.
	 * @param ctx the parse tree
	 */
	void enterProgramActivity(GQLParser.ProgramActivityContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#programActivity}.
	 * @param ctx the parse tree
	 */
	void exitProgramActivity(GQLParser.ProgramActivityContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionActivity}.
	 * @param ctx the parse tree
	 */
	void enterSessionActivity(GQLParser.SessionActivityContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionActivity}.
	 * @param ctx the parse tree
	 */
	void exitSessionActivity(GQLParser.SessionActivityContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionActivityCommand}.
	 * @param ctx the parse tree
	 */
	void enterSessionActivityCommand(GQLParser.SessionActivityCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionActivityCommand}.
	 * @param ctx the parse tree
	 */
	void exitSessionActivityCommand(GQLParser.SessionActivityCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#transactionActivity}.
	 * @param ctx the parse tree
	 */
	void enterTransactionActivity(GQLParser.TransactionActivityContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#transactionActivity}.
	 * @param ctx the parse tree
	 */
	void exitTransactionActivity(GQLParser.TransactionActivityContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#endTransactionCommand}.
	 * @param ctx the parse tree
	 */
	void enterEndTransactionCommand(GQLParser.EndTransactionCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#endTransactionCommand}.
	 * @param ctx the parse tree
	 */
	void exitEndTransactionCommand(GQLParser.EndTransactionCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetCommand}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetCommand(GQLParser.SessionSetCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetCommand}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetCommand(GQLParser.SessionSetCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetSchemaClause}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetSchemaClause(GQLParser.SessionSetSchemaClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetSchemaClause}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetSchemaClause(GQLParser.SessionSetSchemaClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetGraphClause}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetGraphClause(GQLParser.SessionSetGraphClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetGraphClause}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetGraphClause(GQLParser.SessionSetGraphClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetTimeZoneClause}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetTimeZoneClause(GQLParser.SessionSetTimeZoneClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetTimeZoneClause}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetTimeZoneClause(GQLParser.SessionSetTimeZoneClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setTimeZoneValue}.
	 * @param ctx the parse tree
	 */
	void enterSetTimeZoneValue(GQLParser.SetTimeZoneValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setTimeZoneValue}.
	 * @param ctx the parse tree
	 */
	void exitSetTimeZoneValue(GQLParser.SetTimeZoneValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetParameterClause}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetParameterClause(GQLParser.SessionSetParameterClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetParameterClause}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetParameterClause(GQLParser.SessionSetParameterClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetGraphParameterClause}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetGraphParameterClause(GQLParser.SessionSetGraphParameterClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetGraphParameterClause}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetGraphParameterClause(GQLParser.SessionSetGraphParameterClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetBindingTableParameterClause}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetBindingTableParameterClause(GQLParser.SessionSetBindingTableParameterClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetBindingTableParameterClause}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetBindingTableParameterClause(GQLParser.SessionSetBindingTableParameterClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetValueParameterClause}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetValueParameterClause(GQLParser.SessionSetValueParameterClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetValueParameterClause}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetValueParameterClause(GQLParser.SessionSetValueParameterClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionSetParameterName}.
	 * @param ctx the parse tree
	 */
	void enterSessionSetParameterName(GQLParser.SessionSetParameterNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionSetParameterName}.
	 * @param ctx the parse tree
	 */
	void exitSessionSetParameterName(GQLParser.SessionSetParameterNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionResetCommand}.
	 * @param ctx the parse tree
	 */
	void enterSessionResetCommand(GQLParser.SessionResetCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionResetCommand}.
	 * @param ctx the parse tree
	 */
	void exitSessionResetCommand(GQLParser.SessionResetCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionResetArguments}.
	 * @param ctx the parse tree
	 */
	void enterSessionResetArguments(GQLParser.SessionResetArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionResetArguments}.
	 * @param ctx the parse tree
	 */
	void exitSessionResetArguments(GQLParser.SessionResetArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sessionCloseCommand}.
	 * @param ctx the parse tree
	 */
	void enterSessionCloseCommand(GQLParser.SessionCloseCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sessionCloseCommand}.
	 * @param ctx the parse tree
	 */
	void exitSessionCloseCommand(GQLParser.SessionCloseCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#startTransactionCommand}.
	 * @param ctx the parse tree
	 */
	void enterStartTransactionCommand(GQLParser.StartTransactionCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#startTransactionCommand}.
	 * @param ctx the parse tree
	 */
	void exitStartTransactionCommand(GQLParser.StartTransactionCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#transactionCharacteristics}.
	 * @param ctx the parse tree
	 */
	void enterTransactionCharacteristics(GQLParser.TransactionCharacteristicsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#transactionCharacteristics}.
	 * @param ctx the parse tree
	 */
	void exitTransactionCharacteristics(GQLParser.TransactionCharacteristicsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#transactionMode}.
	 * @param ctx the parse tree
	 */
	void enterTransactionMode(GQLParser.TransactionModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#transactionMode}.
	 * @param ctx the parse tree
	 */
	void exitTransactionMode(GQLParser.TransactionModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#transactionAccessMode}.
	 * @param ctx the parse tree
	 */
	void enterTransactionAccessMode(GQLParser.TransactionAccessModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#transactionAccessMode}.
	 * @param ctx the parse tree
	 */
	void exitTransactionAccessMode(GQLParser.TransactionAccessModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#implementationDefinedAccessMode}.
	 * @param ctx the parse tree
	 */
	void enterImplementationDefinedAccessMode(GQLParser.ImplementationDefinedAccessModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#implementationDefinedAccessMode}.
	 * @param ctx the parse tree
	 */
	void exitImplementationDefinedAccessMode(GQLParser.ImplementationDefinedAccessModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#rollbackCommand}.
	 * @param ctx the parse tree
	 */
	void enterRollbackCommand(GQLParser.RollbackCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#rollbackCommand}.
	 * @param ctx the parse tree
	 */
	void exitRollbackCommand(GQLParser.RollbackCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#commitCommand}.
	 * @param ctx the parse tree
	 */
	void enterCommitCommand(GQLParser.CommitCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#commitCommand}.
	 * @param ctx the parse tree
	 */
	void exitCommitCommand(GQLParser.CommitCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nestedProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void enterNestedProcedureSpecification(GQLParser.NestedProcedureSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nestedProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void exitNestedProcedureSpecification(GQLParser.NestedProcedureSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#procedureSpecification}.
	 * @param ctx the parse tree
	 */
	void enterProcedureSpecification(GQLParser.ProcedureSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#procedureSpecification}.
	 * @param ctx the parse tree
	 */
	void exitProcedureSpecification(GQLParser.ProcedureSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#catalogModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void enterCatalogModifyingProcedureSpecification(GQLParser.CatalogModifyingProcedureSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#catalogModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void exitCatalogModifyingProcedureSpecification(GQLParser.CatalogModifyingProcedureSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nestedDataModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void enterNestedDataModifyingProcedureSpecification(GQLParser.NestedDataModifyingProcedureSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nestedDataModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void exitNestedDataModifyingProcedureSpecification(GQLParser.NestedDataModifyingProcedureSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dataModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void enterDataModifyingProcedureSpecification(GQLParser.DataModifyingProcedureSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dataModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void exitDataModifyingProcedureSpecification(GQLParser.DataModifyingProcedureSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nestedQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void enterNestedQuerySpecification(GQLParser.NestedQuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nestedQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void exitNestedQuerySpecification(GQLParser.NestedQuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void enterQuerySpecification(GQLParser.QuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#querySpecification}.
	 * @param ctx the parse tree
	 */
	void exitQuerySpecification(GQLParser.QuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unsignedNumericLiteral}.
	 * @param ctx the parse tree
	 */
	void enterUnsignedNumericLiteral(GQLParser.UnsignedNumericLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unsignedNumericLiteral}.
	 * @param ctx the parse tree
	 */
	void exitUnsignedNumericLiteral(GQLParser.UnsignedNumericLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#integerLiteral}.
	 * @param ctx the parse tree
	 */
	void enterIntegerLiteral(GQLParser.IntegerLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#integerLiteral}.
	 * @param ctx the parse tree
	 */
	void exitIntegerLiteral(GQLParser.IntegerLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#floatLiteral}.
	 * @param ctx the parse tree
	 */
	void enterFloatLiteral(GQLParser.FloatLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#floatLiteral}.
	 * @param ctx the parse tree
	 */
	void exitFloatLiteral(GQLParser.FloatLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unbrokenSingleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void enterUnbrokenSingleQuotedCharacterSequence(GQLParser.UnbrokenSingleQuotedCharacterSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unbrokenSingleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void exitUnbrokenSingleQuotedCharacterSequence(GQLParser.UnbrokenSingleQuotedCharacterSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unbrokenDoubleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void enterUnbrokenDoubleQuotedCharacterSequence(GQLParser.UnbrokenDoubleQuotedCharacterSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unbrokenDoubleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void exitUnbrokenDoubleQuotedCharacterSequence(GQLParser.UnbrokenDoubleQuotedCharacterSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unbrokenAccentQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void enterUnbrokenAccentQuotedCharacterSequence(GQLParser.UnbrokenAccentQuotedCharacterSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unbrokenAccentQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void exitUnbrokenAccentQuotedCharacterSequence(GQLParser.UnbrokenAccentQuotedCharacterSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#singleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void enterSingleQuotedCharacterSequence(GQLParser.SingleQuotedCharacterSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#singleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void exitSingleQuotedCharacterSequence(GQLParser.SingleQuotedCharacterSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#doubleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void enterDoubleQuotedCharacterSequence(GQLParser.DoubleQuotedCharacterSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#doubleQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void exitDoubleQuotedCharacterSequence(GQLParser.DoubleQuotedCharacterSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#accentQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void enterAccentQuotedCharacterSequence(GQLParser.AccentQuotedCharacterSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#accentQuotedCharacterSequence}.
	 * @param ctx the parse tree
	 */
	void exitAccentQuotedCharacterSequence(GQLParser.AccentQuotedCharacterSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unbrokenCharacterStringLiteral}.
	 * @param ctx the parse tree
	 */
	void enterUnbrokenCharacterStringLiteral(GQLParser.UnbrokenCharacterStringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unbrokenCharacterStringLiteral}.
	 * @param ctx the parse tree
	 */
	void exitUnbrokenCharacterStringLiteral(GQLParser.UnbrokenCharacterStringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nullLiteral}.
	 * @param ctx the parse tree
	 */
	void enterNullLiteral(GQLParser.NullLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nullLiteral}.
	 * @param ctx the parse tree
	 */
	void exitNullLiteral(GQLParser.NullLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#temporalLiteral}.
	 * @param ctx the parse tree
	 */
	void enterTemporalLiteral(GQLParser.TemporalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#temporalLiteral}.
	 * @param ctx the parse tree
	 */
	void exitTemporalLiteral(GQLParser.TemporalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sqlDatetimeLiteral}.
	 * @param ctx the parse tree
	 */
	void enterSqlDatetimeLiteral(GQLParser.SqlDatetimeLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sqlDatetimeLiteral}.
	 * @param ctx the parse tree
	 */
	void exitSqlDatetimeLiteral(GQLParser.SqlDatetimeLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dateLiteral}.
	 * @param ctx the parse tree
	 */
	void enterDateLiteral(GQLParser.DateLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dateLiteral}.
	 * @param ctx the parse tree
	 */
	void exitDateLiteral(GQLParser.DateLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#timeLiteral}.
	 * @param ctx the parse tree
	 */
	void enterTimeLiteral(GQLParser.TimeLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#timeLiteral}.
	 * @param ctx the parse tree
	 */
	void exitTimeLiteral(GQLParser.TimeLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#datetimeLiteral}.
	 * @param ctx the parse tree
	 */
	void enterDatetimeLiteral(GQLParser.DatetimeLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#datetimeLiteral}.
	 * @param ctx the parse tree
	 */
	void exitDatetimeLiteral(GQLParser.DatetimeLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#durationLiteral}.
	 * @param ctx the parse tree
	 */
	void enterDurationLiteral(GQLParser.DurationLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#durationLiteral}.
	 * @param ctx the parse tree
	 */
	void exitDurationLiteral(GQLParser.DurationLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sqlIntervalLiteral}.
	 * @param ctx the parse tree
	 */
	void enterSqlIntervalLiteral(GQLParser.SqlIntervalLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sqlIntervalLiteral}.
	 * @param ctx the parse tree
	 */
	void exitSqlIntervalLiteral(GQLParser.SqlIntervalLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sqlIntervalType}.
	 * @param ctx the parse tree
	 */
	void enterSqlIntervalType(GQLParser.SqlIntervalTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sqlIntervalType}.
	 * @param ctx the parse tree
	 */
	void exitSqlIntervalType(GQLParser.SqlIntervalTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(GQLParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(GQLParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#delimitedIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterDelimitedIdentifier(GQLParser.DelimitedIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#delimitedIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitDelimitedIdentifier(GQLParser.DelimitedIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#objectName}.
	 * @param ctx the parse tree
	 */
	void enterObjectName(GQLParser.ObjectNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#objectName}.
	 * @param ctx the parse tree
	 */
	void exitObjectName(GQLParser.ObjectNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#objectNameOrBindingVariable}.
	 * @param ctx the parse tree
	 */
	void enterObjectNameOrBindingVariable(GQLParser.ObjectNameOrBindingVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#objectNameOrBindingVariable}.
	 * @param ctx the parse tree
	 */
	void exitObjectNameOrBindingVariable(GQLParser.ObjectNameOrBindingVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#directoryName}.
	 * @param ctx the parse tree
	 */
	void enterDirectoryName(GQLParser.DirectoryNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#directoryName}.
	 * @param ctx the parse tree
	 */
	void exitDirectoryName(GQLParser.DirectoryNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#schemaName}.
	 * @param ctx the parse tree
	 */
	void enterSchemaName(GQLParser.SchemaNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#schemaName}.
	 * @param ctx the parse tree
	 */
	void exitSchemaName(GQLParser.SchemaNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphName}.
	 * @param ctx the parse tree
	 */
	void enterGraphName(GQLParser.GraphNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphName}.
	 * @param ctx the parse tree
	 */
	void exitGraphName(GQLParser.GraphNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#delimitedGraphName}.
	 * @param ctx the parse tree
	 */
	void enterDelimitedGraphName(GQLParser.DelimitedGraphNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#delimitedGraphName}.
	 * @param ctx the parse tree
	 */
	void exitDelimitedGraphName(GQLParser.DelimitedGraphNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphTypeName}.
	 * @param ctx the parse tree
	 */
	void enterGraphTypeName(GQLParser.GraphTypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphTypeName}.
	 * @param ctx the parse tree
	 */
	void exitGraphTypeName(GQLParser.GraphTypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementTypeName}.
	 * @param ctx the parse tree
	 */
	void enterElementTypeName(GQLParser.ElementTypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementTypeName}.
	 * @param ctx the parse tree
	 */
	void exitElementTypeName(GQLParser.ElementTypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableName}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableName(GQLParser.BindingTableNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableName}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableName(GQLParser.BindingTableNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#delimitedBindingTableName}.
	 * @param ctx the parse tree
	 */
	void enterDelimitedBindingTableName(GQLParser.DelimitedBindingTableNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#delimitedBindingTableName}.
	 * @param ctx the parse tree
	 */
	void exitDelimitedBindingTableName(GQLParser.DelimitedBindingTableNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#procedureName}.
	 * @param ctx the parse tree
	 */
	void enterProcedureName(GQLParser.ProcedureNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#procedureName}.
	 * @param ctx the parse tree
	 */
	void exitProcedureName(GQLParser.ProcedureNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelName}.
	 * @param ctx the parse tree
	 */
	void enterLabelName(GQLParser.LabelNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelName}.
	 * @param ctx the parse tree
	 */
	void exitLabelName(GQLParser.LabelNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#functionName}.
	 * @param ctx the parse tree
	 */
	void enterFunctionName(GQLParser.FunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#functionName}.
	 * @param ctx the parse tree
	 */
	void exitFunctionName(GQLParser.FunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyName}.
	 * @param ctx the parse tree
	 */
	void enterPropertyName(GQLParser.PropertyNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyName}.
	 * @param ctx the parse tree
	 */
	void exitPropertyName(GQLParser.PropertyNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fieldName}.
	 * @param ctx the parse tree
	 */
	void enterFieldName(GQLParser.FieldNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fieldName}.
	 * @param ctx the parse tree
	 */
	void exitFieldName(GQLParser.FieldNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#parameterName}.
	 * @param ctx the parse tree
	 */
	void enterParameterName(GQLParser.ParameterNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#parameterName}.
	 * @param ctx the parse tree
	 */
	void exitParameterName(GQLParser.ParameterNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(GQLParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(GQLParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphVariable}.
	 * @param ctx the parse tree
	 */
	void enterGraphVariable(GQLParser.GraphVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphVariable}.
	 * @param ctx the parse tree
	 */
	void exitGraphVariable(GQLParser.GraphVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPatternVariable}.
	 * @param ctx the parse tree
	 */
	void enterGraphPatternVariable(GQLParser.GraphPatternVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPatternVariable}.
	 * @param ctx the parse tree
	 */
	void exitGraphPatternVariable(GQLParser.GraphPatternVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathOrSubpathVariable}.
	 * @param ctx the parse tree
	 */
	void enterPathOrSubpathVariable(GQLParser.PathOrSubpathVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathOrSubpathVariable}.
	 * @param ctx the parse tree
	 */
	void exitPathOrSubpathVariable(GQLParser.PathOrSubpathVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementVariable}.
	 * @param ctx the parse tree
	 */
	void enterElementVariable(GQLParser.ElementVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementVariable}.
	 * @param ctx the parse tree
	 */
	void exitElementVariable(GQLParser.ElementVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathVariable}.
	 * @param ctx the parse tree
	 */
	void enterPathVariable(GQLParser.PathVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathVariable}.
	 * @param ctx the parse tree
	 */
	void exitPathVariable(GQLParser.PathVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#subpathVariable}.
	 * @param ctx the parse tree
	 */
	void enterSubpathVariable(GQLParser.SubpathVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#subpathVariable}.
	 * @param ctx the parse tree
	 */
	void exitSubpathVariable(GQLParser.SubpathVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableVariable}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableVariable(GQLParser.BindingTableVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableVariable}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableVariable(GQLParser.BindingTableVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#valueVariable}.
	 * @param ctx the parse tree
	 */
	void enterValueVariable(GQLParser.ValueVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#valueVariable}.
	 * @param ctx the parse tree
	 */
	void exitValueVariable(GQLParser.ValueVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingVariable}.
	 * @param ctx the parse tree
	 */
	void enterBindingVariable(GQLParser.BindingVariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingVariable}.
	 * @param ctx the parse tree
	 */
	void exitBindingVariable(GQLParser.BindingVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#predefinedTypeLiteral}.
	 * @param ctx the parse tree
	 */
	void enterPredefinedTypeLiteral(GQLParser.PredefinedTypeLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#predefinedTypeLiteral}.
	 * @param ctx the parse tree
	 */
	void exitPredefinedTypeLiteral(GQLParser.PredefinedTypeLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#booleanLiteral}.
	 * @param ctx the parse tree
	 */
	void enterBooleanLiteral(GQLParser.BooleanLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#booleanLiteral}.
	 * @param ctx the parse tree
	 */
	void exitBooleanLiteral(GQLParser.BooleanLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#characterStringLiteral}.
	 * @param ctx the parse tree
	 */
	void enterCharacterStringLiteral(GQLParser.CharacterStringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#characterStringLiteral}.
	 * @param ctx the parse tree
	 */
	void exitCharacterStringLiteral(GQLParser.CharacterStringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#byteStringLiteral}.
	 * @param ctx the parse tree
	 */
	void enterByteStringLiteral(GQLParser.ByteStringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#byteStringLiteral}.
	 * @param ctx the parse tree
	 */
	void exitByteStringLiteral(GQLParser.ByteStringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#procedureBody}.
	 * @param ctx the parse tree
	 */
	void enterProcedureBody(GQLParser.ProcedureBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#procedureBody}.
	 * @param ctx the parse tree
	 */
	void exitProcedureBody(GQLParser.ProcedureBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingVariableDefinitionBlock}.
	 * @param ctx the parse tree
	 */
	void enterBindingVariableDefinitionBlock(GQLParser.BindingVariableDefinitionBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingVariableDefinitionBlock}.
	 * @param ctx the parse tree
	 */
	void exitBindingVariableDefinitionBlock(GQLParser.BindingVariableDefinitionBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void enterBindingVariableDefinition(GQLParser.BindingVariableDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void exitBindingVariableDefinition(GQLParser.BindingVariableDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#statementBlock}.
	 * @param ctx the parse tree
	 */
	void enterStatementBlock(GQLParser.StatementBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#statementBlock}.
	 * @param ctx the parse tree
	 */
	void exitStatementBlock(GQLParser.StatementBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(GQLParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(GQLParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nextStatement}.
	 * @param ctx the parse tree
	 */
	void enterNextStatement(GQLParser.NextStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nextStatement}.
	 * @param ctx the parse tree
	 */
	void exitNextStatement(GQLParser.NextStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void enterGraphVariableDefinition(GQLParser.GraphVariableDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void exitGraphVariableDefinition(GQLParser.GraphVariableDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#optTypedGraphInitializer}.
	 * @param ctx the parse tree
	 */
	void enterOptTypedGraphInitializer(GQLParser.OptTypedGraphInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#optTypedGraphInitializer}.
	 * @param ctx the parse tree
	 */
	void exitOptTypedGraphInitializer(GQLParser.OptTypedGraphInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphInitializer}.
	 * @param ctx the parse tree
	 */
	void enterGraphInitializer(GQLParser.GraphInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphInitializer}.
	 * @param ctx the parse tree
	 */
	void exitGraphInitializer(GQLParser.GraphInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableVariableDefinition(GQLParser.BindingTableVariableDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableVariableDefinition(GQLParser.BindingTableVariableDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#optTypedBindingTableInitializer}.
	 * @param ctx the parse tree
	 */
	void enterOptTypedBindingTableInitializer(GQLParser.OptTypedBindingTableInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#optTypedBindingTableInitializer}.
	 * @param ctx the parse tree
	 */
	void exitOptTypedBindingTableInitializer(GQLParser.OptTypedBindingTableInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableInitializer}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableInitializer(GQLParser.BindingTableInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableInitializer}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableInitializer(GQLParser.BindingTableInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#valueVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void enterValueVariableDefinition(GQLParser.ValueVariableDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#valueVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void exitValueVariableDefinition(GQLParser.ValueVariableDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#optTypedValueInitializer}.
	 * @param ctx the parse tree
	 */
	void enterOptTypedValueInitializer(GQLParser.OptTypedValueInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#optTypedValueInitializer}.
	 * @param ctx the parse tree
	 */
	void exitOptTypedValueInitializer(GQLParser.OptTypedValueInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphExpression}.
	 * @param ctx the parse tree
	 */
	void enterGraphExpression(GQLParser.GraphExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphExpression}.
	 * @param ctx the parse tree
	 */
	void exitGraphExpression(GQLParser.GraphExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#currentGraph}.
	 * @param ctx the parse tree
	 */
	void enterCurrentGraph(GQLParser.CurrentGraphContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#currentGraph}.
	 * @param ctx the parse tree
	 */
	void exitCurrentGraph(GQLParser.CurrentGraphContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nestedGraphQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void enterNestedGraphQuerySpecification(GQLParser.NestedGraphQuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nestedGraphQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void exitNestedGraphQuerySpecification(GQLParser.NestedGraphQuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableExpression}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableExpression(GQLParser.BindingTableExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableExpression}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableExpression(GQLParser.BindingTableExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nestedBindingTableQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void enterNestedBindingTableQuerySpecification(GQLParser.NestedBindingTableQuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nestedBindingTableQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void exitNestedBindingTableQuerySpecification(GQLParser.NestedBindingTableQuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#objectExpressionPrimary}.
	 * @param ctx the parse tree
	 */
	void enterObjectExpressionPrimary(GQLParser.ObjectExpressionPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#objectExpressionPrimary}.
	 * @param ctx the parse tree
	 */
	void exitObjectExpressionPrimary(GQLParser.ObjectExpressionPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#linearCatalogModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterLinearCatalogModifyingStatement(GQLParser.LinearCatalogModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#linearCatalogModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitLinearCatalogModifyingStatement(GQLParser.LinearCatalogModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleCatalogModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleCatalogModifyingStatement(GQLParser.SimpleCatalogModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleCatalogModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleCatalogModifyingStatement(GQLParser.SimpleCatalogModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#primitiveCatalogModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveCatalogModifyingStatement(GQLParser.PrimitiveCatalogModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#primitiveCatalogModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveCatalogModifyingStatement(GQLParser.PrimitiveCatalogModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#createSchemaStatement}.
	 * @param ctx the parse tree
	 */
	void enterCreateSchemaStatement(GQLParser.CreateSchemaStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#createSchemaStatement}.
	 * @param ctx the parse tree
	 */
	void exitCreateSchemaStatement(GQLParser.CreateSchemaStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dropSchemaStatement}.
	 * @param ctx the parse tree
	 */
	void enterDropSchemaStatement(GQLParser.DropSchemaStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dropSchemaStatement}.
	 * @param ctx the parse tree
	 */
	void exitDropSchemaStatement(GQLParser.DropSchemaStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#createGraphStatement}.
	 * @param ctx the parse tree
	 */
	void enterCreateGraphStatement(GQLParser.CreateGraphStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#createGraphStatement}.
	 * @param ctx the parse tree
	 */
	void exitCreateGraphStatement(GQLParser.CreateGraphStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#openGraphType}.
	 * @param ctx the parse tree
	 */
	void enterOpenGraphType(GQLParser.OpenGraphTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#openGraphType}.
	 * @param ctx the parse tree
	 */
	void exitOpenGraphType(GQLParser.OpenGraphTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#ofGraphType}.
	 * @param ctx the parse tree
	 */
	void enterOfGraphType(GQLParser.OfGraphTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#ofGraphType}.
	 * @param ctx the parse tree
	 */
	void exitOfGraphType(GQLParser.OfGraphTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphTypeLikeGraph}.
	 * @param ctx the parse tree
	 */
	void enterGraphTypeLikeGraph(GQLParser.GraphTypeLikeGraphContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphTypeLikeGraph}.
	 * @param ctx the parse tree
	 */
	void exitGraphTypeLikeGraph(GQLParser.GraphTypeLikeGraphContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphSource}.
	 * @param ctx the parse tree
	 */
	void enterGraphSource(GQLParser.GraphSourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphSource}.
	 * @param ctx the parse tree
	 */
	void exitGraphSource(GQLParser.GraphSourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dropGraphStatement}.
	 * @param ctx the parse tree
	 */
	void enterDropGraphStatement(GQLParser.DropGraphStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dropGraphStatement}.
	 * @param ctx the parse tree
	 */
	void exitDropGraphStatement(GQLParser.DropGraphStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#createGraphTypeStatement}.
	 * @param ctx the parse tree
	 */
	void enterCreateGraphTypeStatement(GQLParser.CreateGraphTypeStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#createGraphTypeStatement}.
	 * @param ctx the parse tree
	 */
	void exitCreateGraphTypeStatement(GQLParser.CreateGraphTypeStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphTypeSource}.
	 * @param ctx the parse tree
	 */
	void enterGraphTypeSource(GQLParser.GraphTypeSourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphTypeSource}.
	 * @param ctx the parse tree
	 */
	void exitGraphTypeSource(GQLParser.GraphTypeSourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#copyOfGraphType}.
	 * @param ctx the parse tree
	 */
	void enterCopyOfGraphType(GQLParser.CopyOfGraphTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#copyOfGraphType}.
	 * @param ctx the parse tree
	 */
	void exitCopyOfGraphType(GQLParser.CopyOfGraphTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dropGraphTypeStatement}.
	 * @param ctx the parse tree
	 */
	void enterDropGraphTypeStatement(GQLParser.DropGraphTypeStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dropGraphTypeStatement}.
	 * @param ctx the parse tree
	 */
	void exitDropGraphTypeStatement(GQLParser.DropGraphTypeStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#callCatalogModifyingProcedureStatement}.
	 * @param ctx the parse tree
	 */
	void enterCallCatalogModifyingProcedureStatement(GQLParser.CallCatalogModifyingProcedureStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#callCatalogModifyingProcedureStatement}.
	 * @param ctx the parse tree
	 */
	void exitCallCatalogModifyingProcedureStatement(GQLParser.CallCatalogModifyingProcedureStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#linearDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterLinearDataModifyingStatement(GQLParser.LinearDataModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#linearDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitLinearDataModifyingStatement(GQLParser.LinearDataModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedLinearDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterFocusedLinearDataModifyingStatement(GQLParser.FocusedLinearDataModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedLinearDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitFocusedLinearDataModifyingStatement(GQLParser.FocusedLinearDataModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedLinearDataModifyingStatementBody}.
	 * @param ctx the parse tree
	 */
	void enterFocusedLinearDataModifyingStatementBody(GQLParser.FocusedLinearDataModifyingStatementBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedLinearDataModifyingStatementBody}.
	 * @param ctx the parse tree
	 */
	void exitFocusedLinearDataModifyingStatementBody(GQLParser.FocusedLinearDataModifyingStatementBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedNestedDataModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void enterFocusedNestedDataModifyingProcedureSpecification(GQLParser.FocusedNestedDataModifyingProcedureSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedNestedDataModifyingProcedureSpecification}.
	 * @param ctx the parse tree
	 */
	void exitFocusedNestedDataModifyingProcedureSpecification(GQLParser.FocusedNestedDataModifyingProcedureSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#ambientLinearDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterAmbientLinearDataModifyingStatement(GQLParser.AmbientLinearDataModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#ambientLinearDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitAmbientLinearDataModifyingStatement(GQLParser.AmbientLinearDataModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#ambientLinearDataModifyingStatementBody}.
	 * @param ctx the parse tree
	 */
	void enterAmbientLinearDataModifyingStatementBody(GQLParser.AmbientLinearDataModifyingStatementBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#ambientLinearDataModifyingStatementBody}.
	 * @param ctx the parse tree
	 */
	void exitAmbientLinearDataModifyingStatementBody(GQLParser.AmbientLinearDataModifyingStatementBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleLinearDataAccessingStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleLinearDataAccessingStatement(GQLParser.SimpleLinearDataAccessingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleLinearDataAccessingStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleLinearDataAccessingStatement(GQLParser.SimpleLinearDataAccessingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleDataAccessingStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleDataAccessingStatement(GQLParser.SimpleDataAccessingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleDataAccessingStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleDataAccessingStatement(GQLParser.SimpleDataAccessingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleDataModifyingStatement(GQLParser.SimpleDataModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleDataModifyingStatement(GQLParser.SimpleDataModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#primitiveDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveDataModifyingStatement(GQLParser.PrimitiveDataModifyingStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#primitiveDataModifyingStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveDataModifyingStatement(GQLParser.PrimitiveDataModifyingStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertStatement}.
	 * @param ctx the parse tree
	 */
	void enterInsertStatement(GQLParser.InsertStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertStatement}.
	 * @param ctx the parse tree
	 */
	void exitInsertStatement(GQLParser.InsertStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setStatement}.
	 * @param ctx the parse tree
	 */
	void enterSetStatement(GQLParser.SetStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setStatement}.
	 * @param ctx the parse tree
	 */
	void exitSetStatement(GQLParser.SetStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setItemList}.
	 * @param ctx the parse tree
	 */
	void enterSetItemList(GQLParser.SetItemListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setItemList}.
	 * @param ctx the parse tree
	 */
	void exitSetItemList(GQLParser.SetItemListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setItem}.
	 * @param ctx the parse tree
	 */
	void enterSetItem(GQLParser.SetItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setItem}.
	 * @param ctx the parse tree
	 */
	void exitSetItem(GQLParser.SetItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setPropertyItem}.
	 * @param ctx the parse tree
	 */
	void enterSetPropertyItem(GQLParser.SetPropertyItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setPropertyItem}.
	 * @param ctx the parse tree
	 */
	void exitSetPropertyItem(GQLParser.SetPropertyItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setAllPropertiesItem}.
	 * @param ctx the parse tree
	 */
	void enterSetAllPropertiesItem(GQLParser.SetAllPropertiesItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setAllPropertiesItem}.
	 * @param ctx the parse tree
	 */
	void exitSetAllPropertiesItem(GQLParser.SetAllPropertiesItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setLabelItem}.
	 * @param ctx the parse tree
	 */
	void enterSetLabelItem(GQLParser.SetLabelItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setLabelItem}.
	 * @param ctx the parse tree
	 */
	void exitSetLabelItem(GQLParser.SetLabelItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelSetSpecification}.
	 * @param ctx the parse tree
	 */
	void enterLabelSetSpecification(GQLParser.LabelSetSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelSetSpecification}.
	 * @param ctx the parse tree
	 */
	void exitLabelSetSpecification(GQLParser.LabelSetSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#removeStatement}.
	 * @param ctx the parse tree
	 */
	void enterRemoveStatement(GQLParser.RemoveStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#removeStatement}.
	 * @param ctx the parse tree
	 */
	void exitRemoveStatement(GQLParser.RemoveStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#removeItemList}.
	 * @param ctx the parse tree
	 */
	void enterRemoveItemList(GQLParser.RemoveItemListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#removeItemList}.
	 * @param ctx the parse tree
	 */
	void exitRemoveItemList(GQLParser.RemoveItemListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#removeItem}.
	 * @param ctx the parse tree
	 */
	void enterRemoveItem(GQLParser.RemoveItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#removeItem}.
	 * @param ctx the parse tree
	 */
	void exitRemoveItem(GQLParser.RemoveItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#removePropertyItem}.
	 * @param ctx the parse tree
	 */
	void enterRemovePropertyItem(GQLParser.RemovePropertyItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#removePropertyItem}.
	 * @param ctx the parse tree
	 */
	void exitRemovePropertyItem(GQLParser.RemovePropertyItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#removeLabelItem}.
	 * @param ctx the parse tree
	 */
	void enterRemoveLabelItem(GQLParser.RemoveLabelItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#removeLabelItem}.
	 * @param ctx the parse tree
	 */
	void exitRemoveLabelItem(GQLParser.RemoveLabelItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#deleteStatement}.
	 * @param ctx the parse tree
	 */
	void enterDeleteStatement(GQLParser.DeleteStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#deleteStatement}.
	 * @param ctx the parse tree
	 */
	void exitDeleteStatement(GQLParser.DeleteStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#deleteItemList}.
	 * @param ctx the parse tree
	 */
	void enterDeleteItemList(GQLParser.DeleteItemListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#deleteItemList}.
	 * @param ctx the parse tree
	 */
	void exitDeleteItemList(GQLParser.DeleteItemListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#deleteItem}.
	 * @param ctx the parse tree
	 */
	void enterDeleteItem(GQLParser.DeleteItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#deleteItem}.
	 * @param ctx the parse tree
	 */
	void exitDeleteItem(GQLParser.DeleteItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#callDataModifyingProcedureStatement}.
	 * @param ctx the parse tree
	 */
	void enterCallDataModifyingProcedureStatement(GQLParser.CallDataModifyingProcedureStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#callDataModifyingProcedureStatement}.
	 * @param ctx the parse tree
	 */
	void exitCallDataModifyingProcedureStatement(GQLParser.CallDataModifyingProcedureStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#compositeQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterCompositeQueryStatement(GQLParser.CompositeQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#compositeQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitCompositeQueryStatement(GQLParser.CompositeQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#compositeQueryExpression}.
	 * @param ctx the parse tree
	 */
	void enterCompositeQueryExpression(GQLParser.CompositeQueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#compositeQueryExpression}.
	 * @param ctx the parse tree
	 */
	void exitCompositeQueryExpression(GQLParser.CompositeQueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#queryConjunction}.
	 * @param ctx the parse tree
	 */
	void enterQueryConjunction(GQLParser.QueryConjunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#queryConjunction}.
	 * @param ctx the parse tree
	 */
	void exitQueryConjunction(GQLParser.QueryConjunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setOperator}.
	 * @param ctx the parse tree
	 */
	void enterSetOperator(GQLParser.SetOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setOperator}.
	 * @param ctx the parse tree
	 */
	void exitSetOperator(GQLParser.SetOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#compositeQueryPrimary}.
	 * @param ctx the parse tree
	 */
	void enterCompositeQueryPrimary(GQLParser.CompositeQueryPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#compositeQueryPrimary}.
	 * @param ctx the parse tree
	 */
	void exitCompositeQueryPrimary(GQLParser.CompositeQueryPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#linearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterLinearQueryStatement(GQLParser.LinearQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#linearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitLinearQueryStatement(GQLParser.LinearQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedLinearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterFocusedLinearQueryStatement(GQLParser.FocusedLinearQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedLinearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitFocusedLinearQueryStatement(GQLParser.FocusedLinearQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedLinearQueryStatementPart}.
	 * @param ctx the parse tree
	 */
	void enterFocusedLinearQueryStatementPart(GQLParser.FocusedLinearQueryStatementPartContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedLinearQueryStatementPart}.
	 * @param ctx the parse tree
	 */
	void exitFocusedLinearQueryStatementPart(GQLParser.FocusedLinearQueryStatementPartContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedLinearQueryAndPrimitiveResultStatementPart}.
	 * @param ctx the parse tree
	 */
	void enterFocusedLinearQueryAndPrimitiveResultStatementPart(GQLParser.FocusedLinearQueryAndPrimitiveResultStatementPartContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedLinearQueryAndPrimitiveResultStatementPart}.
	 * @param ctx the parse tree
	 */
	void exitFocusedLinearQueryAndPrimitiveResultStatementPart(GQLParser.FocusedLinearQueryAndPrimitiveResultStatementPartContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedPrimitiveResultStatement}.
	 * @param ctx the parse tree
	 */
	void enterFocusedPrimitiveResultStatement(GQLParser.FocusedPrimitiveResultStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedPrimitiveResultStatement}.
	 * @param ctx the parse tree
	 */
	void exitFocusedPrimitiveResultStatement(GQLParser.FocusedPrimitiveResultStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#focusedNestedQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void enterFocusedNestedQuerySpecification(GQLParser.FocusedNestedQuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#focusedNestedQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void exitFocusedNestedQuerySpecification(GQLParser.FocusedNestedQuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#ambientLinearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterAmbientLinearQueryStatement(GQLParser.AmbientLinearQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#ambientLinearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitAmbientLinearQueryStatement(GQLParser.AmbientLinearQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleLinearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleLinearQueryStatement(GQLParser.SimpleLinearQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleLinearQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleLinearQueryStatement(GQLParser.SimpleLinearQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleQueryStatement(GQLParser.SimpleQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleQueryStatement(GQLParser.SimpleQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#primitiveQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveQueryStatement(GQLParser.PrimitiveQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#primitiveQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveQueryStatement(GQLParser.PrimitiveQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#matchStatement}.
	 * @param ctx the parse tree
	 */
	void enterMatchStatement(GQLParser.MatchStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#matchStatement}.
	 * @param ctx the parse tree
	 */
	void exitMatchStatement(GQLParser.MatchStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleMatchStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleMatchStatement(GQLParser.SimpleMatchStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleMatchStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleMatchStatement(GQLParser.SimpleMatchStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#optionalMatchStatement}.
	 * @param ctx the parse tree
	 */
	void enterOptionalMatchStatement(GQLParser.OptionalMatchStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#optionalMatchStatement}.
	 * @param ctx the parse tree
	 */
	void exitOptionalMatchStatement(GQLParser.OptionalMatchStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#optionalOperand}.
	 * @param ctx the parse tree
	 */
	void enterOptionalOperand(GQLParser.OptionalOperandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#optionalOperand}.
	 * @param ctx the parse tree
	 */
	void exitOptionalOperand(GQLParser.OptionalOperandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#matchStatementBlock}.
	 * @param ctx the parse tree
	 */
	void enterMatchStatementBlock(GQLParser.MatchStatementBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#matchStatementBlock}.
	 * @param ctx the parse tree
	 */
	void exitMatchStatementBlock(GQLParser.MatchStatementBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#callQueryStatement}.
	 * @param ctx the parse tree
	 */
	void enterCallQueryStatement(GQLParser.CallQueryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#callQueryStatement}.
	 * @param ctx the parse tree
	 */
	void exitCallQueryStatement(GQLParser.CallQueryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#filterStatement}.
	 * @param ctx the parse tree
	 */
	void enterFilterStatement(GQLParser.FilterStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#filterStatement}.
	 * @param ctx the parse tree
	 */
	void exitFilterStatement(GQLParser.FilterStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#letStatement}.
	 * @param ctx the parse tree
	 */
	void enterLetStatement(GQLParser.LetStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#letStatement}.
	 * @param ctx the parse tree
	 */
	void exitLetStatement(GQLParser.LetStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#letVariableDefinitionList}.
	 * @param ctx the parse tree
	 */
	void enterLetVariableDefinitionList(GQLParser.LetVariableDefinitionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#letVariableDefinitionList}.
	 * @param ctx the parse tree
	 */
	void exitLetVariableDefinitionList(GQLParser.LetVariableDefinitionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#letVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void enterLetVariableDefinition(GQLParser.LetVariableDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#letVariableDefinition}.
	 * @param ctx the parse tree
	 */
	void exitLetVariableDefinition(GQLParser.LetVariableDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(GQLParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(GQLParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#forItem}.
	 * @param ctx the parse tree
	 */
	void enterForItem(GQLParser.ForItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#forItem}.
	 * @param ctx the parse tree
	 */
	void exitForItem(GQLParser.ForItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#forItemAlias}.
	 * @param ctx the parse tree
	 */
	void enterForItemAlias(GQLParser.ForItemAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#forItemAlias}.
	 * @param ctx the parse tree
	 */
	void exitForItemAlias(GQLParser.ForItemAliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#forOrdinalityOrOffset}.
	 * @param ctx the parse tree
	 */
	void enterForOrdinalityOrOffset(GQLParser.ForOrdinalityOrOffsetContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#forOrdinalityOrOffset}.
	 * @param ctx the parse tree
	 */
	void exitForOrdinalityOrOffset(GQLParser.ForOrdinalityOrOffsetContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#orderByAndPageStatement}.
	 * @param ctx the parse tree
	 */
	void enterOrderByAndPageStatement(GQLParser.OrderByAndPageStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#orderByAndPageStatement}.
	 * @param ctx the parse tree
	 */
	void exitOrderByAndPageStatement(GQLParser.OrderByAndPageStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#primitiveResultStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveResultStatement(GQLParser.PrimitiveResultStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#primitiveResultStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveResultStatement(GQLParser.PrimitiveResultStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(GQLParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(GQLParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#returnStatementBody}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatementBody(GQLParser.ReturnStatementBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#returnStatementBody}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatementBody(GQLParser.ReturnStatementBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#returnItemList}.
	 * @param ctx the parse tree
	 */
	void enterReturnItemList(GQLParser.ReturnItemListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#returnItemList}.
	 * @param ctx the parse tree
	 */
	void exitReturnItemList(GQLParser.ReturnItemListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#returnItem}.
	 * @param ctx the parse tree
	 */
	void enterReturnItem(GQLParser.ReturnItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#returnItem}.
	 * @param ctx the parse tree
	 */
	void exitReturnItem(GQLParser.ReturnItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#returnItemAlias}.
	 * @param ctx the parse tree
	 */
	void enterReturnItemAlias(GQLParser.ReturnItemAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#returnItemAlias}.
	 * @param ctx the parse tree
	 */
	void exitReturnItemAlias(GQLParser.ReturnItemAliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectStatement}.
	 * @param ctx the parse tree
	 */
	void enterSelectStatement(GQLParser.SelectStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectStatement}.
	 * @param ctx the parse tree
	 */
	void exitSelectStatement(GQLParser.SelectStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectItemList}.
	 * @param ctx the parse tree
	 */
	void enterSelectItemList(GQLParser.SelectItemListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectItemList}.
	 * @param ctx the parse tree
	 */
	void exitSelectItemList(GQLParser.SelectItemListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectItem}.
	 * @param ctx the parse tree
	 */
	void enterSelectItem(GQLParser.SelectItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectItem}.
	 * @param ctx the parse tree
	 */
	void exitSelectItem(GQLParser.SelectItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectItemAlias}.
	 * @param ctx the parse tree
	 */
	void enterSelectItemAlias(GQLParser.SelectItemAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectItemAlias}.
	 * @param ctx the parse tree
	 */
	void exitSelectItemAlias(GQLParser.SelectItemAliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#havingClause}.
	 * @param ctx the parse tree
	 */
	void enterHavingClause(GQLParser.HavingClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#havingClause}.
	 * @param ctx the parse tree
	 */
	void exitHavingClause(GQLParser.HavingClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectStatementBody}.
	 * @param ctx the parse tree
	 */
	void enterSelectStatementBody(GQLParser.SelectStatementBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectStatementBody}.
	 * @param ctx the parse tree
	 */
	void exitSelectStatementBody(GQLParser.SelectStatementBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectGraphMatchList}.
	 * @param ctx the parse tree
	 */
	void enterSelectGraphMatchList(GQLParser.SelectGraphMatchListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectGraphMatchList}.
	 * @param ctx the parse tree
	 */
	void exitSelectGraphMatchList(GQLParser.SelectGraphMatchListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectGraphMatch}.
	 * @param ctx the parse tree
	 */
	void enterSelectGraphMatch(GQLParser.SelectGraphMatchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectGraphMatch}.
	 * @param ctx the parse tree
	 */
	void exitSelectGraphMatch(GQLParser.SelectGraphMatchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#selectQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void enterSelectQuerySpecification(GQLParser.SelectQuerySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#selectQuerySpecification}.
	 * @param ctx the parse tree
	 */
	void exitSelectQuerySpecification(GQLParser.SelectQuerySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#callProcedureStatement}.
	 * @param ctx the parse tree
	 */
	void enterCallProcedureStatement(GQLParser.CallProcedureStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#callProcedureStatement}.
	 * @param ctx the parse tree
	 */
	void exitCallProcedureStatement(GQLParser.CallProcedureStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#procedureCall}.
	 * @param ctx the parse tree
	 */
	void enterProcedureCall(GQLParser.ProcedureCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#procedureCall}.
	 * @param ctx the parse tree
	 */
	void exitProcedureCall(GQLParser.ProcedureCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#inlineProcedureCall}.
	 * @param ctx the parse tree
	 */
	void enterInlineProcedureCall(GQLParser.InlineProcedureCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#inlineProcedureCall}.
	 * @param ctx the parse tree
	 */
	void exitInlineProcedureCall(GQLParser.InlineProcedureCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#variableScopeClause}.
	 * @param ctx the parse tree
	 */
	void enterVariableScopeClause(GQLParser.VariableScopeClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#variableScopeClause}.
	 * @param ctx the parse tree
	 */
	void exitVariableScopeClause(GQLParser.VariableScopeClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingVariableReferenceList}.
	 * @param ctx the parse tree
	 */
	void enterBindingVariableReferenceList(GQLParser.BindingVariableReferenceListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingVariableReferenceList}.
	 * @param ctx the parse tree
	 */
	void exitBindingVariableReferenceList(GQLParser.BindingVariableReferenceListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#namedProcedureCall}.
	 * @param ctx the parse tree
	 */
	void enterNamedProcedureCall(GQLParser.NamedProcedureCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#namedProcedureCall}.
	 * @param ctx the parse tree
	 */
	void exitNamedProcedureCall(GQLParser.NamedProcedureCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#procedureArgumentList}.
	 * @param ctx the parse tree
	 */
	void enterProcedureArgumentList(GQLParser.ProcedureArgumentListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#procedureArgumentList}.
	 * @param ctx the parse tree
	 */
	void exitProcedureArgumentList(GQLParser.ProcedureArgumentListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#procedureArgument}.
	 * @param ctx the parse tree
	 */
	void enterProcedureArgument(GQLParser.ProcedureArgumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#procedureArgument}.
	 * @param ctx the parse tree
	 */
	void exitProcedureArgument(GQLParser.ProcedureArgumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#useGraphClause}.
	 * @param ctx the parse tree
	 */
	void enterUseGraphClause(GQLParser.UseGraphClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#useGraphClause}.
	 * @param ctx the parse tree
	 */
	void exitUseGraphClause(GQLParser.UseGraphClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#atSchemaClause}.
	 * @param ctx the parse tree
	 */
	void enterAtSchemaClause(GQLParser.AtSchemaClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#atSchemaClause}.
	 * @param ctx the parse tree
	 */
	void exitAtSchemaClause(GQLParser.AtSchemaClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingVariableReference}.
	 * @param ctx the parse tree
	 */
	void enterBindingVariableReference(GQLParser.BindingVariableReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingVariableReference}.
	 * @param ctx the parse tree
	 */
	void exitBindingVariableReference(GQLParser.BindingVariableReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementVariableReference}.
	 * @param ctx the parse tree
	 */
	void enterElementVariableReference(GQLParser.ElementVariableReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementVariableReference}.
	 * @param ctx the parse tree
	 */
	void exitElementVariableReference(GQLParser.ElementVariableReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathVariableReference}.
	 * @param ctx the parse tree
	 */
	void enterPathVariableReference(GQLParser.PathVariableReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathVariableReference}.
	 * @param ctx the parse tree
	 */
	void exitPathVariableReference(GQLParser.PathVariableReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(GQLParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(GQLParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPatternBindingTable}.
	 * @param ctx the parse tree
	 */
	void enterGraphPatternBindingTable(GQLParser.GraphPatternBindingTableContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPatternBindingTable}.
	 * @param ctx the parse tree
	 */
	void exitGraphPatternBindingTable(GQLParser.GraphPatternBindingTableContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPatternYieldClause}.
	 * @param ctx the parse tree
	 */
	void enterGraphPatternYieldClause(GQLParser.GraphPatternYieldClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPatternYieldClause}.
	 * @param ctx the parse tree
	 */
	void exitGraphPatternYieldClause(GQLParser.GraphPatternYieldClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPatternYieldItemList}.
	 * @param ctx the parse tree
	 */
	void enterGraphPatternYieldItemList(GQLParser.GraphPatternYieldItemListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPatternYieldItemList}.
	 * @param ctx the parse tree
	 */
	void exitGraphPatternYieldItemList(GQLParser.GraphPatternYieldItemListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPatternYieldItem}.
	 * @param ctx the parse tree
	 */
	void enterGraphPatternYieldItem(GQLParser.GraphPatternYieldItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPatternYieldItem}.
	 * @param ctx the parse tree
	 */
	void exitGraphPatternYieldItem(GQLParser.GraphPatternYieldItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPattern}.
	 * @param ctx the parse tree
	 */
	void enterGraphPattern(GQLParser.GraphPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPattern}.
	 * @param ctx the parse tree
	 */
	void exitGraphPattern(GQLParser.GraphPatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#matchMode}.
	 * @param ctx the parse tree
	 */
	void enterMatchMode(GQLParser.MatchModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#matchMode}.
	 * @param ctx the parse tree
	 */
	void exitMatchMode(GQLParser.MatchModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#repeatableElementsMatchMode}.
	 * @param ctx the parse tree
	 */
	void enterRepeatableElementsMatchMode(GQLParser.RepeatableElementsMatchModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#repeatableElementsMatchMode}.
	 * @param ctx the parse tree
	 */
	void exitRepeatableElementsMatchMode(GQLParser.RepeatableElementsMatchModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#differentEdgesMatchMode}.
	 * @param ctx the parse tree
	 */
	void enterDifferentEdgesMatchMode(GQLParser.DifferentEdgesMatchModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#differentEdgesMatchMode}.
	 * @param ctx the parse tree
	 */
	void exitDifferentEdgesMatchMode(GQLParser.DifferentEdgesMatchModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementBindingsOrElements}.
	 * @param ctx the parse tree
	 */
	void enterElementBindingsOrElements(GQLParser.ElementBindingsOrElementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementBindingsOrElements}.
	 * @param ctx the parse tree
	 */
	void exitElementBindingsOrElements(GQLParser.ElementBindingsOrElementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeBindingsOrEdges}.
	 * @param ctx the parse tree
	 */
	void enterEdgeBindingsOrEdges(GQLParser.EdgeBindingsOrEdgesContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeBindingsOrEdges}.
	 * @param ctx the parse tree
	 */
	void exitEdgeBindingsOrEdges(GQLParser.EdgeBindingsOrEdgesContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathPatternList}.
	 * @param ctx the parse tree
	 */
	void enterPathPatternList(GQLParser.PathPatternListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathPatternList}.
	 * @param ctx the parse tree
	 */
	void exitPathPatternList(GQLParser.PathPatternListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathPattern}.
	 * @param ctx the parse tree
	 */
	void enterPathPattern(GQLParser.PathPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathPattern}.
	 * @param ctx the parse tree
	 */
	void exitPathPattern(GQLParser.PathPatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterPathVariableDeclaration(GQLParser.PathVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitPathVariableDeclaration(GQLParser.PathVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#keepClause}.
	 * @param ctx the parse tree
	 */
	void enterKeepClause(GQLParser.KeepClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#keepClause}.
	 * @param ctx the parse tree
	 */
	void exitKeepClause(GQLParser.KeepClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPatternWhereClause}.
	 * @param ctx the parse tree
	 */
	void enterGraphPatternWhereClause(GQLParser.GraphPatternWhereClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPatternWhereClause}.
	 * @param ctx the parse tree
	 */
	void exitGraphPatternWhereClause(GQLParser.GraphPatternWhereClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathPatternPrefix}.
	 * @param ctx the parse tree
	 */
	void enterPathPatternPrefix(GQLParser.PathPatternPrefixContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathPatternPrefix}.
	 * @param ctx the parse tree
	 */
	void exitPathPatternPrefix(GQLParser.PathPatternPrefixContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathModePrefix}.
	 * @param ctx the parse tree
	 */
	void enterPathModePrefix(GQLParser.PathModePrefixContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathModePrefix}.
	 * @param ctx the parse tree
	 */
	void exitPathModePrefix(GQLParser.PathModePrefixContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathMode}.
	 * @param ctx the parse tree
	 */
	void enterPathMode(GQLParser.PathModeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathMode}.
	 * @param ctx the parse tree
	 */
	void exitPathMode(GQLParser.PathModeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathSearchPrefix}.
	 * @param ctx the parse tree
	 */
	void enterPathSearchPrefix(GQLParser.PathSearchPrefixContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathSearchPrefix}.
	 * @param ctx the parse tree
	 */
	void exitPathSearchPrefix(GQLParser.PathSearchPrefixContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#allPathSearch}.
	 * @param ctx the parse tree
	 */
	void enterAllPathSearch(GQLParser.AllPathSearchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#allPathSearch}.
	 * @param ctx the parse tree
	 */
	void exitAllPathSearch(GQLParser.AllPathSearchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathOrPaths}.
	 * @param ctx the parse tree
	 */
	void enterPathOrPaths(GQLParser.PathOrPathsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathOrPaths}.
	 * @param ctx the parse tree
	 */
	void exitPathOrPaths(GQLParser.PathOrPathsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#anyPathSearch}.
	 * @param ctx the parse tree
	 */
	void enterAnyPathSearch(GQLParser.AnyPathSearchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#anyPathSearch}.
	 * @param ctx the parse tree
	 */
	void exitAnyPathSearch(GQLParser.AnyPathSearchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#numberOfPaths}.
	 * @param ctx the parse tree
	 */
	void enterNumberOfPaths(GQLParser.NumberOfPathsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#numberOfPaths}.
	 * @param ctx the parse tree
	 */
	void exitNumberOfPaths(GQLParser.NumberOfPathsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#shortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void enterShortestPathSearch(GQLParser.ShortestPathSearchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#shortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void exitShortestPathSearch(GQLParser.ShortestPathSearchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#allShortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void enterAllShortestPathSearch(GQLParser.AllShortestPathSearchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#allShortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void exitAllShortestPathSearch(GQLParser.AllShortestPathSearchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#anyShortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void enterAnyShortestPathSearch(GQLParser.AnyShortestPathSearchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#anyShortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void exitAnyShortestPathSearch(GQLParser.AnyShortestPathSearchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#countedShortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void enterCountedShortestPathSearch(GQLParser.CountedShortestPathSearchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#countedShortestPathSearch}.
	 * @param ctx the parse tree
	 */
	void exitCountedShortestPathSearch(GQLParser.CountedShortestPathSearchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#countedShortestGroupSearch}.
	 * @param ctx the parse tree
	 */
	void enterCountedShortestGroupSearch(GQLParser.CountedShortestGroupSearchContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#countedShortestGroupSearch}.
	 * @param ctx the parse tree
	 */
	void exitCountedShortestGroupSearch(GQLParser.CountedShortestGroupSearchContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#numberOfGroups}.
	 * @param ctx the parse tree
	 */
	void enterNumberOfGroups(GQLParser.NumberOfGroupsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#numberOfGroups}.
	 * @param ctx the parse tree
	 */
	void exitNumberOfGroups(GQLParser.NumberOfGroupsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathPatternExpression}.
	 * @param ctx the parse tree
	 */
	void enterPathPatternExpression(GQLParser.PathPatternExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathPatternExpression}.
	 * @param ctx the parse tree
	 */
	void exitPathPatternExpression(GQLParser.PathPatternExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathMultisetAlternation}.
	 * @param ctx the parse tree
	 */
	void enterPathMultisetAlternation(GQLParser.PathMultisetAlternationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathMultisetAlternation}.
	 * @param ctx the parse tree
	 */
	void exitPathMultisetAlternation(GQLParser.PathMultisetAlternationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathPatternUnion}.
	 * @param ctx the parse tree
	 */
	void enterPathPatternUnion(GQLParser.PathPatternUnionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathPatternUnion}.
	 * @param ctx the parse tree
	 */
	void exitPathPatternUnion(GQLParser.PathPatternUnionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathTerm}.
	 * @param ctx the parse tree
	 */
	void enterPathTerm(GQLParser.PathTermContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathTerm}.
	 * @param ctx the parse tree
	 */
	void exitPathTerm(GQLParser.PathTermContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathFactor}.
	 * @param ctx the parse tree
	 */
	void enterPathFactor(GQLParser.PathFactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathFactor}.
	 * @param ctx the parse tree
	 */
	void exitPathFactor(GQLParser.PathFactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#quantifiedPathPrimary}.
	 * @param ctx the parse tree
	 */
	void enterQuantifiedPathPrimary(GQLParser.QuantifiedPathPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#quantifiedPathPrimary}.
	 * @param ctx the parse tree
	 */
	void exitQuantifiedPathPrimary(GQLParser.QuantifiedPathPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#questionedPathPrimary}.
	 * @param ctx the parse tree
	 */
	void enterQuestionedPathPrimary(GQLParser.QuestionedPathPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#questionedPathPrimary}.
	 * @param ctx the parse tree
	 */
	void exitQuestionedPathPrimary(GQLParser.QuestionedPathPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathPrimary}.
	 * @param ctx the parse tree
	 */
	void enterPathPrimary(GQLParser.PathPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathPrimary}.
	 * @param ctx the parse tree
	 */
	void exitPathPrimary(GQLParser.PathPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementPattern}.
	 * @param ctx the parse tree
	 */
	void enterElementPattern(GQLParser.ElementPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementPattern}.
	 * @param ctx the parse tree
	 */
	void exitElementPattern(GQLParser.ElementPatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodePattern}.
	 * @param ctx the parse tree
	 */
	void enterNodePattern(GQLParser.NodePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodePattern}.
	 * @param ctx the parse tree
	 */
	void exitNodePattern(GQLParser.NodePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementPatternFiller}.
	 * @param ctx the parse tree
	 */
	void enterElementPatternFiller(GQLParser.ElementPatternFillerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementPatternFiller}.
	 * @param ctx the parse tree
	 */
	void exitElementPatternFiller(GQLParser.ElementPatternFillerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterElementVariableDeclaration(GQLParser.ElementVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitElementVariableDeclaration(GQLParser.ElementVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#isLabelExpression}.
	 * @param ctx the parse tree
	 */
	void enterIsLabelExpression(GQLParser.IsLabelExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#isLabelExpression}.
	 * @param ctx the parse tree
	 */
	void exitIsLabelExpression(GQLParser.IsLabelExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#isOrColon}.
	 * @param ctx the parse tree
	 */
	void enterIsOrColon(GQLParser.IsOrColonContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#isOrColon}.
	 * @param ctx the parse tree
	 */
	void exitIsOrColon(GQLParser.IsOrColonContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementPatternPredicate}.
	 * @param ctx the parse tree
	 */
	void enterElementPatternPredicate(GQLParser.ElementPatternPredicateContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementPatternPredicate}.
	 * @param ctx the parse tree
	 */
	void exitElementPatternPredicate(GQLParser.ElementPatternPredicateContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementPatternWhereClause}.
	 * @param ctx the parse tree
	 */
	void enterElementPatternWhereClause(GQLParser.ElementPatternWhereClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementPatternWhereClause}.
	 * @param ctx the parse tree
	 */
	void exitElementPatternWhereClause(GQLParser.ElementPatternWhereClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementPropertySpecification}.
	 * @param ctx the parse tree
	 */
	void enterElementPropertySpecification(GQLParser.ElementPropertySpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementPropertySpecification}.
	 * @param ctx the parse tree
	 */
	void exitElementPropertySpecification(GQLParser.ElementPropertySpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyKeyValuePairList}.
	 * @param ctx the parse tree
	 */
	void enterPropertyKeyValuePairList(GQLParser.PropertyKeyValuePairListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyKeyValuePairList}.
	 * @param ctx the parse tree
	 */
	void exitPropertyKeyValuePairList(GQLParser.PropertyKeyValuePairListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyKeyValuePair}.
	 * @param ctx the parse tree
	 */
	void enterPropertyKeyValuePair(GQLParser.PropertyKeyValuePairContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyKeyValuePair}.
	 * @param ctx the parse tree
	 */
	void exitPropertyKeyValuePair(GQLParser.PropertyKeyValuePairContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgePattern}.
	 * @param ctx the parse tree
	 */
	void enterEdgePattern(GQLParser.EdgePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgePattern}.
	 * @param ctx the parse tree
	 */
	void exitEdgePattern(GQLParser.EdgePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgePattern(GQLParser.FullEdgePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgePattern(GQLParser.FullEdgePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgePointingLeft}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgePointingLeft(GQLParser.FullEdgePointingLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgePointingLeft}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgePointingLeft(GQLParser.FullEdgePointingLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeUndirected}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeUndirected(GQLParser.FullEdgeUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeUndirected}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeUndirected(GQLParser.FullEdgeUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgePointingRight}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgePointingRight(GQLParser.FullEdgePointingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgePointingRight}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgePointingRight(GQLParser.FullEdgePointingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeLeftOrUndirected}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeLeftOrUndirected(GQLParser.FullEdgeLeftOrUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeLeftOrUndirected}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeLeftOrUndirected(GQLParser.FullEdgeLeftOrUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeUndirectedOrRight}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeUndirectedOrRight(GQLParser.FullEdgeUndirectedOrRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeUndirectedOrRight}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeUndirectedOrRight(GQLParser.FullEdgeUndirectedOrRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeLeftOrRight}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeLeftOrRight(GQLParser.FullEdgeLeftOrRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeLeftOrRight}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeLeftOrRight(GQLParser.FullEdgeLeftOrRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeAnyDirection}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeAnyDirection(GQLParser.FullEdgeAnyDirectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeAnyDirection}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeAnyDirection(GQLParser.FullEdgeAnyDirectionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code abbreviatedEdgePointingLeft}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgePointingLeft(GQLParser.AbbreviatedEdgePointingLeftContext ctx);
	/**
	 * Exit a parse tree produced by the {@code abbreviatedEdgePointingLeft}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgePointingLeft(GQLParser.AbbreviatedEdgePointingLeftContext ctx);
	/**
	 * Enter a parse tree produced by the {@code abbreviatedEdgeUndirected}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeUndirected(GQLParser.AbbreviatedEdgeUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code abbreviatedEdgeUndirected}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeUndirected(GQLParser.AbbreviatedEdgeUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code abbreviatedEdgePointingRight}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgePointingRight(GQLParser.AbbreviatedEdgePointingRightContext ctx);
	/**
	 * Exit a parse tree produced by the {@code abbreviatedEdgePointingRight}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgePointingRight(GQLParser.AbbreviatedEdgePointingRightContext ctx);
	/**
	 * Enter a parse tree produced by the {@code abbreviatedEdgeLeftOrUndirected}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeLeftOrUndirected(GQLParser.AbbreviatedEdgeLeftOrUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code abbreviatedEdgeLeftOrUndirected}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeLeftOrUndirected(GQLParser.AbbreviatedEdgeLeftOrUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code abbreviatedEdgeUndirectedOrRight}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeUndirectedOrRight(GQLParser.AbbreviatedEdgeUndirectedOrRightContext ctx);
	/**
	 * Exit a parse tree produced by the {@code abbreviatedEdgeUndirectedOrRight}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeUndirectedOrRight(GQLParser.AbbreviatedEdgeUndirectedOrRightContext ctx);
	/**
	 * Enter a parse tree produced by the {@code abbreviatedEdgeLeftOrRight}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeLeftOrRight(GQLParser.AbbreviatedEdgeLeftOrRightContext ctx);
	/**
	 * Exit a parse tree produced by the {@code abbreviatedEdgeLeftOrRight}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeLeftOrRight(GQLParser.AbbreviatedEdgeLeftOrRightContext ctx);
	/**
	 * Enter a parse tree produced by the {@code abbreviatedEdgeAnyDirection}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeAnyDirection(GQLParser.AbbreviatedEdgeAnyDirectionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code abbreviatedEdgeAnyDirection}
	 * labeled alternative in {@link GQLParser#abbreviatedEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeAnyDirection(GQLParser.AbbreviatedEdgeAnyDirectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#parenthesizedPathPatternExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedPathPatternExpression(GQLParser.ParenthesizedPathPatternExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#parenthesizedPathPatternExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedPathPatternExpression(GQLParser.ParenthesizedPathPatternExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#subpathVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterSubpathVariableDeclaration(GQLParser.SubpathVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#subpathVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitSubpathVariableDeclaration(GQLParser.SubpathVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#parenthesizedPathPatternWhereClause}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedPathPatternWhereClause(GQLParser.ParenthesizedPathPatternWhereClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#parenthesizedPathPatternWhereClause}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedPathPatternWhereClause(GQLParser.ParenthesizedPathPatternWhereClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertGraphPattern}.
	 * @param ctx the parse tree
	 */
	void enterInsertGraphPattern(GQLParser.InsertGraphPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertGraphPattern}.
	 * @param ctx the parse tree
	 */
	void exitInsertGraphPattern(GQLParser.InsertGraphPatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertPathPatternList}.
	 * @param ctx the parse tree
	 */
	void enterInsertPathPatternList(GQLParser.InsertPathPatternListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertPathPatternList}.
	 * @param ctx the parse tree
	 */
	void exitInsertPathPatternList(GQLParser.InsertPathPatternListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertPathPattern}.
	 * @param ctx the parse tree
	 */
	void enterInsertPathPattern(GQLParser.InsertPathPatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertPathPattern}.
	 * @param ctx the parse tree
	 */
	void exitInsertPathPattern(GQLParser.InsertPathPatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertNodePattern}.
	 * @param ctx the parse tree
	 */
	void enterInsertNodePattern(GQLParser.InsertNodePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertNodePattern}.
	 * @param ctx the parse tree
	 */
	void exitInsertNodePattern(GQLParser.InsertNodePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertEdgePattern}.
	 * @param ctx the parse tree
	 */
	void enterInsertEdgePattern(GQLParser.InsertEdgePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertEdgePattern}.
	 * @param ctx the parse tree
	 */
	void exitInsertEdgePattern(GQLParser.InsertEdgePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertEdgePointingLeft}.
	 * @param ctx the parse tree
	 */
	void enterInsertEdgePointingLeft(GQLParser.InsertEdgePointingLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertEdgePointingLeft}.
	 * @param ctx the parse tree
	 */
	void exitInsertEdgePointingLeft(GQLParser.InsertEdgePointingLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertEdgePointingRight}.
	 * @param ctx the parse tree
	 */
	void enterInsertEdgePointingRight(GQLParser.InsertEdgePointingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertEdgePointingRight}.
	 * @param ctx the parse tree
	 */
	void exitInsertEdgePointingRight(GQLParser.InsertEdgePointingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertEdgeUndirected}.
	 * @param ctx the parse tree
	 */
	void enterInsertEdgeUndirected(GQLParser.InsertEdgeUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertEdgeUndirected}.
	 * @param ctx the parse tree
	 */
	void exitInsertEdgeUndirected(GQLParser.InsertEdgeUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#insertElementPatternFiller}.
	 * @param ctx the parse tree
	 */
	void enterInsertElementPatternFiller(GQLParser.InsertElementPatternFillerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#insertElementPatternFiller}.
	 * @param ctx the parse tree
	 */
	void exitInsertElementPatternFiller(GQLParser.InsertElementPatternFillerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelAndPropertySetSpecification}.
	 * @param ctx the parse tree
	 */
	void enterLabelAndPropertySetSpecification(GQLParser.LabelAndPropertySetSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelAndPropertySetSpecification}.
	 * @param ctx the parse tree
	 */
	void exitLabelAndPropertySetSpecification(GQLParser.LabelAndPropertySetSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelExpression}.
	 * @param ctx the parse tree
	 */
	void enterLabelExpression(GQLParser.LabelExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelExpression}.
	 * @param ctx the parse tree
	 */
	void exitLabelExpression(GQLParser.LabelExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelTerm}.
	 * @param ctx the parse tree
	 */
	void enterLabelTerm(GQLParser.LabelTermContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelTerm}.
	 * @param ctx the parse tree
	 */
	void exitLabelTerm(GQLParser.LabelTermContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelFactor}.
	 * @param ctx the parse tree
	 */
	void enterLabelFactor(GQLParser.LabelFactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelFactor}.
	 * @param ctx the parse tree
	 */
	void exitLabelFactor(GQLParser.LabelFactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelPrimary}.
	 * @param ctx the parse tree
	 */
	void enterLabelPrimary(GQLParser.LabelPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelPrimary}.
	 * @param ctx the parse tree
	 */
	void exitLabelPrimary(GQLParser.LabelPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#wildcardLabel}.
	 * @param ctx the parse tree
	 */
	void enterWildcardLabel(GQLParser.WildcardLabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#wildcardLabel}.
	 * @param ctx the parse tree
	 */
	void exitWildcardLabel(GQLParser.WildcardLabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#parenthesizedLabelExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedLabelExpression(GQLParser.ParenthesizedLabelExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#parenthesizedLabelExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedLabelExpression(GQLParser.ParenthesizedLabelExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphPatternQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterGraphPatternQuantifier(GQLParser.GraphPatternQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphPatternQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitGraphPatternQuantifier(GQLParser.GraphPatternQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fixedQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterFixedQuantifier(GQLParser.FixedQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fixedQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitFixedQuantifier(GQLParser.FixedQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#generalQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterGeneralQuantifier(GQLParser.GeneralQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#generalQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitGeneralQuantifier(GQLParser.GeneralQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#lowerBound}.
	 * @param ctx the parse tree
	 */
	void enterLowerBound(GQLParser.LowerBoundContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#lowerBound}.
	 * @param ctx the parse tree
	 */
	void exitLowerBound(GQLParser.LowerBoundContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#upperBound}.
	 * @param ctx the parse tree
	 */
	void enterUpperBound(GQLParser.UpperBoundContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#upperBound}.
	 * @param ctx the parse tree
	 */
	void exitUpperBound(GQLParser.UpperBoundContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedPathPatternExpression}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedPathPatternExpression(GQLParser.SimplifiedPathPatternExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedPathPatternExpression}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedPathPatternExpression(GQLParser.SimplifiedPathPatternExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDefaultingLeft}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDefaultingLeft(GQLParser.SimplifiedDefaultingLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDefaultingLeft}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDefaultingLeft(GQLParser.SimplifiedDefaultingLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDefaultingUndirected}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDefaultingUndirected(GQLParser.SimplifiedDefaultingUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDefaultingUndirected}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDefaultingUndirected(GQLParser.SimplifiedDefaultingUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDefaultingRight}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDefaultingRight(GQLParser.SimplifiedDefaultingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDefaultingRight}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDefaultingRight(GQLParser.SimplifiedDefaultingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDefaultingLeftOrUndirected}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDefaultingLeftOrUndirected(GQLParser.SimplifiedDefaultingLeftOrUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDefaultingLeftOrUndirected}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDefaultingLeftOrUndirected(GQLParser.SimplifiedDefaultingLeftOrUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDefaultingUndirectedOrRight}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDefaultingUndirectedOrRight(GQLParser.SimplifiedDefaultingUndirectedOrRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDefaultingUndirectedOrRight}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDefaultingUndirectedOrRight(GQLParser.SimplifiedDefaultingUndirectedOrRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDefaultingLeftOrRight}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDefaultingLeftOrRight(GQLParser.SimplifiedDefaultingLeftOrRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDefaultingLeftOrRight}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDefaultingLeftOrRight(GQLParser.SimplifiedDefaultingLeftOrRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDefaultingAnyDirection}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDefaultingAnyDirection(GQLParser.SimplifiedDefaultingAnyDirectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDefaultingAnyDirection}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDefaultingAnyDirection(GQLParser.SimplifiedDefaultingAnyDirectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedContents}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedContents(GQLParser.SimplifiedContentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedContents}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedContents(GQLParser.SimplifiedContentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedPathUnion}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedPathUnion(GQLParser.SimplifiedPathUnionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedPathUnion}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedPathUnion(GQLParser.SimplifiedPathUnionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedMultisetAlternation}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedMultisetAlternation(GQLParser.SimplifiedMultisetAlternationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedMultisetAlternation}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedMultisetAlternation(GQLParser.SimplifiedMultisetAlternationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedTerm}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedTerm(GQLParser.SimplifiedTermContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedTerm}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedTerm(GQLParser.SimplifiedTermContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedFactorLow}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedFactorLow(GQLParser.SimplifiedFactorLowContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedFactorLow}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedFactorLow(GQLParser.SimplifiedFactorLowContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedFactorHigh}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedFactorHigh(GQLParser.SimplifiedFactorHighContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedFactorHigh}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedFactorHigh(GQLParser.SimplifiedFactorHighContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedQuantified}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedQuantified(GQLParser.SimplifiedQuantifiedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedQuantified}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedQuantified(GQLParser.SimplifiedQuantifiedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedQuestioned}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedQuestioned(GQLParser.SimplifiedQuestionedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedQuestioned}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedQuestioned(GQLParser.SimplifiedQuestionedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedTertiary}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedTertiary(GQLParser.SimplifiedTertiaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedTertiary}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedTertiary(GQLParser.SimplifiedTertiaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedDirectionOverride}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedDirectionOverride(GQLParser.SimplifiedDirectionOverrideContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedDirectionOverride}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedDirectionOverride(GQLParser.SimplifiedDirectionOverrideContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedOverrideLeft}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedOverrideLeft(GQLParser.SimplifiedOverrideLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedOverrideLeft}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedOverrideLeft(GQLParser.SimplifiedOverrideLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedOverrideUndirected}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedOverrideUndirected(GQLParser.SimplifiedOverrideUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedOverrideUndirected}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedOverrideUndirected(GQLParser.SimplifiedOverrideUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedOverrideRight}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedOverrideRight(GQLParser.SimplifiedOverrideRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedOverrideRight}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedOverrideRight(GQLParser.SimplifiedOverrideRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedOverrideLeftOrUndirected}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedOverrideLeftOrUndirected(GQLParser.SimplifiedOverrideLeftOrUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedOverrideLeftOrUndirected}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedOverrideLeftOrUndirected(GQLParser.SimplifiedOverrideLeftOrUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedOverrideUndirectedOrRight}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedOverrideUndirectedOrRight(GQLParser.SimplifiedOverrideUndirectedOrRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedOverrideUndirectedOrRight}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedOverrideUndirectedOrRight(GQLParser.SimplifiedOverrideUndirectedOrRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedOverrideLeftOrRight}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedOverrideLeftOrRight(GQLParser.SimplifiedOverrideLeftOrRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedOverrideLeftOrRight}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedOverrideLeftOrRight(GQLParser.SimplifiedOverrideLeftOrRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedOverrideAnyDirection}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedOverrideAnyDirection(GQLParser.SimplifiedOverrideAnyDirectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedOverrideAnyDirection}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedOverrideAnyDirection(GQLParser.SimplifiedOverrideAnyDirectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedSecondary}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedSecondary(GQLParser.SimplifiedSecondaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedSecondary}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedSecondary(GQLParser.SimplifiedSecondaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedNegation}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedNegation(GQLParser.SimplifiedNegationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedNegation}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedNegation(GQLParser.SimplifiedNegationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simplifiedPrimary}.
	 * @param ctx the parse tree
	 */
	void enterSimplifiedPrimary(GQLParser.SimplifiedPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simplifiedPrimary}.
	 * @param ctx the parse tree
	 */
	void exitSimplifiedPrimary(GQLParser.SimplifiedPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#whereClause}.
	 * @param ctx the parse tree
	 */
	void enterWhereClause(GQLParser.WhereClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#whereClause}.
	 * @param ctx the parse tree
	 */
	void exitWhereClause(GQLParser.WhereClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#yieldClause}.
	 * @param ctx the parse tree
	 */
	void enterYieldClause(GQLParser.YieldClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#yieldClause}.
	 * @param ctx the parse tree
	 */
	void exitYieldClause(GQLParser.YieldClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#yieldItemList}.
	 * @param ctx the parse tree
	 */
	void enterYieldItemList(GQLParser.YieldItemListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#yieldItemList}.
	 * @param ctx the parse tree
	 */
	void exitYieldItemList(GQLParser.YieldItemListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#yieldItem}.
	 * @param ctx the parse tree
	 */
	void enterYieldItem(GQLParser.YieldItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#yieldItem}.
	 * @param ctx the parse tree
	 */
	void exitYieldItem(GQLParser.YieldItemContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#yieldItemName}.
	 * @param ctx the parse tree
	 */
	void enterYieldItemName(GQLParser.YieldItemNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#yieldItemName}.
	 * @param ctx the parse tree
	 */
	void exitYieldItemName(GQLParser.YieldItemNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#yieldItemAlias}.
	 * @param ctx the parse tree
	 */
	void enterYieldItemAlias(GQLParser.YieldItemAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#yieldItemAlias}.
	 * @param ctx the parse tree
	 */
	void exitYieldItemAlias(GQLParser.YieldItemAliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#groupByClause}.
	 * @param ctx the parse tree
	 */
	void enterGroupByClause(GQLParser.GroupByClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#groupByClause}.
	 * @param ctx the parse tree
	 */
	void exitGroupByClause(GQLParser.GroupByClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#groupingElementList}.
	 * @param ctx the parse tree
	 */
	void enterGroupingElementList(GQLParser.GroupingElementListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#groupingElementList}.
	 * @param ctx the parse tree
	 */
	void exitGroupingElementList(GQLParser.GroupingElementListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void enterGroupingElement(GQLParser.GroupingElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#groupingElement}.
	 * @param ctx the parse tree
	 */
	void exitGroupingElement(GQLParser.GroupingElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#emptyGroupingSet}.
	 * @param ctx the parse tree
	 */
	void enterEmptyGroupingSet(GQLParser.EmptyGroupingSetContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#emptyGroupingSet}.
	 * @param ctx the parse tree
	 */
	void exitEmptyGroupingSet(GQLParser.EmptyGroupingSetContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#orderByClause}.
	 * @param ctx the parse tree
	 */
	void enterOrderByClause(GQLParser.OrderByClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#orderByClause}.
	 * @param ctx the parse tree
	 */
	void exitOrderByClause(GQLParser.OrderByClauseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlCountAllFunction}
	 * labeled alternative in {@link GQLParser#aggregateFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlCountAllFunction(GQLParser.GqlCountAllFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlCountAllFunction}
	 * labeled alternative in {@link GQLParser#aggregateFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlCountAllFunction(GQLParser.GqlCountAllFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlGeneralSetFunction}
	 * labeled alternative in {@link GQLParser#aggregateFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlGeneralSetFunction(GQLParser.GqlGeneralSetFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlGeneralSetFunction}
	 * labeled alternative in {@link GQLParser#aggregateFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlGeneralSetFunction(GQLParser.GqlGeneralSetFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlBinarySetFunction}
	 * labeled alternative in {@link GQLParser#aggregateFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlBinarySetFunction(GQLParser.GqlBinarySetFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlBinarySetFunction}
	 * labeled alternative in {@link GQLParser#aggregateFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlBinarySetFunction(GQLParser.GqlBinarySetFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#generalSetFunctionType}.
	 * @param ctx the parse tree
	 */
	void enterGeneralSetFunctionType(GQLParser.GeneralSetFunctionTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#generalSetFunctionType}.
	 * @param ctx the parse tree
	 */
	void exitGeneralSetFunctionType(GQLParser.GeneralSetFunctionTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void enterSetQuantifier(GQLParser.SetQuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#setQuantifier}.
	 * @param ctx the parse tree
	 */
	void exitSetQuantifier(GQLParser.SetQuantifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#binarySetFunctionType}.
	 * @param ctx the parse tree
	 */
	void enterBinarySetFunctionType(GQLParser.BinarySetFunctionTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#binarySetFunctionType}.
	 * @param ctx the parse tree
	 */
	void exitBinarySetFunctionType(GQLParser.BinarySetFunctionTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sortSpecificationList}.
	 * @param ctx the parse tree
	 */
	void enterSortSpecificationList(GQLParser.SortSpecificationListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sortSpecificationList}.
	 * @param ctx the parse tree
	 */
	void exitSortSpecificationList(GQLParser.SortSpecificationListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sortSpecification}.
	 * @param ctx the parse tree
	 */
	void enterSortSpecification(GQLParser.SortSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sortSpecification}.
	 * @param ctx the parse tree
	 */
	void exitSortSpecification(GQLParser.SortSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sortKey}.
	 * @param ctx the parse tree
	 */
	void enterSortKey(GQLParser.SortKeyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sortKey}.
	 * @param ctx the parse tree
	 */
	void exitSortKey(GQLParser.SortKeyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#orderingSpecification}.
	 * @param ctx the parse tree
	 */
	void enterOrderingSpecification(GQLParser.OrderingSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#orderingSpecification}.
	 * @param ctx the parse tree
	 */
	void exitOrderingSpecification(GQLParser.OrderingSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nullOrdering}.
	 * @param ctx the parse tree
	 */
	void enterNullOrdering(GQLParser.NullOrderingContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nullOrdering}.
	 * @param ctx the parse tree
	 */
	void exitNullOrdering(GQLParser.NullOrderingContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#limitClause}.
	 * @param ctx the parse tree
	 */
	void enterLimitClause(GQLParser.LimitClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#limitClause}.
	 * @param ctx the parse tree
	 */
	void exitLimitClause(GQLParser.LimitClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#offsetClause}.
	 * @param ctx the parse tree
	 */
	void enterOffsetClause(GQLParser.OffsetClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#offsetClause}.
	 * @param ctx the parse tree
	 */
	void exitOffsetClause(GQLParser.OffsetClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#offsetSynonym}.
	 * @param ctx the parse tree
	 */
	void enterOffsetSynonym(GQLParser.OffsetSynonymContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#offsetSynonym}.
	 * @param ctx the parse tree
	 */
	void exitOffsetSynonym(GQLParser.OffsetSynonymContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nestedGraphTypeSpecification}.
	 * @param ctx the parse tree
	 */
	void enterNestedGraphTypeSpecification(GQLParser.NestedGraphTypeSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nestedGraphTypeSpecification}.
	 * @param ctx the parse tree
	 */
	void exitNestedGraphTypeSpecification(GQLParser.NestedGraphTypeSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphTypeSpecificationBody}.
	 * @param ctx the parse tree
	 */
	void enterGraphTypeSpecificationBody(GQLParser.GraphTypeSpecificationBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphTypeSpecificationBody}.
	 * @param ctx the parse tree
	 */
	void exitGraphTypeSpecificationBody(GQLParser.GraphTypeSpecificationBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementTypeDefinitionList}.
	 * @param ctx the parse tree
	 */
	void enterElementTypeDefinitionList(GQLParser.ElementTypeDefinitionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementTypeDefinitionList}.
	 * @param ctx the parse tree
	 */
	void exitElementTypeDefinitionList(GQLParser.ElementTypeDefinitionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterElementTypeDefinition(GQLParser.ElementTypeDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitElementTypeDefinition(GQLParser.ElementTypeDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypeDefinition(GQLParser.NodeTypeDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypeDefinition(GQLParser.NodeTypeDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypePattern}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypePattern(GQLParser.NodeTypePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypePattern}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypePattern(GQLParser.NodeTypePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypePhrase}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypePhrase(GQLParser.NodeTypePhraseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypePhrase}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypePhrase(GQLParser.NodeTypePhraseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypeName}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypeName(GQLParser.NodeTypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypeName}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypeName(GQLParser.NodeTypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypeFiller}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypeFiller(GQLParser.NodeTypeFillerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypeFiller}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypeFiller(GQLParser.NodeTypeFillerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypeLabelSetDefinition}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypeLabelSetDefinition(GQLParser.NodeTypeLabelSetDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypeLabelSetDefinition}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypeLabelSetDefinition(GQLParser.NodeTypeLabelSetDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypePropertyTypeSetDefinition}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypePropertyTypeSetDefinition(GQLParser.NodeTypePropertyTypeSetDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypePropertyTypeSetDefinition}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypePropertyTypeSetDefinition(GQLParser.NodeTypePropertyTypeSetDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterEdgeTypeDefinition(GQLParser.EdgeTypeDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitEdgeTypeDefinition(GQLParser.EdgeTypeDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeTypePattern}.
	 * @param ctx the parse tree
	 */
	void enterEdgeTypePattern(GQLParser.EdgeTypePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeTypePattern}.
	 * @param ctx the parse tree
	 */
	void exitEdgeTypePattern(GQLParser.EdgeTypePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeTypePhrase}.
	 * @param ctx the parse tree
	 */
	void enterEdgeTypePhrase(GQLParser.EdgeTypePhraseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeTypePhrase}.
	 * @param ctx the parse tree
	 */
	void exitEdgeTypePhrase(GQLParser.EdgeTypePhraseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeTypeName}.
	 * @param ctx the parse tree
	 */
	void enterEdgeTypeName(GQLParser.EdgeTypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeTypeName}.
	 * @param ctx the parse tree
	 */
	void exitEdgeTypeName(GQLParser.EdgeTypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeTypeFiller}.
	 * @param ctx the parse tree
	 */
	void enterEdgeTypeFiller(GQLParser.EdgeTypeFillerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeTypeFiller}.
	 * @param ctx the parse tree
	 */
	void exitEdgeTypeFiller(GQLParser.EdgeTypeFillerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeTypeLabelSetDefinition}.
	 * @param ctx the parse tree
	 */
	void enterEdgeTypeLabelSetDefinition(GQLParser.EdgeTypeLabelSetDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeTypeLabelSetDefinition}.
	 * @param ctx the parse tree
	 */
	void exitEdgeTypeLabelSetDefinition(GQLParser.EdgeTypeLabelSetDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeTypePropertyTypeSetDefinition}.
	 * @param ctx the parse tree
	 */
	void enterEdgeTypePropertyTypeSetDefinition(GQLParser.EdgeTypePropertyTypeSetDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeTypePropertyTypeSetDefinition}.
	 * @param ctx the parse tree
	 */
	void exitEdgeTypePropertyTypeSetDefinition(GQLParser.EdgeTypePropertyTypeSetDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeTypePattern}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeTypePattern(GQLParser.FullEdgeTypePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeTypePattern}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeTypePattern(GQLParser.FullEdgeTypePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeTypePatternPointingRight}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeTypePatternPointingRight(GQLParser.FullEdgeTypePatternPointingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeTypePatternPointingRight}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeTypePatternPointingRight(GQLParser.FullEdgeTypePatternPointingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeTypePatternPointingLeft}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeTypePatternPointingLeft(GQLParser.FullEdgeTypePatternPointingLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeTypePatternPointingLeft}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeTypePatternPointingLeft(GQLParser.FullEdgeTypePatternPointingLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fullEdgeTypePatternUndirected}.
	 * @param ctx the parse tree
	 */
	void enterFullEdgeTypePatternUndirected(GQLParser.FullEdgeTypePatternUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fullEdgeTypePatternUndirected}.
	 * @param ctx the parse tree
	 */
	void exitFullEdgeTypePatternUndirected(GQLParser.FullEdgeTypePatternUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#arcTypePointingRight}.
	 * @param ctx the parse tree
	 */
	void enterArcTypePointingRight(GQLParser.ArcTypePointingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#arcTypePointingRight}.
	 * @param ctx the parse tree
	 */
	void exitArcTypePointingRight(GQLParser.ArcTypePointingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#arcTypePointingLeft}.
	 * @param ctx the parse tree
	 */
	void enterArcTypePointingLeft(GQLParser.ArcTypePointingLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#arcTypePointingLeft}.
	 * @param ctx the parse tree
	 */
	void exitArcTypePointingLeft(GQLParser.ArcTypePointingLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#arcTypeUndirected}.
	 * @param ctx the parse tree
	 */
	void enterArcTypeUndirected(GQLParser.ArcTypeUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#arcTypeUndirected}.
	 * @param ctx the parse tree
	 */
	void exitArcTypeUndirected(GQLParser.ArcTypeUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#arcTypeFiller}.
	 * @param ctx the parse tree
	 */
	void enterArcTypeFiller(GQLParser.ArcTypeFillerContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#arcTypeFiller}.
	 * @param ctx the parse tree
	 */
	void exitArcTypeFiller(GQLParser.ArcTypeFillerContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePattern}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeTypePattern(GQLParser.AbbreviatedEdgeTypePatternContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePattern}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeTypePattern(GQLParser.AbbreviatedEdgeTypePatternContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePatternPointingRight}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeTypePatternPointingRight(GQLParser.AbbreviatedEdgeTypePatternPointingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePatternPointingRight}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeTypePatternPointingRight(GQLParser.AbbreviatedEdgeTypePatternPointingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePatternPointingLeft}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeTypePatternPointingLeft(GQLParser.AbbreviatedEdgeTypePatternPointingLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePatternPointingLeft}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeTypePatternPointingLeft(GQLParser.AbbreviatedEdgeTypePatternPointingLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePatternUndirected}.
	 * @param ctx the parse tree
	 */
	void enterAbbreviatedEdgeTypePatternUndirected(GQLParser.AbbreviatedEdgeTypePatternUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#abbreviatedEdgeTypePatternUndirected}.
	 * @param ctx the parse tree
	 */
	void exitAbbreviatedEdgeTypePatternUndirected(GQLParser.AbbreviatedEdgeTypePatternUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeTypeReference}.
	 * @param ctx the parse tree
	 */
	void enterNodeTypeReference(GQLParser.NodeTypeReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeTypeReference}.
	 * @param ctx the parse tree
	 */
	void exitNodeTypeReference(GQLParser.NodeTypeReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sourceNodeTypeReference}.
	 * @param ctx the parse tree
	 */
	void enterSourceNodeTypeReference(GQLParser.SourceNodeTypeReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sourceNodeTypeReference}.
	 * @param ctx the parse tree
	 */
	void exitSourceNodeTypeReference(GQLParser.SourceNodeTypeReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#destinationNodeTypeReference}.
	 * @param ctx the parse tree
	 */
	void enterDestinationNodeTypeReference(GQLParser.DestinationNodeTypeReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#destinationNodeTypeReference}.
	 * @param ctx the parse tree
	 */
	void exitDestinationNodeTypeReference(GQLParser.DestinationNodeTypeReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeKind}.
	 * @param ctx the parse tree
	 */
	void enterEdgeKind(GQLParser.EdgeKindContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeKind}.
	 * @param ctx the parse tree
	 */
	void exitEdgeKind(GQLParser.EdgeKindContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#endpointDefinition}.
	 * @param ctx the parse tree
	 */
	void enterEndpointDefinition(GQLParser.EndpointDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#endpointDefinition}.
	 * @param ctx the parse tree
	 */
	void exitEndpointDefinition(GQLParser.EndpointDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#endpointPairDefinition}.
	 * @param ctx the parse tree
	 */
	void enterEndpointPairDefinition(GQLParser.EndpointPairDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#endpointPairDefinition}.
	 * @param ctx the parse tree
	 */
	void exitEndpointPairDefinition(GQLParser.EndpointPairDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#endpointPairDefinitionPointingRight}.
	 * @param ctx the parse tree
	 */
	void enterEndpointPairDefinitionPointingRight(GQLParser.EndpointPairDefinitionPointingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#endpointPairDefinitionPointingRight}.
	 * @param ctx the parse tree
	 */
	void exitEndpointPairDefinitionPointingRight(GQLParser.EndpointPairDefinitionPointingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#endpointPairDefinitionPointingLeft}.
	 * @param ctx the parse tree
	 */
	void enterEndpointPairDefinitionPointingLeft(GQLParser.EndpointPairDefinitionPointingLeftContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#endpointPairDefinitionPointingLeft}.
	 * @param ctx the parse tree
	 */
	void exitEndpointPairDefinitionPointingLeft(GQLParser.EndpointPairDefinitionPointingLeftContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#endpointPairDefinitionUndirected}.
	 * @param ctx the parse tree
	 */
	void enterEndpointPairDefinitionUndirected(GQLParser.EndpointPairDefinitionUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#endpointPairDefinitionUndirected}.
	 * @param ctx the parse tree
	 */
	void exitEndpointPairDefinitionUndirected(GQLParser.EndpointPairDefinitionUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#connectorPointingRight}.
	 * @param ctx the parse tree
	 */
	void enterConnectorPointingRight(GQLParser.ConnectorPointingRightContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#connectorPointingRight}.
	 * @param ctx the parse tree
	 */
	void exitConnectorPointingRight(GQLParser.ConnectorPointingRightContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#connectorUndirected}.
	 * @param ctx the parse tree
	 */
	void enterConnectorUndirected(GQLParser.ConnectorUndirectedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#connectorUndirected}.
	 * @param ctx the parse tree
	 */
	void exitConnectorUndirected(GQLParser.ConnectorUndirectedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sourceNodeTypeName}.
	 * @param ctx the parse tree
	 */
	void enterSourceNodeTypeName(GQLParser.SourceNodeTypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sourceNodeTypeName}.
	 * @param ctx the parse tree
	 */
	void exitSourceNodeTypeName(GQLParser.SourceNodeTypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#destinationNodeTypeName}.
	 * @param ctx the parse tree
	 */
	void enterDestinationNodeTypeName(GQLParser.DestinationNodeTypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#destinationNodeTypeName}.
	 * @param ctx the parse tree
	 */
	void exitDestinationNodeTypeName(GQLParser.DestinationNodeTypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labelSetDefinition}.
	 * @param ctx the parse tree
	 */
	void enterLabelSetDefinition(GQLParser.LabelSetDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labelSetDefinition}.
	 * @param ctx the parse tree
	 */
	void exitLabelSetDefinition(GQLParser.LabelSetDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyTypeSetDefinition}.
	 * @param ctx the parse tree
	 */
	void enterPropertyTypeSetDefinition(GQLParser.PropertyTypeSetDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyTypeSetDefinition}.
	 * @param ctx the parse tree
	 */
	void exitPropertyTypeSetDefinition(GQLParser.PropertyTypeSetDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyTypeDefinitionList}.
	 * @param ctx the parse tree
	 */
	void enterPropertyTypeDefinitionList(GQLParser.PropertyTypeDefinitionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyTypeDefinitionList}.
	 * @param ctx the parse tree
	 */
	void exitPropertyTypeDefinitionList(GQLParser.PropertyTypeDefinitionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterPropertyTypeDefinition(GQLParser.PropertyTypeDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyTypeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitPropertyTypeDefinition(GQLParser.PropertyTypeDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyValueType}.
	 * @param ctx the parse tree
	 */
	void enterPropertyValueType(GQLParser.PropertyValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyValueType}.
	 * @param ctx the parse tree
	 */
	void exitPropertyValueType(GQLParser.PropertyValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableType}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableType(GQLParser.BindingTableTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableType}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableType(GQLParser.BindingTableTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dynamicPropertyValueType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterDynamicPropertyValueType(GQLParser.DynamicPropertyValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dynamicPropertyValueType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitDynamicPropertyValueType(GQLParser.DynamicPropertyValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code predefType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterPredefType(GQLParser.PredefTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code predefType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitPredefType(GQLParser.PredefTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code listType1}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterListType1(GQLParser.ListType1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code listType1}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitListType1(GQLParser.ListType1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code recordType1}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterRecordType1(GQLParser.RecordType1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code recordType1}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitRecordType1(GQLParser.RecordType1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code closedDynamicUnionType2}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterClosedDynamicUnionType2(GQLParser.ClosedDynamicUnionType2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code closedDynamicUnionType2}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitClosedDynamicUnionType2(GQLParser.ClosedDynamicUnionType2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code recordType2}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterRecordType2(GQLParser.RecordType2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code recordType2}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitRecordType2(GQLParser.RecordType2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code listType2}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterListType2(GQLParser.ListType2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code listType2}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitListType2(GQLParser.ListType2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code pathType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterPathType(GQLParser.PathTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code pathType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitPathType(GQLParser.PathTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code openDynamicUnionType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterOpenDynamicUnionType(GQLParser.OpenDynamicUnionTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code openDynamicUnionType}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitOpenDynamicUnionType(GQLParser.OpenDynamicUnionTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code closedDynamicUnionType1}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void enterClosedDynamicUnionType1(GQLParser.ClosedDynamicUnionType1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code closedDynamicUnionType1}
	 * labeled alternative in {@link GQLParser#valueType}.
	 * @param ctx the parse tree
	 */
	void exitClosedDynamicUnionType1(GQLParser.ClosedDynamicUnionType1Context ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#typed}.
	 * @param ctx the parse tree
	 */
	void enterTyped(GQLParser.TypedContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#typed}.
	 * @param ctx the parse tree
	 */
	void exitTyped(GQLParser.TypedContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#predefinedType}.
	 * @param ctx the parse tree
	 */
	void enterPredefinedType(GQLParser.PredefinedTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#predefinedType}.
	 * @param ctx the parse tree
	 */
	void exitPredefinedType(GQLParser.PredefinedTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#booleanType}.
	 * @param ctx the parse tree
	 */
	void enterBooleanType(GQLParser.BooleanTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#booleanType}.
	 * @param ctx the parse tree
	 */
	void exitBooleanType(GQLParser.BooleanTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#characterStringType}.
	 * @param ctx the parse tree
	 */
	void enterCharacterStringType(GQLParser.CharacterStringTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#characterStringType}.
	 * @param ctx the parse tree
	 */
	void exitCharacterStringType(GQLParser.CharacterStringTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#byteStringType}.
	 * @param ctx the parse tree
	 */
	void enterByteStringType(GQLParser.ByteStringTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#byteStringType}.
	 * @param ctx the parse tree
	 */
	void exitByteStringType(GQLParser.ByteStringTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#minLength}.
	 * @param ctx the parse tree
	 */
	void enterMinLength(GQLParser.MinLengthContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#minLength}.
	 * @param ctx the parse tree
	 */
	void exitMinLength(GQLParser.MinLengthContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#maxLength}.
	 * @param ctx the parse tree
	 */
	void enterMaxLength(GQLParser.MaxLengthContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#maxLength}.
	 * @param ctx the parse tree
	 */
	void exitMaxLength(GQLParser.MaxLengthContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fixedLength}.
	 * @param ctx the parse tree
	 */
	void enterFixedLength(GQLParser.FixedLengthContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fixedLength}.
	 * @param ctx the parse tree
	 */
	void exitFixedLength(GQLParser.FixedLengthContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#numericType}.
	 * @param ctx the parse tree
	 */
	void enterNumericType(GQLParser.NumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#numericType}.
	 * @param ctx the parse tree
	 */
	void exitNumericType(GQLParser.NumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#exactNumericType}.
	 * @param ctx the parse tree
	 */
	void enterExactNumericType(GQLParser.ExactNumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#exactNumericType}.
	 * @param ctx the parse tree
	 */
	void exitExactNumericType(GQLParser.ExactNumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#binaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void enterBinaryExactNumericType(GQLParser.BinaryExactNumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#binaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void exitBinaryExactNumericType(GQLParser.BinaryExactNumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#signedBinaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void enterSignedBinaryExactNumericType(GQLParser.SignedBinaryExactNumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#signedBinaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void exitSignedBinaryExactNumericType(GQLParser.SignedBinaryExactNumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unsignedBinaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void enterUnsignedBinaryExactNumericType(GQLParser.UnsignedBinaryExactNumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unsignedBinaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void exitUnsignedBinaryExactNumericType(GQLParser.UnsignedBinaryExactNumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#verboseBinaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void enterVerboseBinaryExactNumericType(GQLParser.VerboseBinaryExactNumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#verboseBinaryExactNumericType}.
	 * @param ctx the parse tree
	 */
	void exitVerboseBinaryExactNumericType(GQLParser.VerboseBinaryExactNumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#decimalExactNumericType}.
	 * @param ctx the parse tree
	 */
	void enterDecimalExactNumericType(GQLParser.DecimalExactNumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#decimalExactNumericType}.
	 * @param ctx the parse tree
	 */
	void exitDecimalExactNumericType(GQLParser.DecimalExactNumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#precision}.
	 * @param ctx the parse tree
	 */
	void enterPrecision(GQLParser.PrecisionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#precision}.
	 * @param ctx the parse tree
	 */
	void exitPrecision(GQLParser.PrecisionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#scale}.
	 * @param ctx the parse tree
	 */
	void enterScale(GQLParser.ScaleContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#scale}.
	 * @param ctx the parse tree
	 */
	void exitScale(GQLParser.ScaleContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#approximateNumericType}.
	 * @param ctx the parse tree
	 */
	void enterApproximateNumericType(GQLParser.ApproximateNumericTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#approximateNumericType}.
	 * @param ctx the parse tree
	 */
	void exitApproximateNumericType(GQLParser.ApproximateNumericTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#temporalType}.
	 * @param ctx the parse tree
	 */
	void enterTemporalType(GQLParser.TemporalTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#temporalType}.
	 * @param ctx the parse tree
	 */
	void exitTemporalType(GQLParser.TemporalTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#temporalInstantType}.
	 * @param ctx the parse tree
	 */
	void enterTemporalInstantType(GQLParser.TemporalInstantTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#temporalInstantType}.
	 * @param ctx the parse tree
	 */
	void exitTemporalInstantType(GQLParser.TemporalInstantTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#temporalDurationType}.
	 * @param ctx the parse tree
	 */
	void enterTemporalDurationType(GQLParser.TemporalDurationTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#temporalDurationType}.
	 * @param ctx the parse tree
	 */
	void exitTemporalDurationType(GQLParser.TemporalDurationTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#datetimeType}.
	 * @param ctx the parse tree
	 */
	void enterDatetimeType(GQLParser.DatetimeTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#datetimeType}.
	 * @param ctx the parse tree
	 */
	void exitDatetimeType(GQLParser.DatetimeTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#localdatetimeType}.
	 * @param ctx the parse tree
	 */
	void enterLocaldatetimeType(GQLParser.LocaldatetimeTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#localdatetimeType}.
	 * @param ctx the parse tree
	 */
	void exitLocaldatetimeType(GQLParser.LocaldatetimeTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dateType}.
	 * @param ctx the parse tree
	 */
	void enterDateType(GQLParser.DateTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dateType}.
	 * @param ctx the parse tree
	 */
	void exitDateType(GQLParser.DateTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#timeType}.
	 * @param ctx the parse tree
	 */
	void enterTimeType(GQLParser.TimeTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#timeType}.
	 * @param ctx the parse tree
	 */
	void exitTimeType(GQLParser.TimeTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#localtimeType}.
	 * @param ctx the parse tree
	 */
	void enterLocaltimeType(GQLParser.LocaltimeTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#localtimeType}.
	 * @param ctx the parse tree
	 */
	void exitLocaltimeType(GQLParser.LocaltimeTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#durationType}.
	 * @param ctx the parse tree
	 */
	void enterDurationType(GQLParser.DurationTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#durationType}.
	 * @param ctx the parse tree
	 */
	void exitDurationType(GQLParser.DurationTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#referenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterReferenceValueType(GQLParser.ReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#referenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitReferenceValueType(GQLParser.ReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterGraphReferenceValueType(GQLParser.GraphReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitGraphReferenceValueType(GQLParser.GraphReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#closedGraphReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterClosedGraphReferenceValueType(GQLParser.ClosedGraphReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#closedGraphReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitClosedGraphReferenceValueType(GQLParser.ClosedGraphReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#openGraphReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterOpenGraphReferenceValueType(GQLParser.OpenGraphReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#openGraphReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitOpenGraphReferenceValueType(GQLParser.OpenGraphReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableReferenceValueType(GQLParser.BindingTableReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableReferenceValueType(GQLParser.BindingTableReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nodeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterNodeReferenceValueType(GQLParser.NodeReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nodeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitNodeReferenceValueType(GQLParser.NodeReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#closedNodeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterClosedNodeReferenceValueType(GQLParser.ClosedNodeReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#closedNodeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitClosedNodeReferenceValueType(GQLParser.ClosedNodeReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#openNodeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterOpenNodeReferenceValueType(GQLParser.OpenNodeReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#openNodeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitOpenNodeReferenceValueType(GQLParser.OpenNodeReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#edgeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterEdgeReferenceValueType(GQLParser.EdgeReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#edgeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitEdgeReferenceValueType(GQLParser.EdgeReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#closedEdgeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterClosedEdgeReferenceValueType(GQLParser.ClosedEdgeReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#closedEdgeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitClosedEdgeReferenceValueType(GQLParser.ClosedEdgeReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#openEdgeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void enterOpenEdgeReferenceValueType(GQLParser.OpenEdgeReferenceValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#openEdgeReferenceValueType}.
	 * @param ctx the parse tree
	 */
	void exitOpenEdgeReferenceValueType(GQLParser.OpenEdgeReferenceValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#listValueTypeName}.
	 * @param ctx the parse tree
	 */
	void enterListValueTypeName(GQLParser.ListValueTypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#listValueTypeName}.
	 * @param ctx the parse tree
	 */
	void exitListValueTypeName(GQLParser.ListValueTypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#listValueTypeNameSynonym}.
	 * @param ctx the parse tree
	 */
	void enterListValueTypeNameSynonym(GQLParser.ListValueTypeNameSynonymContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#listValueTypeNameSynonym}.
	 * @param ctx the parse tree
	 */
	void exitListValueTypeNameSynonym(GQLParser.ListValueTypeNameSynonymContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fieldTypesSpecification}.
	 * @param ctx the parse tree
	 */
	void enterFieldTypesSpecification(GQLParser.FieldTypesSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fieldTypesSpecification}.
	 * @param ctx the parse tree
	 */
	void exitFieldTypesSpecification(GQLParser.FieldTypesSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fieldTypeList}.
	 * @param ctx the parse tree
	 */
	void enterFieldTypeList(GQLParser.FieldTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fieldTypeList}.
	 * @param ctx the parse tree
	 */
	void exitFieldTypeList(GQLParser.FieldTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathValueType}.
	 * @param ctx the parse tree
	 */
	void enterPathValueType(GQLParser.PathValueTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathValueType}.
	 * @param ctx the parse tree
	 */
	void exitPathValueType(GQLParser.PathValueTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#notNull}.
	 * @param ctx the parse tree
	 */
	void enterNotNull(GQLParser.NotNullContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#notNull}.
	 * @param ctx the parse tree
	 */
	void exitNotNull(GQLParser.NotNullContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#fieldType}.
	 * @param ctx the parse tree
	 */
	void enterFieldType(GQLParser.FieldTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#fieldType}.
	 * @param ctx the parse tree
	 */
	void exitFieldType(GQLParser.FieldTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#schemaReference}.
	 * @param ctx the parse tree
	 */
	void enterSchemaReference(GQLParser.SchemaReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#schemaReference}.
	 * @param ctx the parse tree
	 */
	void exitSchemaReference(GQLParser.SchemaReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#absoluteCatalogSchemaReference}.
	 * @param ctx the parse tree
	 */
	void enterAbsoluteCatalogSchemaReference(GQLParser.AbsoluteCatalogSchemaReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#absoluteCatalogSchemaReference}.
	 * @param ctx the parse tree
	 */
	void exitAbsoluteCatalogSchemaReference(GQLParser.AbsoluteCatalogSchemaReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#catalogSchemaParentAndName}.
	 * @param ctx the parse tree
	 */
	void enterCatalogSchemaParentAndName(GQLParser.CatalogSchemaParentAndNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#catalogSchemaParentAndName}.
	 * @param ctx the parse tree
	 */
	void exitCatalogSchemaParentAndName(GQLParser.CatalogSchemaParentAndNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#relativeCatalogSchemaReference}.
	 * @param ctx the parse tree
	 */
	void enterRelativeCatalogSchemaReference(GQLParser.RelativeCatalogSchemaReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#relativeCatalogSchemaReference}.
	 * @param ctx the parse tree
	 */
	void exitRelativeCatalogSchemaReference(GQLParser.RelativeCatalogSchemaReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#predefinedSchemaReference}.
	 * @param ctx the parse tree
	 */
	void enterPredefinedSchemaReference(GQLParser.PredefinedSchemaReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#predefinedSchemaReference}.
	 * @param ctx the parse tree
	 */
	void exitPredefinedSchemaReference(GQLParser.PredefinedSchemaReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#absoluteDirectoryPath}.
	 * @param ctx the parse tree
	 */
	void enterAbsoluteDirectoryPath(GQLParser.AbsoluteDirectoryPathContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#absoluteDirectoryPath}.
	 * @param ctx the parse tree
	 */
	void exitAbsoluteDirectoryPath(GQLParser.AbsoluteDirectoryPathContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#relativeDirectoryPath}.
	 * @param ctx the parse tree
	 */
	void enterRelativeDirectoryPath(GQLParser.RelativeDirectoryPathContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#relativeDirectoryPath}.
	 * @param ctx the parse tree
	 */
	void exitRelativeDirectoryPath(GQLParser.RelativeDirectoryPathContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleDirectoryPath}.
	 * @param ctx the parse tree
	 */
	void enterSimpleDirectoryPath(GQLParser.SimpleDirectoryPathContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleDirectoryPath}.
	 * @param ctx the parse tree
	 */
	void exitSimpleDirectoryPath(GQLParser.SimpleDirectoryPathContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphReference}.
	 * @param ctx the parse tree
	 */
	void enterGraphReference(GQLParser.GraphReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphReference}.
	 * @param ctx the parse tree
	 */
	void exitGraphReference(GQLParser.GraphReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#catalogGraphParentAndName}.
	 * @param ctx the parse tree
	 */
	void enterCatalogGraphParentAndName(GQLParser.CatalogGraphParentAndNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#catalogGraphParentAndName}.
	 * @param ctx the parse tree
	 */
	void exitCatalogGraphParentAndName(GQLParser.CatalogGraphParentAndNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#homeGraph}.
	 * @param ctx the parse tree
	 */
	void enterHomeGraph(GQLParser.HomeGraphContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#homeGraph}.
	 * @param ctx the parse tree
	 */
	void exitHomeGraph(GQLParser.HomeGraphContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#graphTypeReference}.
	 * @param ctx the parse tree
	 */
	void enterGraphTypeReference(GQLParser.GraphTypeReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#graphTypeReference}.
	 * @param ctx the parse tree
	 */
	void exitGraphTypeReference(GQLParser.GraphTypeReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#catalogGraphTypeParentAndName}.
	 * @param ctx the parse tree
	 */
	void enterCatalogGraphTypeParentAndName(GQLParser.CatalogGraphTypeParentAndNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#catalogGraphTypeParentAndName}.
	 * @param ctx the parse tree
	 */
	void exitCatalogGraphTypeParentAndName(GQLParser.CatalogGraphTypeParentAndNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#bindingTableReference}.
	 * @param ctx the parse tree
	 */
	void enterBindingTableReference(GQLParser.BindingTableReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#bindingTableReference}.
	 * @param ctx the parse tree
	 */
	void exitBindingTableReference(GQLParser.BindingTableReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#catalogBindingTableParentAndName}.
	 * @param ctx the parse tree
	 */
	void enterCatalogBindingTableParentAndName(GQLParser.CatalogBindingTableParentAndNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#catalogBindingTableParentAndName}.
	 * @param ctx the parse tree
	 */
	void exitCatalogBindingTableParentAndName(GQLParser.CatalogBindingTableParentAndNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#procedureReference}.
	 * @param ctx the parse tree
	 */
	void enterProcedureReference(GQLParser.ProcedureReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#procedureReference}.
	 * @param ctx the parse tree
	 */
	void exitProcedureReference(GQLParser.ProcedureReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#catalogProcedureParentAndName}.
	 * @param ctx the parse tree
	 */
	void enterCatalogProcedureParentAndName(GQLParser.CatalogProcedureParentAndNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#catalogProcedureParentAndName}.
	 * @param ctx the parse tree
	 */
	void exitCatalogProcedureParentAndName(GQLParser.CatalogProcedureParentAndNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#catalogObjectParentReference}.
	 * @param ctx the parse tree
	 */
	void enterCatalogObjectParentReference(GQLParser.CatalogObjectParentReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#catalogObjectParentReference}.
	 * @param ctx the parse tree
	 */
	void exitCatalogObjectParentReference(GQLParser.CatalogObjectParentReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#referenceParameter}.
	 * @param ctx the parse tree
	 */
	void enterReferenceParameter(GQLParser.ReferenceParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#referenceParameter}.
	 * @param ctx the parse tree
	 */
	void exitReferenceParameter(GQLParser.ReferenceParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#externalObjectReference}.
	 * @param ctx the parse tree
	 */
	void enterExternalObjectReference(GQLParser.ExternalObjectReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#externalObjectReference}.
	 * @param ctx the parse tree
	 */
	void exitExternalObjectReference(GQLParser.ExternalObjectReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#comparisonPredicateCond}.
	 * @param ctx the parse tree
	 */
	void enterComparisonPredicateCond(GQLParser.ComparisonPredicateCondContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#comparisonPredicateCond}.
	 * @param ctx the parse tree
	 */
	void exitComparisonPredicateCond(GQLParser.ComparisonPredicateCondContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#compOp}.
	 * @param ctx the parse tree
	 */
	void enterCompOp(GQLParser.CompOpContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#compOp}.
	 * @param ctx the parse tree
	 */
	void exitCompOp(GQLParser.CompOpContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#nullPredicateCond}.
	 * @param ctx the parse tree
	 */
	void enterNullPredicateCond(GQLParser.NullPredicateCondContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#nullPredicateCond}.
	 * @param ctx the parse tree
	 */
	void exitNullPredicateCond(GQLParser.NullPredicateCondContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#normalizedPredicateCond}.
	 * @param ctx the parse tree
	 */
	void enterNormalizedPredicateCond(GQLParser.NormalizedPredicateCondContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#normalizedPredicateCond}.
	 * @param ctx the parse tree
	 */
	void exitNormalizedPredicateCond(GQLParser.NormalizedPredicateCondContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#directedPredicateCond}.
	 * @param ctx the parse tree
	 */
	void enterDirectedPredicateCond(GQLParser.DirectedPredicateCondContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#directedPredicateCond}.
	 * @param ctx the parse tree
	 */
	void exitDirectedPredicateCond(GQLParser.DirectedPredicateCondContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#labeledPredicateCond}.
	 * @param ctx the parse tree
	 */
	void enterLabeledPredicateCond(GQLParser.LabeledPredicateCondContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#labeledPredicateCond}.
	 * @param ctx the parse tree
	 */
	void exitLabeledPredicateCond(GQLParser.LabeledPredicateCondContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#sourceDestinationPredicateCond}.
	 * @param ctx the parse tree
	 */
	void enterSourceDestinationPredicateCond(GQLParser.SourceDestinationPredicateCondContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#sourceDestinationPredicateCond}.
	 * @param ctx the parse tree
	 */
	void exitSourceDestinationPredicateCond(GQLParser.SourceDestinationPredicateCondContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unsignedValueSpecification}.
	 * @param ctx the parse tree
	 */
	void enterUnsignedValueSpecification(GQLParser.UnsignedValueSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unsignedValueSpecification}.
	 * @param ctx the parse tree
	 */
	void exitUnsignedValueSpecification(GQLParser.UnsignedValueSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unsignedIntegerSpecification}.
	 * @param ctx the parse tree
	 */
	void enterUnsignedIntegerSpecification(GQLParser.UnsignedIntegerSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unsignedIntegerSpecification}.
	 * @param ctx the parse tree
	 */
	void exitUnsignedIntegerSpecification(GQLParser.UnsignedIntegerSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#parameterValueSpecification}.
	 * @param ctx the parse tree
	 */
	void enterParameterValueSpecification(GQLParser.ParameterValueSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#parameterValueSpecification}.
	 * @param ctx the parse tree
	 */
	void exitParameterValueSpecification(GQLParser.ParameterValueSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#predefinedParameter}.
	 * @param ctx the parse tree
	 */
	void enterPredefinedParameter(GQLParser.PredefinedParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#predefinedParameter}.
	 * @param ctx the parse tree
	 */
	void exitPredefinedParameter(GQLParser.PredefinedParameterContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlPredicateExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterGqlPredicateExpression(GQLParser.GqlPredicateExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlPredicateExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitGqlPredicateExpression(GQLParser.GqlPredicateExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlNotExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterGqlNotExpression(GQLParser.GqlNotExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlNotExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitGqlNotExpression(GQLParser.GqlNotExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlLogicalXorExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterGqlLogicalXorExpression(GQLParser.GqlLogicalXorExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlLogicalXorExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitGqlLogicalXorExpression(GQLParser.GqlLogicalXorExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlLogicalOrExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterGqlLogicalOrExpression(GQLParser.GqlLogicalOrExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlLogicalOrExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitGqlLogicalOrExpression(GQLParser.GqlLogicalOrExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlLogicalAndExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterGqlLogicalAndExpression(GQLParser.GqlLogicalAndExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlLogicalAndExpression}
	 * labeled alternative in {@link GQLParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitGqlLogicalAndExpression(GQLParser.GqlLogicalAndExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlAtomExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlAtomExpression(GQLParser.GqlAtomExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlAtomExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlAtomExpression(GQLParser.GqlAtomExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlNormalizedExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlNormalizedExpression(GQLParser.GqlNormalizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlNormalizedExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlNormalizedExpression(GQLParser.GqlNormalizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlSameExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlSameExpression(GQLParser.GqlSameExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlSameExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlSameExpression(GQLParser.GqlSameExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlDirectedExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlDirectedExpression(GQLParser.GqlDirectedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlDirectedExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlDirectedExpression(GQLParser.GqlDirectedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlBooleanTestExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlBooleanTestExpression(GQLParser.GqlBooleanTestExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlBooleanTestExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlBooleanTestExpression(GQLParser.GqlBooleanTestExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlGraphRefValueExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlGraphRefValueExpression(GQLParser.GqlGraphRefValueExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlGraphRefValueExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlGraphRefValueExpression(GQLParser.GqlGraphRefValueExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlAllDifferentExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlAllDifferentExpression(GQLParser.GqlAllDifferentExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlAllDifferentExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlAllDifferentExpression(GQLParser.GqlAllDifferentExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlExistsExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlExistsExpression(GQLParser.GqlExistsExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlExistsExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlExistsExpression(GQLParser.GqlExistsExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlLetExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlLetExpression(GQLParser.GqlLetExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlLetExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlLetExpression(GQLParser.GqlLetExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlComparisonExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlComparisonExpression(GQLParser.GqlComparisonExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlComparisonExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlComparisonExpression(GQLParser.GqlComparisonExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlLabeledExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlLabeledExpression(GQLParser.GqlLabeledExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlLabeledExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlLabeledExpression(GQLParser.GqlLabeledExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlPropertyExistExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlPropertyExistExpression(GQLParser.GqlPropertyExistExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlPropertyExistExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlPropertyExistExpression(GQLParser.GqlPropertyExistExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlNullExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlNullExpression(GQLParser.GqlNullExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlNullExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlNullExpression(GQLParser.GqlNullExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlSourceDestinationExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlSourceDestinationExpression(GQLParser.GqlSourceDestinationExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlSourceDestinationExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlSourceDestinationExpression(GQLParser.GqlSourceDestinationExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlBindingTableValueExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void enterGqlBindingTableValueExpression(GQLParser.GqlBindingTableValueExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlBindingTableValueExpression}
	 * labeled alternative in {@link GQLParser#expressionPredicate}.
	 * @param ctx the parse tree
	 */
	void exitGqlBindingTableValueExpression(GQLParser.GqlBindingTableValueExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlParameterExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlParameterExpression(GQLParser.GqlParameterExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlParameterExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlParameterExpression(GQLParser.GqlParameterExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlUnaryExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlUnaryExpression(GQLParser.GqlUnaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlUnaryExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlUnaryExpression(GQLParser.GqlUnaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlPropertyReference}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlPropertyReference(GQLParser.GqlPropertyReferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlPropertyReference}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlPropertyReference(GQLParser.GqlPropertyReferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlHighArithmeticExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlHighArithmeticExpression(GQLParser.GqlHighArithmeticExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlHighArithmeticExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlHighArithmeticExpression(GQLParser.GqlHighArithmeticExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlValueQueryExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlValueQueryExpression(GQLParser.GqlValueQueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlValueQueryExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlValueQueryExpression(GQLParser.GqlValueQueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlLiteralExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlLiteralExpression(GQLParser.GqlLiteralExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlLiteralExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlLiteralExpression(GQLParser.GqlLiteralExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlCollectionExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlCollectionExpression(GQLParser.GqlCollectionExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlCollectionExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlCollectionExpression(GQLParser.GqlCollectionExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlConcatenationExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlConcatenationExpression(GQLParser.GqlConcatenationExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlConcatenationExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlConcatenationExpression(GQLParser.GqlConcatenationExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlLowArithmeticExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlLowArithmeticExpression(GQLParser.GqlLowArithmeticExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlLowArithmeticExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlLowArithmeticExpression(GQLParser.GqlLowArithmeticExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlParenthesizedExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlParenthesizedExpression(GQLParser.GqlParenthesizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlParenthesizedExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlParenthesizedExpression(GQLParser.GqlParenthesizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlFunctionExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlFunctionExpression(GQLParser.GqlFunctionExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlFunctionExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlFunctionExpression(GQLParser.GqlFunctionExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlVariableExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void enterGqlVariableExpression(GQLParser.GqlVariableExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlVariableExpression}
	 * labeled alternative in {@link GQLParser#expressionAtom}.
	 * @param ctx the parse tree
	 */
	void exitGqlVariableExpression(GQLParser.GqlVariableExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#truthValue}.
	 * @param ctx the parse tree
	 */
	void enterTruthValue(GQLParser.TruthValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#truthValue}.
	 * @param ctx the parse tree
	 */
	void exitTruthValue(GQLParser.TruthValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unaryOperator}.
	 * @param ctx the parse tree
	 */
	void enterUnaryOperator(GQLParser.UnaryOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unaryOperator}.
	 * @param ctx the parse tree
	 */
	void exitUnaryOperator(GQLParser.UnaryOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(GQLParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(GQLParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlOneArgScalarFunction}
	 * labeled alternative in {@link GQLParser#numericFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlOneArgScalarFunction(GQLParser.GqlOneArgScalarFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlOneArgScalarFunction}
	 * labeled alternative in {@link GQLParser#numericFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlOneArgScalarFunction(GQLParser.GqlOneArgScalarFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlTwoArgScalarFunction}
	 * labeled alternative in {@link GQLParser#numericFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlTwoArgScalarFunction(GQLParser.GqlTwoArgScalarFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlTwoArgScalarFunction}
	 * labeled alternative in {@link GQLParser#numericFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlTwoArgScalarFunction(GQLParser.GqlTwoArgScalarFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#functionParameter}.
	 * @param ctx the parse tree
	 */
	void enterFunctionParameter(GQLParser.FunctionParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#functionParameter}.
	 * @param ctx the parse tree
	 */
	void exitFunctionParameter(GQLParser.FunctionParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#propertyReference}.
	 * @param ctx the parse tree
	 */
	void enterPropertyReference(GQLParser.PropertyReferenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#propertyReference}.
	 * @param ctx the parse tree
	 */
	void exitPropertyReference(GQLParser.PropertyReferenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#oneArgNumericFunctionName}.
	 * @param ctx the parse tree
	 */
	void enterOneArgNumericFunctionName(GQLParser.OneArgNumericFunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#oneArgNumericFunctionName}.
	 * @param ctx the parse tree
	 */
	void exitOneArgNumericFunctionName(GQLParser.OneArgNumericFunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#twoArgNumericFunctionName}.
	 * @param ctx the parse tree
	 */
	void enterTwoArgNumericFunctionName(GQLParser.TwoArgNumericFunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#twoArgNumericFunctionName}.
	 * @param ctx the parse tree
	 */
	void exitTwoArgNumericFunctionName(GQLParser.TwoArgNumericFunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlSubstringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlSubstringFunction(GQLParser.GqlSubstringFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlSubstringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlSubstringFunction(GQLParser.GqlSubstringFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlFoldStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlFoldStringFunction(GQLParser.GqlFoldStringFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlFoldStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlFoldStringFunction(GQLParser.GqlFoldStringFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlSingleTrimStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlSingleTrimStringFunction(GQLParser.GqlSingleTrimStringFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlSingleTrimStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlSingleTrimStringFunction(GQLParser.GqlSingleTrimStringFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlMultiTrimStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlMultiTrimStringFunction(GQLParser.GqlMultiTrimStringFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlMultiTrimStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlMultiTrimStringFunction(GQLParser.GqlMultiTrimStringFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlNormStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlNormStringFunction(GQLParser.GqlNormStringFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlNormStringFunction}
	 * labeled alternative in {@link GQLParser#stringFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlNormStringFunction(GQLParser.GqlNormStringFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlListTrimFunction}
	 * labeled alternative in {@link GQLParser#listFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlListTrimFunction(GQLParser.GqlListTrimFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlListTrimFunction}
	 * labeled alternative in {@link GQLParser#listFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlListTrimFunction(GQLParser.GqlListTrimFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlElementsOfPathFunction}
	 * labeled alternative in {@link GQLParser#listFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlElementsOfPathFunction(GQLParser.GqlElementsOfPathFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlElementsOfPathFunction}
	 * labeled alternative in {@link GQLParser#listFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlElementsOfPathFunction(GQLParser.GqlElementsOfPathFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlNullIfCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlNullIfCaseFunction(GQLParser.GqlNullIfCaseFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlNullIfCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlNullIfCaseFunction(GQLParser.GqlNullIfCaseFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlCoalesceCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlCoalesceCaseFunction(GQLParser.GqlCoalesceCaseFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlCoalesceCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlCoalesceCaseFunction(GQLParser.GqlCoalesceCaseFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlSimpleCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlSimpleCaseFunction(GQLParser.GqlSimpleCaseFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlSimpleCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlSimpleCaseFunction(GQLParser.GqlSimpleCaseFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlSearchedCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlSearchedCaseFunction(GQLParser.GqlSearchedCaseFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlSearchedCaseFunction}
	 * labeled alternative in {@link GQLParser#caseFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlSearchedCaseFunction(GQLParser.GqlSearchedCaseFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#simpleWhenClause}.
	 * @param ctx the parse tree
	 */
	void enterSimpleWhenClause(GQLParser.SimpleWhenClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#simpleWhenClause}.
	 * @param ctx the parse tree
	 */
	void exitSimpleWhenClause(GQLParser.SimpleWhenClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#searchedWhenClause}.
	 * @param ctx the parse tree
	 */
	void enterSearchedWhenClause(GQLParser.SearchedWhenClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#searchedWhenClause}.
	 * @param ctx the parse tree
	 */
	void exitSearchedWhenClause(GQLParser.SearchedWhenClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elseClause}.
	 * @param ctx the parse tree
	 */
	void enterElseClause(GQLParser.ElseClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elseClause}.
	 * @param ctx the parse tree
	 */
	void exitElseClause(GQLParser.ElseClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#whenOperand}.
	 * @param ctx the parse tree
	 */
	void enterWhenOperand(GQLParser.WhenOperandContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#whenOperand}.
	 * @param ctx the parse tree
	 */
	void exitWhenOperand(GQLParser.WhenOperandContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#castFunction}.
	 * @param ctx the parse tree
	 */
	void enterCastFunction(GQLParser.CastFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#castFunction}.
	 * @param ctx the parse tree
	 */
	void exitCastFunction(GQLParser.CastFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#elementIdFunction}.
	 * @param ctx the parse tree
	 */
	void enterElementIdFunction(GQLParser.ElementIdFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#elementIdFunction}.
	 * @param ctx the parse tree
	 */
	void exitElementIdFunction(GQLParser.ElementIdFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#datetimeValueFunction}.
	 * @param ctx the parse tree
	 */
	void enterDatetimeValueFunction(GQLParser.DatetimeValueFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#datetimeValueFunction}.
	 * @param ctx the parse tree
	 */
	void exitDatetimeValueFunction(GQLParser.DatetimeValueFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dateFunction}.
	 * @param ctx the parse tree
	 */
	void enterDateFunction(GQLParser.DateFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dateFunction}.
	 * @param ctx the parse tree
	 */
	void exitDateFunction(GQLParser.DateFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#timeFunction}.
	 * @param ctx the parse tree
	 */
	void enterTimeFunction(GQLParser.TimeFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#timeFunction}.
	 * @param ctx the parse tree
	 */
	void exitTimeFunction(GQLParser.TimeFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#localTimeFunction}.
	 * @param ctx the parse tree
	 */
	void enterLocalTimeFunction(GQLParser.LocalTimeFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#localTimeFunction}.
	 * @param ctx the parse tree
	 */
	void exitLocalTimeFunction(GQLParser.LocalTimeFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#datetimeFunction}.
	 * @param ctx the parse tree
	 */
	void enterDatetimeFunction(GQLParser.DatetimeFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#datetimeFunction}.
	 * @param ctx the parse tree
	 */
	void exitDatetimeFunction(GQLParser.DatetimeFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#localDatetimeFunction}.
	 * @param ctx the parse tree
	 */
	void enterLocalDatetimeFunction(GQLParser.LocalDatetimeFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#localDatetimeFunction}.
	 * @param ctx the parse tree
	 */
	void exitLocalDatetimeFunction(GQLParser.LocalDatetimeFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dateFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void enterDateFunctionParameters(GQLParser.DateFunctionParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dateFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void exitDateFunctionParameters(GQLParser.DateFunctionParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#timeFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void enterTimeFunctionParameters(GQLParser.TimeFunctionParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#timeFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void exitTimeFunctionParameters(GQLParser.TimeFunctionParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#datetimeFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void enterDatetimeFunctionParameters(GQLParser.DatetimeFunctionParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#datetimeFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void exitDatetimeFunctionParameters(GQLParser.DatetimeFunctionParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#dateString}.
	 * @param ctx the parse tree
	 */
	void enterDateString(GQLParser.DateStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#dateString}.
	 * @param ctx the parse tree
	 */
	void exitDateString(GQLParser.DateStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#timeString}.
	 * @param ctx the parse tree
	 */
	void enterTimeString(GQLParser.TimeStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#timeString}.
	 * @param ctx the parse tree
	 */
	void exitTimeString(GQLParser.TimeStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#datetimeString}.
	 * @param ctx the parse tree
	 */
	void enterDatetimeString(GQLParser.DatetimeStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#datetimeString}.
	 * @param ctx the parse tree
	 */
	void exitDatetimeString(GQLParser.DatetimeStringContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlDatetimeSubtractionFunction}
	 * labeled alternative in {@link GQLParser#durationFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlDatetimeSubtractionFunction(GQLParser.GqlDatetimeSubtractionFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlDatetimeSubtractionFunction}
	 * labeled alternative in {@link GQLParser#durationFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlDatetimeSubtractionFunction(GQLParser.GqlDatetimeSubtractionFunctionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code gqlDurationFunction}
	 * labeled alternative in {@link GQLParser#durationFunction}.
	 * @param ctx the parse tree
	 */
	void enterGqlDurationFunction(GQLParser.GqlDurationFunctionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code gqlDurationFunction}
	 * labeled alternative in {@link GQLParser#durationFunction}.
	 * @param ctx the parse tree
	 */
	void exitGqlDurationFunction(GQLParser.GqlDurationFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#durationFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void enterDurationFunctionParameters(GQLParser.DurationFunctionParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#durationFunctionParameters}.
	 * @param ctx the parse tree
	 */
	void exitDurationFunctionParameters(GQLParser.DurationFunctionParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#durationString}.
	 * @param ctx the parse tree
	 */
	void enterDurationString(GQLParser.DurationStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#durationString}.
	 * @param ctx the parse tree
	 */
	void exitDurationString(GQLParser.DurationStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#generalFunction}.
	 * @param ctx the parse tree
	 */
	void enterGeneralFunction(GQLParser.GeneralFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#generalFunction}.
	 * @param ctx the parse tree
	 */
	void exitGeneralFunction(GQLParser.GeneralFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#collectionValueConstructor}.
	 * @param ctx the parse tree
	 */
	void enterCollectionValueConstructor(GQLParser.CollectionValueConstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#collectionValueConstructor}.
	 * @param ctx the parse tree
	 */
	void exitCollectionValueConstructor(GQLParser.CollectionValueConstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#trimSpecification}.
	 * @param ctx the parse tree
	 */
	void enterTrimSpecification(GQLParser.TrimSpecificationContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#trimSpecification}.
	 * @param ctx the parse tree
	 */
	void exitTrimSpecification(GQLParser.TrimSpecificationContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#normalForm}.
	 * @param ctx the parse tree
	 */
	void enterNormalForm(GQLParser.NormalFormContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#normalForm}.
	 * @param ctx the parse tree
	 */
	void exitNormalForm(GQLParser.NormalFormContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#listValueConstructor}.
	 * @param ctx the parse tree
	 */
	void enterListValueConstructor(GQLParser.ListValueConstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#listValueConstructor}.
	 * @param ctx the parse tree
	 */
	void exitListValueConstructor(GQLParser.ListValueConstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#recordValueConstructor}.
	 * @param ctx the parse tree
	 */
	void enterRecordValueConstructor(GQLParser.RecordValueConstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#recordValueConstructor}.
	 * @param ctx the parse tree
	 */
	void exitRecordValueConstructor(GQLParser.RecordValueConstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#field}.
	 * @param ctx the parse tree
	 */
	void enterField(GQLParser.FieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#field}.
	 * @param ctx the parse tree
	 */
	void exitField(GQLParser.FieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#pathValueConstructor}.
	 * @param ctx the parse tree
	 */
	void enterPathValueConstructor(GQLParser.PathValueConstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#pathValueConstructor}.
	 * @param ctx the parse tree
	 */
	void exitPathValueConstructor(GQLParser.PathValueConstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#unsignedLiteral}.
	 * @param ctx the parse tree
	 */
	void enterUnsignedLiteral(GQLParser.UnsignedLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#unsignedLiteral}.
	 * @param ctx the parse tree
	 */
	void exitUnsignedLiteral(GQLParser.UnsignedLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#generalLiteral}.
	 * @param ctx the parse tree
	 */
	void enterGeneralLiteral(GQLParser.GeneralLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#generalLiteral}.
	 * @param ctx the parse tree
	 */
	void exitGeneralLiteral(GQLParser.GeneralLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#listLiteral}.
	 * @param ctx the parse tree
	 */
	void enterListLiteral(GQLParser.ListLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#listLiteral}.
	 * @param ctx the parse tree
	 */
	void exitListLiteral(GQLParser.ListLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#recordLiteral}.
	 * @param ctx the parse tree
	 */
	void enterRecordLiteral(GQLParser.RecordLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#recordLiteral}.
	 * @param ctx the parse tree
	 */
	void exitRecordLiteral(GQLParser.RecordLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#recordFieldLiteral}.
	 * @param ctx the parse tree
	 */
	void enterRecordFieldLiteral(GQLParser.RecordFieldLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#recordFieldLiteral}.
	 * @param ctx the parse tree
	 */
	void exitRecordFieldLiteral(GQLParser.RecordFieldLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link GQLParser#keyword}.
	 * @param ctx the parse tree
	 */
	void enterKeyword(GQLParser.KeywordContext ctx);
	/**
	 * Exit a parse tree produced by {@link GQLParser#keyword}.
	 * @param ctx the parse tree
	 */
	void exitKeyword(GQLParser.KeywordContext ctx);
}