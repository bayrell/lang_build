/*!
 *  Bayrell Common Languages Transcompiler
 *
 *  (c) Copyright 2016-2018 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.bayrell.org/licenses/APACHE-LICENSE-2.0.html
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


module.exports = {
	VERSION: '0.2.0',
	'Exceptions': {
		'HexNumberExpected': require("./Exceptions/HexNumberExpected.js"),
	},
	'LangBay': {
		'ParserBay': require("./LangBay/ParserBay.js"),
		'ParserBayToken': require("./LangBay/ParserBayToken.js"),
	},
	'LangES6': {
		'TranslatorES6': require("./LangES6/TranslatorES6.js"),
	},
	'OpCodes': {
		'BaseOpCode': require("./OpCodes/BaseOpCode.js"),
		'OpAdd': require("./OpCodes/OpAdd.js"),
		'OpAnd': require("./OpCodes/OpAnd.js"),
		'OpBitAnd': require("./OpCodes/OpBitAnd.js"),
		'OpBitNot': require("./OpCodes/OpBitNot.js"),
		'OpBitOr': require("./OpCodes/OpBitOr.js"),
		'OpBitXor': require("./OpCodes/OpBitXor.js"),
		'OpCall': require("./OpCodes/OpCall.js"),
		'OpCallAwait': require("./OpCodes/OpCallAwait.js"),
		'OpChilds': require("./OpCodes/OpChilds.js"),
		'OpClone': require("./OpCodes/OpClone.js"),
		'OpCompare': require("./OpCodes/OpCompare.js"),
		'OpConcat': require("./OpCodes/OpConcat.js"),
		'OpDiv': require("./OpCodes/OpDiv.js"),
		'OpDynamic': require("./OpCodes/OpDynamic.js"),
		'OpFlags': require("./OpCodes/OpFlags.js"),
		'OpHexNumber': require("./OpCodes/OpHexNumber.js"),
		'OpIdentifier': require("./OpCodes/OpIdentifier.js"),
		'OpMod': require("./OpCodes/OpMod.js"),
		'OpMult': require("./OpCodes/OpMult.js"),
		'OpNew': require("./OpCodes/OpNew.js"),
		'OpNot': require("./OpCodes/OpNot.js"),
		'OpNumber': require("./OpCodes/OpNumber.js"),
		'OpOr': require("./OpCodes/OpOr.js"),
		'OpPostDec': require("./OpCodes/OpPostDec.js"),
		'OpPostInc': require("./OpCodes/OpPostInc.js"),
		'OpPow': require("./OpCodes/OpPow.js"),
		'OpPreDec': require("./OpCodes/OpPreDec.js"),
		'OpPreInc': require("./OpCodes/OpPreInc.js"),
		'OpShiftLeft': require("./OpCodes/OpShiftLeft.js"),
		'OpShiftRight': require("./OpCodes/OpShiftRight.js"),
		'OpStatic': require("./OpCodes/OpStatic.js"),
		'OpString': require("./OpCodes/OpString.js"),
		'OpSub': require("./OpCodes/OpSub.js"),
		'OpTernary': require("./OpCodes/OpTernary.js"),
		'OpTypeIdentifier': require("./OpCodes/OpTypeIdentifier.js"),
		'OpValue1': require("./OpCodes/OpValue1.js"),
		'OpValue2': require("./OpCodes/OpValue2.js"),
		'OpValueString': require("./OpCodes/OpValueString.js"),
	},
	'CommonParser': require("./CommonParser.js"),
	'CommonTranslator': require("./CommonTranslator.js"),
	'ModuleDescription': require("./ModuleDescription.js"),
};

