// Generated from src/grammar/mql/MQLParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MQLParserListener from './MQLParserListener.js';
const serializedATN = [4,1,89,716,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,1,0,3,0,126,8,0,1,
0,1,0,1,0,3,0,131,8,0,1,0,1,0,1,1,1,1,3,1,137,8,1,1,1,3,1,140,8,1,1,1,3,
1,143,8,1,1,1,3,1,146,8,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,3,2,160,8,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,5,4,170,8,4,10,4,12,4,173,
9,4,1,4,1,4,1,5,1,5,1,5,3,5,180,8,5,1,6,1,6,1,6,1,6,3,6,186,8,6,1,7,1,7,
1,7,1,7,5,7,192,8,7,10,7,12,7,195,9,7,1,8,1,8,1,8,1,8,5,8,201,8,8,10,8,12,
8,204,9,8,1,9,1,9,1,9,1,9,5,9,210,8,9,10,9,12,9,213,9,9,1,10,1,10,1,10,3,
10,218,8,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,5,13,244,8,13,
10,13,12,13,247,9,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,
16,5,16,260,8,16,10,16,12,16,263,9,16,1,17,1,17,1,17,1,17,1,17,5,17,270,
8,17,10,17,12,17,273,9,17,1,18,1,18,3,18,277,8,18,1,18,1,18,1,18,5,18,282,
8,18,10,18,12,18,285,9,18,1,18,3,18,288,8,18,1,18,1,18,3,18,292,8,18,1,18,
1,18,3,18,296,8,18,3,18,298,8,18,1,19,1,19,3,19,302,8,19,1,19,1,19,3,19,
306,8,19,3,19,308,8,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,
1,23,1,23,3,23,322,8,23,1,23,1,23,1,23,1,23,3,23,328,8,23,1,23,1,23,1,23,
1,23,1,23,3,23,335,8,23,1,23,1,23,3,23,339,8,23,1,23,3,23,342,8,23,1,23,
3,23,345,8,23,1,24,1,24,1,25,1,25,3,25,351,8,25,1,25,3,25,354,8,25,1,25,
1,25,1,25,1,25,3,25,360,8,25,1,25,1,25,3,25,364,8,25,1,25,1,25,1,25,3,25,
369,8,25,1,25,1,25,3,25,373,8,25,1,25,1,25,3,25,377,8,25,3,25,379,8,25,1,
26,1,26,3,26,383,8,26,1,27,1,27,5,27,387,8,27,10,27,12,27,390,9,27,1,28,
1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,
29,407,8,29,1,29,1,29,3,29,411,8,29,1,29,1,29,1,29,3,29,416,8,29,1,29,3,
29,419,8,29,1,29,1,29,1,30,1,30,1,30,1,30,5,30,427,8,30,10,30,12,30,430,
9,30,1,30,1,30,1,31,1,31,1,31,5,31,437,8,31,10,31,12,31,440,9,31,1,32,1,
32,1,32,3,32,445,8,32,1,32,1,32,5,32,449,8,32,10,32,12,32,452,9,32,1,32,
3,32,455,8,32,1,33,1,33,1,33,3,33,460,8,33,1,33,3,33,463,8,33,1,33,1,33,
1,33,1,33,1,33,1,33,1,33,3,33,472,8,33,1,33,3,33,475,8,33,1,33,1,33,1,33,
1,33,1,33,3,33,482,8,33,1,34,1,34,1,34,5,34,487,8,34,10,34,12,34,490,9,34,
1,35,1,35,1,35,5,35,495,8,35,10,35,12,35,498,9,35,1,36,3,36,501,8,36,1,36,
1,36,3,36,505,8,36,1,36,3,36,508,8,36,1,36,1,36,1,36,1,36,3,36,514,8,36,
3,36,516,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,526,8,37,1,38,
1,38,3,38,530,8,38,1,38,3,38,533,8,38,1,39,1,39,3,39,537,8,39,1,40,1,40,
1,40,1,40,1,41,1,41,1,41,1,41,3,41,547,8,41,1,42,1,42,1,42,3,42,552,8,42,
1,42,1,42,1,42,1,42,1,42,3,42,559,8,42,1,42,3,42,562,8,42,1,43,1,43,3,43,
566,8,43,1,43,3,43,569,8,43,1,43,3,43,572,8,43,1,43,1,43,1,44,1,44,3,44,
578,8,44,1,44,5,44,581,8,44,10,44,12,44,584,9,44,1,44,3,44,587,8,44,1,44,
1,44,1,45,1,45,1,45,1,45,5,45,595,8,45,10,45,12,45,598,9,45,1,45,1,45,1,
46,1,46,1,46,1,46,1,46,3,46,607,8,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,
615,8,46,1,47,1,47,3,47,619,8,47,1,48,1,48,1,49,3,49,624,8,49,1,49,1,49,
1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,3,51,637,8,51,1,52,1,52,1,52,
5,52,642,8,52,10,52,12,52,645,9,52,1,53,1,53,1,53,5,53,650,8,53,10,53,12,
53,653,9,53,1,54,1,54,1,54,3,54,658,8,54,1,54,1,54,1,54,3,54,663,8,54,1,
54,1,54,3,54,667,8,54,1,55,1,55,1,55,5,55,672,8,55,10,55,12,55,675,9,55,
1,56,1,56,1,56,5,56,680,8,56,10,56,12,56,683,9,56,1,57,1,57,1,57,1,57,1,
57,1,57,1,57,3,57,692,8,57,1,58,1,58,3,58,696,8,58,1,58,1,58,1,58,1,58,1,
58,3,58,703,8,58,1,59,1,59,1,59,1,59,1,59,3,59,710,8,59,1,60,1,60,1,61,1,
61,1,61,0,0,62,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,
90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,0,15,3,0,
3,3,15,15,26,26,4,0,16,16,23,23,34,34,36,36,3,0,5,5,28,29,45,45,2,0,7,7,
12,12,1,0,77,78,2,0,4,4,6,6,3,0,1,1,41,41,48,49,2,0,54,54,58,58,1,0,56,57,
2,0,20,20,47,47,1,0,60,62,1,0,64,69,2,0,71,71,74,75,5,0,9,9,18,18,21,21,
39,39,46,46,4,0,1,19,21,34,36,46,48,50,764,0,125,1,0,0,0,2,134,1,0,0,0,4,
149,1,0,0,0,6,165,1,0,0,0,8,167,1,0,0,0,10,176,1,0,0,0,12,181,1,0,0,0,14,
187,1,0,0,0,16,196,1,0,0,0,18,205,1,0,0,0,20,214,1,0,0,0,22,223,1,0,0,0,
24,231,1,0,0,0,26,239,1,0,0,0,28,248,1,0,0,0,30,251,1,0,0,0,32,254,1,0,0,
0,34,264,1,0,0,0,36,297,1,0,0,0,38,307,1,0,0,0,40,309,1,0,0,0,42,312,1,0,
0,0,44,315,1,0,0,0,46,344,1,0,0,0,48,346,1,0,0,0,50,378,1,0,0,0,52,380,1,
0,0,0,54,384,1,0,0,0,56,391,1,0,0,0,58,396,1,0,0,0,60,422,1,0,0,0,62,433,
1,0,0,0,64,454,1,0,0,0,66,481,1,0,0,0,68,483,1,0,0,0,70,491,1,0,0,0,72,515,
1,0,0,0,74,525,1,0,0,0,76,527,1,0,0,0,78,536,1,0,0,0,80,538,1,0,0,0,82,546,
1,0,0,0,84,561,1,0,0,0,86,563,1,0,0,0,88,575,1,0,0,0,90,590,1,0,0,0,92,614,
1,0,0,0,94,618,1,0,0,0,96,620,1,0,0,0,98,623,1,0,0,0,100,627,1,0,0,0,102,
636,1,0,0,0,104,638,1,0,0,0,106,646,1,0,0,0,108,666,1,0,0,0,110,668,1,0,
0,0,112,676,1,0,0,0,114,691,1,0,0,0,116,702,1,0,0,0,118,709,1,0,0,0,120,
711,1,0,0,0,122,713,1,0,0,0,124,126,3,26,13,0,125,124,1,0,0,0,125,126,1,
0,0,0,126,130,1,0,0,0,127,131,3,2,1,0,128,131,3,8,4,0,129,131,3,12,6,0,130,
127,1,0,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,132,1,0,0,0,132,133,5,0,
0,1,133,1,1,0,0,0,134,136,3,28,14,0,135,137,3,4,2,0,136,135,1,0,0,0,136,
137,1,0,0,0,137,139,1,0,0,0,138,140,3,30,15,0,139,138,1,0,0,0,139,140,1,
0,0,0,140,142,1,0,0,0,141,143,3,32,16,0,142,141,1,0,0,0,142,143,1,0,0,0,
143,145,1,0,0,0,144,146,3,34,17,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,
1,0,0,0,147,148,3,36,18,0,148,3,1,0,0,0,149,150,5,35,0,0,150,151,5,79,0,
0,151,152,5,58,0,0,152,153,5,85,0,0,153,154,5,58,0,0,154,155,5,85,0,0,155,
156,5,59,0,0,156,159,5,85,0,0,157,160,3,82,41,0,158,160,3,60,30,0,159,157,
1,0,0,0,159,158,1,0,0,0,160,161,1,0,0,0,161,162,5,85,0,0,162,163,3,6,3,0,
163,164,5,80,0,0,164,5,1,0,0,0,165,166,7,0,0,0,166,7,1,0,0,0,167,171,5,11,
0,0,168,170,3,10,5,0,169,168,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,
172,1,0,0,0,172,174,1,0,0,0,173,171,1,0,0,0,174,175,3,82,41,0,175,9,1,0,
0,0,176,179,7,1,0,0,177,178,5,25,0,0,178,180,5,60,0,0,179,177,1,0,0,0,179,
180,1,0,0,0,180,11,1,0,0,0,181,185,5,17,0,0,182,186,3,14,7,0,183,186,3,16,
8,0,184,186,3,18,9,0,185,182,1,0,0,0,185,183,1,0,0,0,185,184,1,0,0,0,186,
13,1,0,0,0,187,188,5,24,0,0,188,193,3,20,10,0,189,190,5,85,0,0,190,192,3,
20,10,0,191,189,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,
194,15,1,0,0,0,195,193,1,0,0,0,196,197,5,37,0,0,197,202,3,22,11,0,198,199,
5,85,0,0,199,201,3,22,11,0,200,198,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,
0,202,203,1,0,0,0,203,17,1,0,0,0,204,202,1,0,0,0,205,206,5,14,0,0,206,211,
3,24,12,0,207,208,5,85,0,0,208,210,3,24,12,0,209,207,1,0,0,0,210,213,1,0,
0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,19,1,0,0,0,213,211,1,0,0,0,214,217,
5,79,0,0,215,218,3,94,47,0,216,218,5,53,0,0,217,215,1,0,0,0,217,216,1,0,
0,0,218,219,1,0,0,0,219,220,5,85,0,0,220,221,5,59,0,0,221,222,5,80,0,0,222,
21,1,0,0,0,223,224,5,79,0,0,224,225,3,82,41,0,225,226,5,85,0,0,226,227,5,
59,0,0,227,228,5,85,0,0,228,229,3,102,51,0,229,230,5,80,0,0,230,23,1,0,0,
0,231,232,5,79,0,0,232,233,3,82,41,0,233,234,5,85,0,0,234,235,3,82,41,0,
235,236,5,85,0,0,236,237,3,94,47,0,237,238,5,80,0,0,238,25,1,0,0,0,239,240,
5,43,0,0,240,245,3,44,22,0,241,242,5,85,0,0,242,244,3,44,22,0,243,241,1,
0,0,0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,27,1,0,0,0,247,
245,1,0,0,0,248,249,5,27,0,0,249,250,3,54,27,0,250,29,1,0,0,0,251,252,5,
50,0,0,252,253,3,104,52,0,253,31,1,0,0,0,254,255,5,22,0,0,255,256,5,8,0,
0,256,261,3,52,26,0,257,258,5,85,0,0,258,260,3,52,26,0,259,257,1,0,0,0,260,
263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,33,1,0,0,0,263,261,1,0,0,
0,264,265,5,32,0,0,265,266,5,8,0,0,266,271,3,50,25,0,267,268,5,85,0,0,268,
270,3,50,25,0,269,267,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,
0,0,0,272,35,1,0,0,0,273,271,1,0,0,0,274,276,5,42,0,0,275,277,5,13,0,0,276,
275,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,283,3,46,23,0,279,280,5,
85,0,0,280,282,3,46,23,0,281,279,1,0,0,0,282,285,1,0,0,0,283,281,1,0,0,0,
283,284,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,286,288,3,38,19,0,287,286,
1,0,0,0,287,288,1,0,0,0,288,298,1,0,0,0,289,291,5,42,0,0,290,292,5,13,0,
0,291,290,1,0,0,0,291,292,1,0,0,0,292,293,1,0,0,0,293,295,5,74,0,0,294,296,
3,38,19,0,295,294,1,0,0,0,295,296,1,0,0,0,296,298,1,0,0,0,297,274,1,0,0,
0,297,289,1,0,0,0,298,37,1,0,0,0,299,301,3,40,20,0,300,302,3,42,21,0,301,
300,1,0,0,0,301,302,1,0,0,0,302,308,1,0,0,0,303,305,3,42,21,0,304,306,3,
40,20,0,305,304,1,0,0,0,305,306,1,0,0,0,306,308,1,0,0,0,307,299,1,0,0,0,
307,303,1,0,0,0,308,39,1,0,0,0,309,310,5,25,0,0,310,311,5,60,0,0,311,41,
1,0,0,0,312,313,5,30,0,0,313,314,5,60,0,0,314,43,1,0,0,0,315,316,5,58,0,
0,316,317,5,70,0,0,317,318,3,82,41,0,318,45,1,0,0,0,319,321,5,58,0,0,320,
322,5,55,0,0,321,320,1,0,0,0,321,322,1,0,0,0,322,345,1,0,0,0,323,324,3,48,
24,0,324,325,5,79,0,0,325,327,5,58,0,0,326,328,5,55,0,0,327,326,1,0,0,0,
327,328,1,0,0,0,328,329,1,0,0,0,329,330,5,80,0,0,330,345,1,0,0,0,331,332,
5,10,0,0,332,334,5,79,0,0,333,335,5,13,0,0,334,333,1,0,0,0,334,335,1,0,0,
0,335,341,1,0,0,0,336,338,5,58,0,0,337,339,5,55,0,0,338,337,1,0,0,0,338,
339,1,0,0,0,339,342,1,0,0,0,340,342,5,74,0,0,341,336,1,0,0,0,341,340,1,0,
0,0,342,343,1,0,0,0,343,345,5,80,0,0,344,319,1,0,0,0,344,323,1,0,0,0,344,
331,1,0,0,0,345,47,1,0,0,0,346,347,7,2,0,0,347,49,1,0,0,0,348,350,5,58,0,
0,349,351,5,55,0,0,350,349,1,0,0,0,350,351,1,0,0,0,351,353,1,0,0,0,352,354,
7,3,0,0,353,352,1,0,0,0,353,354,1,0,0,0,354,379,1,0,0,0,355,356,3,48,24,
0,356,357,5,79,0,0,357,359,5,58,0,0,358,360,5,55,0,0,359,358,1,0,0,0,359,
360,1,0,0,0,360,361,1,0,0,0,361,363,5,80,0,0,362,364,7,3,0,0,363,362,1,0,
0,0,363,364,1,0,0,0,364,379,1,0,0,0,365,366,5,10,0,0,366,368,5,79,0,0,367,
369,5,13,0,0,368,367,1,0,0,0,368,369,1,0,0,0,369,370,1,0,0,0,370,372,5,58,
0,0,371,373,5,55,0,0,372,371,1,0,0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,
376,5,80,0,0,375,377,7,3,0,0,376,375,1,0,0,0,376,377,1,0,0,0,377,379,1,0,
0,0,378,348,1,0,0,0,378,355,1,0,0,0,378,365,1,0,0,0,379,51,1,0,0,0,380,382,
5,58,0,0,381,383,5,55,0,0,382,381,1,0,0,0,382,383,1,0,0,0,383,53,1,0,0,0,
384,388,3,62,31,0,385,387,3,56,28,0,386,385,1,0,0,0,387,390,1,0,0,0,388,
386,1,0,0,0,388,389,1,0,0,0,389,55,1,0,0,0,390,388,1,0,0,0,391,392,5,31,
0,0,392,393,5,81,0,0,393,394,3,54,27,0,394,395,5,82,0,0,395,57,1,0,0,0,396,
397,5,44,0,0,397,398,5,79,0,0,398,399,5,58,0,0,399,400,5,85,0,0,400,401,
5,58,0,0,401,402,5,85,0,0,402,403,5,59,0,0,403,406,5,85,0,0,404,407,3,82,
41,0,405,407,3,60,30,0,406,404,1,0,0,0,406,405,1,0,0,0,407,408,1,0,0,0,408,
410,5,85,0,0,409,411,7,4,0,0,410,409,1,0,0,0,410,411,1,0,0,0,411,412,1,0,
0,0,412,418,5,60,0,0,413,415,5,85,0,0,414,416,5,77,0,0,415,414,1,0,0,0,415,
416,1,0,0,0,416,417,1,0,0,0,417,419,5,60,0,0,418,413,1,0,0,0,418,419,1,0,
0,0,419,420,1,0,0,0,420,421,5,80,0,0,421,59,1,0,0,0,422,423,5,83,0,0,423,
428,3,98,49,0,424,425,5,85,0,0,425,427,3,98,49,0,426,424,1,0,0,0,427,430,
1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,431,1,0,0,0,430,428,1,0,0,0,
431,432,5,84,0,0,432,61,1,0,0,0,433,438,3,64,32,0,434,435,5,85,0,0,435,437,
3,64,32,0,436,434,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,
0,439,63,1,0,0,0,440,438,1,0,0,0,441,450,3,78,39,0,442,445,3,84,42,0,443,
445,3,66,33,0,444,442,1,0,0,0,444,443,1,0,0,0,445,446,1,0,0,0,446,447,3,
78,39,0,447,449,1,0,0,0,448,444,1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,
450,451,1,0,0,0,451,455,1,0,0,0,452,450,1,0,0,0,453,455,3,58,29,0,454,441,
1,0,0,0,454,453,1,0,0,0,455,65,1,0,0,0,456,457,5,64,0,0,457,459,5,83,0,0,
458,460,3,76,38,0,459,458,1,0,0,0,459,460,1,0,0,0,460,462,1,0,0,0,461,463,
5,58,0,0,462,461,1,0,0,0,462,463,1,0,0,0,463,464,1,0,0,0,464,465,3,68,34,
0,465,466,5,84,0,0,466,467,5,70,0,0,467,482,1,0,0,0,468,469,5,70,0,0,469,
471,5,83,0,0,470,472,3,76,38,0,471,470,1,0,0,0,471,472,1,0,0,0,472,474,1,
0,0,0,473,475,5,58,0,0,474,473,1,0,0,0,474,475,1,0,0,0,475,476,1,0,0,0,476,
477,3,68,34,0,477,478,5,84,0,0,478,479,5,70,0,0,479,480,5,69,0,0,480,482,
1,0,0,0,481,456,1,0,0,0,481,468,1,0,0,0,482,67,1,0,0,0,483,488,3,70,35,0,
484,485,5,72,0,0,485,487,3,70,35,0,486,484,1,0,0,0,487,490,1,0,0,0,488,486,
1,0,0,0,488,489,1,0,0,0,489,69,1,0,0,0,490,488,1,0,0,0,491,496,3,72,36,0,
492,493,5,71,0,0,493,495,3,72,36,0,494,492,1,0,0,0,495,498,1,0,0,0,496,494,
1,0,0,0,496,497,1,0,0,0,497,71,1,0,0,0,498,496,1,0,0,0,499,501,5,73,0,0,
500,499,1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,504,5,56,0,0,503,505,
3,74,37,0,504,503,1,0,0,0,504,505,1,0,0,0,505,516,1,0,0,0,506,508,5,73,0,
0,507,506,1,0,0,0,507,508,1,0,0,0,508,509,1,0,0,0,509,510,5,79,0,0,510,511,
3,68,34,0,511,513,5,80,0,0,512,514,3,74,37,0,513,512,1,0,0,0,513,514,1,0,
0,0,514,516,1,0,0,0,515,500,1,0,0,0,515,507,1,0,0,0,516,73,1,0,0,0,517,526,
5,74,0,0,518,526,5,77,0,0,519,526,5,76,0,0,520,521,5,81,0,0,521,522,5,60,
0,0,522,523,5,85,0,0,523,524,5,60,0,0,524,526,5,82,0,0,525,517,1,0,0,0,525,
518,1,0,0,0,525,519,1,0,0,0,525,520,1,0,0,0,526,75,1,0,0,0,527,529,7,5,0,
0,528,530,5,40,0,0,529,528,1,0,0,0,529,530,1,0,0,0,530,532,1,0,0,0,531,533,
7,6,0,0,532,531,1,0,0,0,532,533,1,0,0,0,533,77,1,0,0,0,534,537,3,80,40,0,
535,537,3,88,44,0,536,534,1,0,0,0,536,535,1,0,0,0,537,79,1,0,0,0,538,539,
5,79,0,0,539,540,3,82,41,0,540,541,5,80,0,0,541,81,1,0,0,0,542,547,3,94,
47,0,543,547,5,53,0,0,544,547,5,54,0,0,545,547,3,102,51,0,546,542,1,0,0,
0,546,543,1,0,0,0,546,544,1,0,0,0,546,545,1,0,0,0,547,83,1,0,0,0,548,551,
5,68,0,0,549,550,5,78,0,0,550,552,3,86,43,0,551,549,1,0,0,0,551,552,1,0,
0,0,552,553,1,0,0,0,553,562,5,78,0,0,554,558,5,78,0,0,555,556,3,86,43,0,
556,557,5,78,0,0,557,559,1,0,0,0,558,555,1,0,0,0,558,559,1,0,0,0,559,560,
1,0,0,0,560,562,5,69,0,0,561,548,1,0,0,0,561,554,1,0,0,0,562,85,1,0,0,0,
563,565,5,83,0,0,564,566,7,7,0,0,565,564,1,0,0,0,565,566,1,0,0,0,566,568,
1,0,0,0,567,569,7,8,0,0,568,567,1,0,0,0,568,569,1,0,0,0,569,571,1,0,0,0,
570,572,3,90,45,0,571,570,1,0,0,0,571,572,1,0,0,0,572,573,1,0,0,0,573,574,
5,84,0,0,574,87,1,0,0,0,575,577,5,79,0,0,576,578,5,58,0,0,577,576,1,0,0,
0,577,578,1,0,0,0,578,582,1,0,0,0,579,581,5,56,0,0,580,579,1,0,0,0,581,584,
1,0,0,0,582,580,1,0,0,0,582,583,1,0,0,0,583,586,1,0,0,0,584,582,1,0,0,0,
585,587,3,90,45,0,586,585,1,0,0,0,586,587,1,0,0,0,587,588,1,0,0,0,588,589,
5,80,0,0,589,89,1,0,0,0,590,591,5,81,0,0,591,596,3,92,46,0,592,593,5,85,
0,0,593,595,3,92,46,0,594,592,1,0,0,0,595,598,1,0,0,0,596,594,1,0,0,0,596,
597,1,0,0,0,597,599,1,0,0,0,598,596,1,0,0,0,599,600,5,82,0,0,600,91,1,0,
0,0,601,606,3,94,47,0,602,603,5,86,0,0,603,607,3,102,51,0,604,607,5,51,0,
0,605,607,5,52,0,0,606,602,1,0,0,0,606,604,1,0,0,0,606,605,1,0,0,0,607,615,
1,0,0,0,608,609,3,94,47,0,609,610,5,56,0,0,610,611,5,79,0,0,611,612,5,59,
0,0,612,613,5,80,0,0,613,615,1,0,0,0,614,601,1,0,0,0,614,608,1,0,0,0,615,
93,1,0,0,0,616,619,5,63,0,0,617,619,3,122,61,0,618,616,1,0,0,0,618,617,1,
0,0,0,619,95,1,0,0,0,620,621,7,9,0,0,621,97,1,0,0,0,622,624,7,4,0,0,623,
622,1,0,0,0,623,624,1,0,0,0,624,625,1,0,0,0,625,626,7,10,0,0,626,99,1,0,
0,0,627,628,3,94,47,0,628,629,5,79,0,0,629,630,5,59,0,0,630,631,5,80,0,0,
631,101,1,0,0,0,632,637,3,98,49,0,633,637,5,59,0,0,634,637,3,96,48,0,635,
637,3,100,50,0,636,632,1,0,0,0,636,633,1,0,0,0,636,634,1,0,0,0,636,635,1,
0,0,0,637,103,1,0,0,0,638,643,3,106,53,0,639,640,5,33,0,0,640,642,3,106,
53,0,641,639,1,0,0,0,642,645,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,
105,1,0,0,0,645,643,1,0,0,0,646,651,3,108,54,0,647,648,5,2,0,0,648,650,3,
108,54,0,649,647,1,0,0,0,650,653,1,0,0,0,651,649,1,0,0,0,651,652,1,0,0,0,
652,107,1,0,0,0,653,651,1,0,0,0,654,657,3,110,55,0,655,656,7,11,0,0,656,
658,3,110,55,0,657,655,1,0,0,0,657,658,1,0,0,0,658,667,1,0,0,0,659,660,3,
110,55,0,660,662,5,19,0,0,661,663,5,38,0,0,662,661,1,0,0,0,662,663,1,0,0,
0,663,664,1,0,0,0,664,665,3,120,60,0,665,667,1,0,0,0,666,654,1,0,0,0,666,
659,1,0,0,0,667,109,1,0,0,0,668,673,3,112,56,0,669,670,7,4,0,0,670,672,3,
112,56,0,671,669,1,0,0,0,672,675,1,0,0,0,673,671,1,0,0,0,673,674,1,0,0,0,
674,111,1,0,0,0,675,673,1,0,0,0,676,681,3,114,57,0,677,678,7,12,0,0,678,
680,3,114,57,0,679,677,1,0,0,0,680,683,1,0,0,0,681,679,1,0,0,0,681,682,1,
0,0,0,682,113,1,0,0,0,683,681,1,0,0,0,684,685,5,38,0,0,685,692,3,114,57,
0,686,687,5,77,0,0,687,692,3,114,57,0,688,689,5,78,0,0,689,692,3,114,57,
0,690,692,3,116,58,0,691,684,1,0,0,0,691,686,1,0,0,0,691,688,1,0,0,0,691,
690,1,0,0,0,692,115,1,0,0,0,693,695,5,58,0,0,694,696,5,55,0,0,695,694,1,
0,0,0,695,696,1,0,0,0,696,703,1,0,0,0,697,703,3,118,59,0,698,699,5,79,0,
0,699,700,3,104,52,0,700,701,5,80,0,0,701,703,1,0,0,0,702,693,1,0,0,0,702,
697,1,0,0,0,702,698,1,0,0,0,703,117,1,0,0,0,704,710,5,60,0,0,705,710,5,61,
0,0,706,710,5,59,0,0,707,710,3,96,48,0,708,710,3,100,50,0,709,704,1,0,0,
0,709,705,1,0,0,0,709,706,1,0,0,0,709,707,1,0,0,0,709,708,1,0,0,0,710,119,
1,0,0,0,711,712,7,13,0,0,712,121,1,0,0,0,713,714,7,14,0,0,714,123,1,0,0,
0,94,125,130,136,139,142,145,159,171,179,185,193,202,211,217,245,261,271,
276,283,287,291,295,297,301,305,307,321,327,334,338,341,344,350,353,359,
363,368,372,376,378,382,388,406,410,415,418,428,438,444,450,454,459,462,
471,474,481,488,496,500,504,507,513,515,525,529,532,536,546,551,558,561,
565,568,571,577,582,586,596,606,614,618,623,636,643,651,657,662,666,673,
681,691,695,702,709];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MQLParser extends antlr4.Parser {

    static grammarFileName = "MQLParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'false'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'true'", null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'<='", "'>='", "'=='", "'!='", 
                            "'<'", "'>'", "'='", "'/'", "'|'", "'^'", "'*'", 
                            "'%'", "'?'", "'+'", "'-'", "'('", "')'", "'{'", 
                            "'}'", "'['", "']'", "','", "':'" ];
    static symbolicNames = [ null, "K_ACYCLIC", "K_AND", "K_ANGULAR", "K_ANY", 
                             "K_AVG", "K_ALL", "K_ASC", "K_BY", "K_BOOL", 
                             "K_COUNT", "K_DESCRIBE", "K_DESC", "K_DISTINCT", 
                             "K_EDGE", "K_EUCLIDEAN", "K_INCOMING", "K_INSERT", 
                             "K_INTEGER", "K_IS", "K_FALSE", "K_FLOAT", 
                             "K_GROUP", "K_LABELS", "K_LABEL", "K_LIMIT", 
                             "K_MANHATTAN", "K_MATCH", "K_MAX", "K_MIN", 
                             "K_OFFSET", "K_OPTIONAL", "K_ORDER", "K_OR", 
                             "K_OUTGOING", "K_PROJECT_SIMILARITY", "K_PROPERTIES", 
                             "K_PROPERTY", "K_NOT", "K_NULL", "K_SHORTEST", 
                             "K_SIMPLE", "K_RETURN", "K_SET", "K_SIMILARITY_SEARCH", 
                             "K_SUM", "K_STRING", "K_TRUE", "K_TRAILS", 
                             "K_WALKS", "K_WHERE", "TRUE_PROP", "FALSE_PROP", 
                             "ANON_ID", "EDGE_ID", "KEY", "TYPE", "TYPE_VAR", 
                             "VARIABLE", "STRING", "UNSIGNED_INTEGER", "UNSIGNED_FLOAT", 
                             "UNSIGNED_SCIENTIFIC_NOTATION", "NAME", "LEQ", 
                             "GEQ", "EQ", "NEQ", "LT", "GT", "SINGLE_EQ", 
                             "PATH_SEQUENCE", "PATH_ALTERNATIVE", "PATH_NEGATION", 
                             "STAR", "PERCENT", "QUESTION_MARK", "PLUS", 
                             "MINUS", "L_PAR", "R_PAR", "LCURLY_BRACKET", 
                             "RCURLY_BRACKET", "LSQUARE_BRACKET", "RSQUARE_BRACKET", 
                             "COMMA", "COLON", "WHITE_SPACE", "SINGLE_LINE_COMMENT", 
                             "UNRECOGNIZED" ];
    static ruleNames = [ "root", "matchQuery", "projectSimilarity", "metricType", 
                         "describeQuery", "describeFlag", "insertQuery", 
                         "insertLabelList", "insertPropertyList", "insertEdgeList", 
                         "insertLabelElement", "insertPropertyElement", 
                         "insertEdgeElement", "setStatement", "matchStatement", 
                         "whereStatement", "groupByStatement", "orderByStatement", 
                         "returnStatement", "limitOffsetClauses", "limitClause", 
                         "offsetClause", "setItem", "returnItem", "aggregateFunc", 
                         "orderByItem", "groupByItem", "graphPattern", "optionalPattern", 
                         "similaritySearch", "tensor", "basicPattern", "linearPattern", 
                         "path", "pathAlternatives", "pathSequence", "pathAtom", 
                         "pathSuffix", "pathType", "node", "fixedNode", 
                         "fixedNodeInside", "edge", "edgeInside", "varNode", 
                         "properties", "property", "identifier", "boolValue", 
                         "numericValue", "datatypeValue", "value", "conditionalOrExpr", 
                         "conditionalAndExpr", "comparisonExpr", "additiveExpr", 
                         "multiplicativeExpr", "unaryExpr", "atomicExpr", 
                         "valueExpr", "exprTypename", "keyword" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MQLParser.ruleNames;
        this.literalNames = MQLParser.literalNames;
        this.symbolicNames = MQLParser.symbolicNames;
    }



	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MQLParser.RULE_root);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 124;
	            this.setStatement();
	        }

	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.state = 127;
	            this.matchQuery();
	            break;
	        case 11:
	            this.state = 128;
	            this.describeQuery();
	            break;
	        case 17:
	            this.state = 129;
	            this.insertQuery();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 132;
	        this.match(MQLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchQuery() {
	    let localctx = new MatchQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MQLParser.RULE_matchQuery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.matchStatement();
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 135;
	            this.projectSimilarity();
	        }

	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 138;
	            this.whereStatement();
	        }

	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 141;
	            this.groupByStatement();
	        }

	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 144;
	            this.orderByStatement();
	        }

	        this.state = 147;
	        this.returnStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	projectSimilarity() {
	    let localctx = new ProjectSimilarityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MQLParser.RULE_projectSimilarity);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(MQLParser.K_PROJECT_SIMILARITY);
	        this.state = 150;
	        this.match(MQLParser.L_PAR);
	        this.state = 151;
	        this.match(MQLParser.VARIABLE);
	        this.state = 152;
	        this.match(MQLParser.COMMA);
	        this.state = 153;
	        this.match(MQLParser.VARIABLE);
	        this.state = 154;
	        this.match(MQLParser.COMMA);
	        this.state = 155;
	        this.match(MQLParser.STRING);
	        this.state = 156;
	        this.match(MQLParser.COMMA);
	        this.state = 159;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 53:
	        case 54:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 77:
	        case 78:
	            this.state = 157;
	            this.fixedNodeInside();
	            break;
	        case 83:
	            this.state = 158;
	            this.tensor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 161;
	        this.match(MQLParser.COMMA);
	        this.state = 162;
	        this.metricType();
	        this.state = 163;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	metricType() {
	    let localctx = new MetricTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MQLParser.RULE_metricType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 67141640) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	describeQuery() {
	    let localctx = new DescribeQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MQLParser.RULE_describeQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(MQLParser.K_DESCRIBE);
	        this.state = 171;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 168;
	                this.describeFlag(); 
	            }
	            this.state = 173;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 174;
	        this.fixedNodeInside();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	describeFlag() {
	    let localctx = new DescribeFlagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MQLParser.RULE_describeFlag);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        _la = this._input.LA(1);
	        if(!(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 1310849) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 179;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 177;
	            this.match(MQLParser.K_LIMIT);
	            this.state = 178;
	            this.match(MQLParser.UNSIGNED_INTEGER);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insertQuery() {
	    let localctx = new InsertQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MQLParser.RULE_insertQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(MQLParser.K_INSERT);
	        this.state = 185;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.state = 182;
	            this.insertLabelList();
	            break;
	        case 37:
	            this.state = 183;
	            this.insertPropertyList();
	            break;
	        case 14:
	            this.state = 184;
	            this.insertEdgeList();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insertLabelList() {
	    let localctx = new InsertLabelListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MQLParser.RULE_insertLabelList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(MQLParser.K_LABEL);
	        this.state = 188;
	        this.insertLabelElement();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 189;
	            this.match(MQLParser.COMMA);
	            this.state = 190;
	            this.insertLabelElement();
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insertPropertyList() {
	    let localctx = new InsertPropertyListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MQLParser.RULE_insertPropertyList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(MQLParser.K_PROPERTY);
	        this.state = 197;
	        this.insertPropertyElement();
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 198;
	            this.match(MQLParser.COMMA);
	            this.state = 199;
	            this.insertPropertyElement();
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insertEdgeList() {
	    let localctx = new InsertEdgeListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MQLParser.RULE_insertEdgeList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(MQLParser.K_EDGE);
	        this.state = 206;
	        this.insertEdgeElement();
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 207;
	            this.match(MQLParser.COMMA);
	            this.state = 208;
	            this.insertEdgeElement();
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insertLabelElement() {
	    let localctx = new InsertLabelElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MQLParser.RULE_insertLabelElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(MQLParser.L_PAR);
	        this.state = 217;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 48:
	        case 49:
	        case 50:
	        case 63:
	            this.state = 215;
	            this.identifier();
	            break;
	        case 53:
	            this.state = 216;
	            this.match(MQLParser.ANON_ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 219;
	        this.match(MQLParser.COMMA);
	        this.state = 220;
	        this.match(MQLParser.STRING);
	        this.state = 221;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insertPropertyElement() {
	    let localctx = new InsertPropertyElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MQLParser.RULE_insertPropertyElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(MQLParser.L_PAR);
	        this.state = 224;
	        this.fixedNodeInside();
	        this.state = 225;
	        this.match(MQLParser.COMMA);
	        this.state = 226;
	        this.match(MQLParser.STRING);
	        this.state = 227;
	        this.match(MQLParser.COMMA);
	        this.state = 228;
	        this.value();
	        this.state = 229;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insertEdgeElement() {
	    let localctx = new InsertEdgeElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MQLParser.RULE_insertEdgeElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(MQLParser.L_PAR);
	        this.state = 232;
	        this.fixedNodeInside();
	        this.state = 233;
	        this.match(MQLParser.COMMA);
	        this.state = 234;
	        this.fixedNodeInside();
	        this.state = 235;
	        this.match(MQLParser.COMMA);
	        this.state = 236;
	        this.identifier();
	        this.state = 237;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setStatement() {
	    let localctx = new SetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MQLParser.RULE_setStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(MQLParser.K_SET);
	        this.state = 240;
	        this.setItem();
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 241;
	            this.match(MQLParser.COMMA);
	            this.state = 242;
	            this.setItem();
	            this.state = 247;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchStatement() {
	    let localctx = new MatchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MQLParser.RULE_matchStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(MQLParser.K_MATCH);
	        this.state = 249;
	        this.graphPattern();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whereStatement() {
	    let localctx = new WhereStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MQLParser.RULE_whereStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(MQLParser.K_WHERE);
	        this.state = 252;
	        this.conditionalOrExpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupByStatement() {
	    let localctx = new GroupByStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MQLParser.RULE_groupByStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(MQLParser.K_GROUP);
	        this.state = 255;
	        this.match(MQLParser.K_BY);
	        this.state = 256;
	        this.groupByItem();
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 257;
	            this.match(MQLParser.COMMA);
	            this.state = 258;
	            this.groupByItem();
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orderByStatement() {
	    let localctx = new OrderByStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MQLParser.RULE_orderByStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(MQLParser.K_ORDER);
	        this.state = 265;
	        this.match(MQLParser.K_BY);
	        this.state = 266;
	        this.orderByItem();
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 267;
	            this.match(MQLParser.COMMA);
	            this.state = 268;
	            this.orderByItem();
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MQLParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReturnListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.match(MQLParser.K_RETURN);
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 275;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 278;
	            this.returnItem();
	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===85) {
	                this.state = 279;
	                this.match(MQLParser.COMMA);
	                this.state = 280;
	                this.returnItem();
	                this.state = 285;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 287;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25 || _la===30) {
	                this.state = 286;
	                this.limitOffsetClauses();
	            }

	            break;

	        case 2:
	            localctx = new ReturnAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.match(MQLParser.K_RETURN);
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 290;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 293;
	            this.match(MQLParser.STAR);
	            this.state = 295;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25 || _la===30) {
	                this.state = 294;
	                this.limitOffsetClauses();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	limitOffsetClauses() {
	    let localctx = new LimitOffsetClausesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MQLParser.RULE_limitOffsetClauses);
	    var _la = 0;
	    try {
	        this.state = 307;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 299;
	            this.limitClause();
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 300;
	                this.offsetClause();
	            }

	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 303;
	            this.offsetClause();
	            this.state = 305;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 304;
	                this.limitClause();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	limitClause() {
	    let localctx = new LimitClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MQLParser.RULE_limitClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(MQLParser.K_LIMIT);
	        this.state = 310;
	        this.match(MQLParser.UNSIGNED_INTEGER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	offsetClause() {
	    let localctx = new OffsetClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MQLParser.RULE_offsetClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(MQLParser.K_OFFSET);
	        this.state = 313;
	        this.match(MQLParser.UNSIGNED_INTEGER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setItem() {
	    let localctx = new SetItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MQLParser.RULE_setItem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(MQLParser.VARIABLE);
	        this.state = 316;
	        this.match(MQLParser.SINGLE_EQ);
	        this.state = 317;
	        this.fixedNodeInside();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnItem() {
	    let localctx = new ReturnItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MQLParser.RULE_returnItem);
	    var _la = 0;
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            localctx = new ReturnItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.match(MQLParser.VARIABLE);
	            this.state = 321;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 320;
	                this.match(MQLParser.KEY);
	            }

	            break;
	        case 5:
	        case 28:
	        case 29:
	        case 45:
	            localctx = new ReturnItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 323;
	            this.aggregateFunc();
	            this.state = 324;
	            this.match(MQLParser.L_PAR);
	            this.state = 325;
	            this.match(MQLParser.VARIABLE);
	            this.state = 327;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 326;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 329;
	            this.match(MQLParser.R_PAR);
	            break;
	        case 10:
	            localctx = new ReturnItemCountContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 331;
	            this.match(MQLParser.K_COUNT);
	            this.state = 332;
	            this.match(MQLParser.L_PAR);
	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 333;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 341;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 58:
	                this.state = 336;
	                this.match(MQLParser.VARIABLE);
	                this.state = 338;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===55) {
	                    this.state = 337;
	                    this.match(MQLParser.KEY);
	                }

	                break;
	            case 74:
	                this.state = 340;
	                this.match(MQLParser.STAR);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 343;
	            this.match(MQLParser.R_PAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aggregateFunc() {
	    let localctx = new AggregateFuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MQLParser.RULE_aggregateFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 805306400) !== 0) || _la===45)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orderByItem() {
	    let localctx = new OrderByItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, MQLParser.RULE_orderByItem);
	    var _la = 0;
	    try {
	        this.state = 378;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            localctx = new OrderByItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 348;
	            this.match(MQLParser.VARIABLE);
	            this.state = 350;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 349;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 353;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===12) {
	                this.state = 352;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===12)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;
	        case 5:
	        case 28:
	        case 29:
	        case 45:
	            localctx = new OrderByItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 355;
	            this.aggregateFunc();
	            this.state = 356;
	            this.match(MQLParser.L_PAR);
	            this.state = 357;
	            this.match(MQLParser.VARIABLE);
	            this.state = 359;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 358;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 361;
	            this.match(MQLParser.R_PAR);
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===12) {
	                this.state = 362;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===12)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;
	        case 10:
	            localctx = new OrderByItemCountContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 365;
	            this.match(MQLParser.K_COUNT);
	            this.state = 366;
	            this.match(MQLParser.L_PAR);
	            this.state = 368;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 367;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 370;
	            this.match(MQLParser.VARIABLE);
	            this.state = 372;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 371;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 374;
	            this.match(MQLParser.R_PAR);
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===12) {
	                this.state = 375;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===12)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupByItem() {
	    let localctx = new GroupByItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, MQLParser.RULE_groupByItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(MQLParser.VARIABLE);
	        this.state = 382;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 381;
	            this.match(MQLParser.KEY);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	graphPattern() {
	    let localctx = new GraphPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, MQLParser.RULE_graphPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.basicPattern();
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 385;
	            this.optionalPattern();
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionalPattern() {
	    let localctx = new OptionalPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, MQLParser.RULE_optionalPattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391;
	        this.match(MQLParser.K_OPTIONAL);
	        this.state = 392;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 393;
	        this.graphPattern();
	        this.state = 394;
	        this.match(MQLParser.RCURLY_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	similaritySearch() {
	    let localctx = new SimilaritySearchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, MQLParser.RULE_similaritySearch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(MQLParser.K_SIMILARITY_SEARCH);
	        this.state = 397;
	        this.match(MQLParser.L_PAR);
	        this.state = 398;
	        this.match(MQLParser.VARIABLE);
	        this.state = 399;
	        this.match(MQLParser.COMMA);
	        this.state = 400;
	        this.match(MQLParser.VARIABLE);
	        this.state = 401;
	        this.match(MQLParser.COMMA);
	        this.state = 402;
	        this.match(MQLParser.STRING);
	        this.state = 403;
	        this.match(MQLParser.COMMA);
	        this.state = 406;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 53:
	        case 54:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 77:
	        case 78:
	            this.state = 404;
	            this.fixedNodeInside();
	            break;
	        case 83:
	            this.state = 405;
	            this.tensor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 408;
	        this.match(MQLParser.COMMA);
	        this.state = 410;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77 || _la===78) {
	            this.state = 409;
	            _la = this._input.LA(1);
	            if(!(_la===77 || _la===78)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 412;
	        this.match(MQLParser.UNSIGNED_INTEGER);
	        this.state = 418;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===85) {
	            this.state = 413;
	            this.match(MQLParser.COMMA);
	            this.state = 415;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===77) {
	                this.state = 414;
	                this.match(MQLParser.PLUS);
	            }

	            this.state = 417;
	            this.match(MQLParser.UNSIGNED_INTEGER);
	        }

	        this.state = 420;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tensor() {
	    let localctx = new TensorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, MQLParser.RULE_tensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 423;
	        this.numericValue();
	        this.state = 428;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 424;
	            this.match(MQLParser.COMMA);
	            this.state = 425;
	            this.numericValue();
	            this.state = 430;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 431;
	        this.match(MQLParser.RSQUARE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	basicPattern() {
	    let localctx = new BasicPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, MQLParser.RULE_basicPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        this.linearPattern();
	        this.state = 438;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 434;
	            this.match(MQLParser.COMMA);
	            this.state = 435;
	            this.linearPattern();
	            this.state = 440;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	linearPattern() {
	    let localctx = new LinearPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, MQLParser.RULE_linearPattern);
	    var _la = 0;
	    try {
	        this.state = 454;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 79:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 441;
	            this.node();
	            this.state = 450;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 16465) !== 0)) {
	                this.state = 444;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 68:
	                case 78:
	                    this.state = 442;
	                    this.edge();
	                    break;
	                case 64:
	                case 70:
	                    this.state = 443;
	                    this.path();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 446;
	                this.node();
	                this.state = 452;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 453;
	            this.similaritySearch();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, MQLParser.RULE_path);
	    var _la = 0;
	    try {
	        this.state = 481;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 456;
	            this.match(MQLParser.LEQ);
	            this.state = 457;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 459;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6) {
	                this.state = 458;
	                this.pathType();
	            }

	            this.state = 462;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 461;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 464;
	            this.pathAlternatives();
	            this.state = 465;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 466;
	            this.match(MQLParser.SINGLE_EQ);
	            break;
	        case 70:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 468;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 469;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 471;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6) {
	                this.state = 470;
	                this.pathType();
	            }

	            this.state = 474;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 473;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 476;
	            this.pathAlternatives();
	            this.state = 477;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 478;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 479;
	            this.match(MQLParser.GT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathAlternatives() {
	    let localctx = new PathAlternativesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, MQLParser.RULE_pathAlternatives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
	        this.pathSequence();
	        this.state = 488;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===72) {
	            this.state = 484;
	            this.match(MQLParser.PATH_ALTERNATIVE);
	            this.state = 485;
	            this.pathSequence();
	            this.state = 490;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathSequence() {
	    let localctx = new PathSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, MQLParser.RULE_pathSequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.pathAtom();
	        this.state = 496;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 492;
	            this.match(MQLParser.PATH_SEQUENCE);
	            this.state = 493;
	            this.pathAtom();
	            this.state = 498;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathAtom() {
	    let localctx = new PathAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, MQLParser.RULE_pathAtom);
	    var _la = 0;
	    try {
	        this.state = 515;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PathAtomSimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 500;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===73) {
	                this.state = 499;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 502;
	            this.match(MQLParser.TYPE);
	            this.state = 504;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 141) !== 0)) {
	                this.state = 503;
	                this.pathSuffix();
	            }

	            break;

	        case 2:
	            localctx = new PathAtomAlternativesContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 507;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===73) {
	                this.state = 506;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 509;
	            this.match(MQLParser.L_PAR);
	            this.state = 510;
	            this.pathAlternatives();
	            this.state = 511;
	            this.match(MQLParser.R_PAR);
	            this.state = 513;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 141) !== 0)) {
	                this.state = 512;
	                this.pathSuffix();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathSuffix() {
	    let localctx = new PathSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, MQLParser.RULE_pathSuffix);
	    try {
	        this.state = 525;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 74:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 517;
	            localctx.op = this.match(MQLParser.STAR);
	            break;
	        case 77:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 518;
	            localctx.op = this.match(MQLParser.PLUS);
	            break;
	        case 76:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 519;
	            localctx.op = this.match(MQLParser.QUESTION_MARK);
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 520;
	            this.match(MQLParser.LCURLY_BRACKET);
	            this.state = 521;
	            localctx.min = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 522;
	            this.match(MQLParser.COMMA);
	            this.state = 523;
	            localctx.max = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 524;
	            this.match(MQLParser.RCURLY_BRACKET);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathType() {
	    let localctx = new PathTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, MQLParser.RULE_pathType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 527;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 529;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 528;
	            this.match(MQLParser.K_SHORTEST);
	        }

	        this.state = 532;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || ((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 385) !== 0)) {
	            this.state = 531;
	            _la = this._input.LA(1);
	            if(!(_la===1 || ((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 385) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	node() {
	    let localctx = new NodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, MQLParser.RULE_node);
	    try {
	        this.state = 536;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 534;
	            this.fixedNode();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 535;
	            this.varNode();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fixedNode() {
	    let localctx = new FixedNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, MQLParser.RULE_fixedNode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this.match(MQLParser.L_PAR);
	        this.state = 539;
	        this.fixedNodeInside();
	        this.state = 540;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fixedNodeInside() {
	    let localctx = new FixedNodeInsideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, MQLParser.RULE_fixedNodeInside);
	    try {
	        this.state = 546;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 542;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 543;
	            this.match(MQLParser.ANON_ID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 544;
	            this.match(MQLParser.EDGE_ID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 545;
	            this.value();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	edge() {
	    let localctx = new EdgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, MQLParser.RULE_edge);
	    var _la = 0;
	    try {
	        this.state = 561;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 68:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 548;
	            this.match(MQLParser.LT);
	            this.state = 551;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	            if(la_===1) {
	                this.state = 549;
	                this.match(MQLParser.MINUS);
	                this.state = 550;
	                this.edgeInside();

	            }
	            this.state = 553;
	            this.match(MQLParser.MINUS);
	            break;
	        case 78:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 554;
	            this.match(MQLParser.MINUS);
	            this.state = 558;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===83) {
	                this.state = 555;
	                this.edgeInside();
	                this.state = 556;
	                this.match(MQLParser.MINUS);
	            }

	            this.state = 560;
	            this.match(MQLParser.GT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	edgeInside() {
	    let localctx = new EdgeInsideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, MQLParser.RULE_edgeInside);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 565;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===58) {
	            this.state = 564;
	            _la = this._input.LA(1);
	            if(!(_la===54 || _la===58)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 568;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===56 || _la===57) {
	            this.state = 567;
	            _la = this._input.LA(1);
	            if(!(_la===56 || _la===57)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 571;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===81) {
	            this.state = 570;
	            this.properties();
	        }

	        this.state = 573;
	        this.match(MQLParser.RSQUARE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varNode() {
	    let localctx = new VarNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, MQLParser.RULE_varNode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        this.match(MQLParser.L_PAR);
	        this.state = 577;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 576;
	            this.match(MQLParser.VARIABLE);
	        }

	        this.state = 582;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===56) {
	            this.state = 579;
	            this.match(MQLParser.TYPE);
	            this.state = 584;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 586;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===81) {
	            this.state = 585;
	            this.properties();
	        }

	        this.state = 588;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	properties() {
	    let localctx = new PropertiesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, MQLParser.RULE_properties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 590;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 591;
	        this.property();
	        this.state = 596;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 592;
	            this.match(MQLParser.COMMA);
	            this.state = 593;
	            this.property();
	            this.state = 598;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 599;
	        this.match(MQLParser.RCURLY_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, MQLParser.RULE_property);
	    try {
	        this.state = 614;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,79,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Property1Context(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 601;
	            this.identifier();
	            this.state = 606;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 86:
	                this.state = 602;
	                this.match(MQLParser.COLON);
	                this.state = 603;
	                this.value();
	                break;
	            case 51:
	                this.state = 604;
	                this.match(MQLParser.TRUE_PROP);
	                break;
	            case 52:
	                this.state = 605;
	                this.match(MQLParser.FALSE_PROP);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            localctx = new Property2Context(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 608;
	            this.identifier();
	            this.state = 609;
	            this.match(MQLParser.TYPE);
	            this.state = 610;
	            this.match(MQLParser.L_PAR);
	            this.state = 611;
	            this.match(MQLParser.STRING);
	            this.state = 612;
	            this.match(MQLParser.R_PAR);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, MQLParser.RULE_identifier);
	    try {
	        this.state = 618;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 616;
	            this.match(MQLParser.NAME);
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 48:
	        case 49:
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 617;
	            this.keyword();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolValue() {
	    let localctx = new BoolValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, MQLParser.RULE_boolValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 620;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===47)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numericValue() {
	    let localctx = new NumericValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, MQLParser.RULE_numericValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 623;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77 || _la===78) {
	            this.state = 622;
	            _la = this._input.LA(1);
	            if(!(_la===77 || _la===78)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 625;
	        _la = this._input.LA(1);
	        if(!(((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datatypeValue() {
	    let localctx = new DatatypeValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, MQLParser.RULE_datatypeValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 627;
	        this.identifier();
	        this.state = 628;
	        this.match(MQLParser.L_PAR);
	        this.state = 629;
	        this.match(MQLParser.STRING);
	        this.state = 630;
	        this.match(MQLParser.R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, MQLParser.RULE_value);
	    try {
	        this.state = 636;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	        case 61:
	        case 62:
	        case 77:
	        case 78:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 632;
	            this.numericValue();
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 633;
	            this.match(MQLParser.STRING);
	            break;
	        case 20:
	        case 47:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 634;
	            this.boolValue();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 48:
	        case 49:
	        case 50:
	        case 63:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 635;
	            this.datatypeValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalOrExpr() {
	    let localctx = new ConditionalOrExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, MQLParser.RULE_conditionalOrExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 638;
	        this.conditionalAndExpr();
	        this.state = 643;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33) {
	            this.state = 639;
	            this.match(MQLParser.K_OR);
	            this.state = 640;
	            this.conditionalAndExpr();
	            this.state = 645;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalAndExpr() {
	    let localctx = new ConditionalAndExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, MQLParser.RULE_conditionalAndExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 646;
	        this.comparisonExpr();
	        this.state = 651;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 647;
	            this.match(MQLParser.K_AND);
	            this.state = 648;
	            this.comparisonExpr();
	            this.state = 653;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonExpr() {
	    let localctx = new ComparisonExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, MQLParser.RULE_comparisonExpr);
	    var _la = 0;
	    try {
	        this.state = 666;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,87,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ComparisonExprOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 654;
	            this.additiveExpr();
	            this.state = 657;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 63) !== 0)) {
	                this.state = 655;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 63) !== 0))) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 656;
	                this.additiveExpr();
	            }

	            break;

	        case 2:
	            localctx = new ComparisonExprIsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 659;
	            this.additiveExpr();
	            this.state = 660;
	            this.match(MQLParser.K_IS);
	            this.state = 662;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38) {
	                this.state = 661;
	                this.match(MQLParser.K_NOT);
	            }

	            this.state = 664;
	            this.exprTypename();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpr() {
	    let localctx = new AdditiveExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, MQLParser.RULE_additiveExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 668;
	        this.multiplicativeExpr();
	        this.state = 673;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===77 || _la===78) {
	            this.state = 669;
	            localctx._tset1214 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===77 || _la===78)) {
	                localctx._tset1214 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1214);
	            this.state = 670;
	            this.multiplicativeExpr();
	            this.state = 675;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpr() {
	    let localctx = new MultiplicativeExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, MQLParser.RULE_multiplicativeExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 676;
	        this.unaryExpr();
	        this.state = 681;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 71)) & ~0x1f) === 0 && ((1 << (_la - 71)) & 25) !== 0)) {
	            this.state = 677;
	            localctx._tset1233 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 71)) & ~0x1f) === 0 && ((1 << (_la - 71)) & 25) !== 0))) {
	                localctx._tset1233 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1233);
	            this.state = 678;
	            this.unaryExpr();
	            this.state = 683;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryExpr() {
	    let localctx = new UnaryExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, MQLParser.RULE_unaryExpr);
	    try {
	        this.state = 691;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,90,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 684;
	            this.match(MQLParser.K_NOT);
	            this.state = 685;
	            this.unaryExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 686;
	            this.match(MQLParser.PLUS);
	            this.state = 687;
	            this.unaryExpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 688;
	            this.match(MQLParser.MINUS);
	            this.state = 689;
	            this.unaryExpr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 690;
	            this.atomicExpr();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atomicExpr() {
	    let localctx = new AtomicExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, MQLParser.RULE_atomicExpr);
	    var _la = 0;
	    try {
	        this.state = 702;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            localctx = new ExprVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 693;
	            this.match(MQLParser.VARIABLE);
	            this.state = 695;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 694;
	                this.match(MQLParser.KEY);
	            }

	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 59:
	        case 60:
	        case 61:
	        case 63:
	            localctx = new ExprValueExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 697;
	            this.valueExpr();
	            break;
	        case 79:
	            localctx = new ExprParenthesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 698;
	            this.match(MQLParser.L_PAR);
	            this.state = 699;
	            this.conditionalOrExpr();
	            this.state = 700;
	            this.match(MQLParser.R_PAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueExpr() {
	    let localctx = new ValueExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, MQLParser.RULE_valueExpr);
	    try {
	        this.state = 709;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 704;
	            this.match(MQLParser.UNSIGNED_INTEGER);
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 705;
	            this.match(MQLParser.UNSIGNED_FLOAT);
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 706;
	            this.match(MQLParser.STRING);
	            break;
	        case 20:
	        case 47:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 707;
	            this.boolValue();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 48:
	        case 49:
	        case 50:
	        case 63:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 708;
	            this.datatypeValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprTypename() {
	    let localctx = new ExprTypenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, MQLParser.RULE_exprTypename);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 711;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2359808) !== 0) || _la===39 || _la===46)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, MQLParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 713;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293918718) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 491511) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MQLParser.EOF = antlr4.Token.EOF;
MQLParser.K_ACYCLIC = 1;
MQLParser.K_AND = 2;
MQLParser.K_ANGULAR = 3;
MQLParser.K_ANY = 4;
MQLParser.K_AVG = 5;
MQLParser.K_ALL = 6;
MQLParser.K_ASC = 7;
MQLParser.K_BY = 8;
MQLParser.K_BOOL = 9;
MQLParser.K_COUNT = 10;
MQLParser.K_DESCRIBE = 11;
MQLParser.K_DESC = 12;
MQLParser.K_DISTINCT = 13;
MQLParser.K_EDGE = 14;
MQLParser.K_EUCLIDEAN = 15;
MQLParser.K_INCOMING = 16;
MQLParser.K_INSERT = 17;
MQLParser.K_INTEGER = 18;
MQLParser.K_IS = 19;
MQLParser.K_FALSE = 20;
MQLParser.K_FLOAT = 21;
MQLParser.K_GROUP = 22;
MQLParser.K_LABELS = 23;
MQLParser.K_LABEL = 24;
MQLParser.K_LIMIT = 25;
MQLParser.K_MANHATTAN = 26;
MQLParser.K_MATCH = 27;
MQLParser.K_MAX = 28;
MQLParser.K_MIN = 29;
MQLParser.K_OFFSET = 30;
MQLParser.K_OPTIONAL = 31;
MQLParser.K_ORDER = 32;
MQLParser.K_OR = 33;
MQLParser.K_OUTGOING = 34;
MQLParser.K_PROJECT_SIMILARITY = 35;
MQLParser.K_PROPERTIES = 36;
MQLParser.K_PROPERTY = 37;
MQLParser.K_NOT = 38;
MQLParser.K_NULL = 39;
MQLParser.K_SHORTEST = 40;
MQLParser.K_SIMPLE = 41;
MQLParser.K_RETURN = 42;
MQLParser.K_SET = 43;
MQLParser.K_SIMILARITY_SEARCH = 44;
MQLParser.K_SUM = 45;
MQLParser.K_STRING = 46;
MQLParser.K_TRUE = 47;
MQLParser.K_TRAILS = 48;
MQLParser.K_WALKS = 49;
MQLParser.K_WHERE = 50;
MQLParser.TRUE_PROP = 51;
MQLParser.FALSE_PROP = 52;
MQLParser.ANON_ID = 53;
MQLParser.EDGE_ID = 54;
MQLParser.KEY = 55;
MQLParser.TYPE = 56;
MQLParser.TYPE_VAR = 57;
MQLParser.VARIABLE = 58;
MQLParser.STRING = 59;
MQLParser.UNSIGNED_INTEGER = 60;
MQLParser.UNSIGNED_FLOAT = 61;
MQLParser.UNSIGNED_SCIENTIFIC_NOTATION = 62;
MQLParser.NAME = 63;
MQLParser.LEQ = 64;
MQLParser.GEQ = 65;
MQLParser.EQ = 66;
MQLParser.NEQ = 67;
MQLParser.LT = 68;
MQLParser.GT = 69;
MQLParser.SINGLE_EQ = 70;
MQLParser.PATH_SEQUENCE = 71;
MQLParser.PATH_ALTERNATIVE = 72;
MQLParser.PATH_NEGATION = 73;
MQLParser.STAR = 74;
MQLParser.PERCENT = 75;
MQLParser.QUESTION_MARK = 76;
MQLParser.PLUS = 77;
MQLParser.MINUS = 78;
MQLParser.L_PAR = 79;
MQLParser.R_PAR = 80;
MQLParser.LCURLY_BRACKET = 81;
MQLParser.RCURLY_BRACKET = 82;
MQLParser.LSQUARE_BRACKET = 83;
MQLParser.RSQUARE_BRACKET = 84;
MQLParser.COMMA = 85;
MQLParser.COLON = 86;
MQLParser.WHITE_SPACE = 87;
MQLParser.SINGLE_LINE_COMMENT = 88;
MQLParser.UNRECOGNIZED = 89;

MQLParser.RULE_root = 0;
MQLParser.RULE_matchQuery = 1;
MQLParser.RULE_projectSimilarity = 2;
MQLParser.RULE_metricType = 3;
MQLParser.RULE_describeQuery = 4;
MQLParser.RULE_describeFlag = 5;
MQLParser.RULE_insertQuery = 6;
MQLParser.RULE_insertLabelList = 7;
MQLParser.RULE_insertPropertyList = 8;
MQLParser.RULE_insertEdgeList = 9;
MQLParser.RULE_insertLabelElement = 10;
MQLParser.RULE_insertPropertyElement = 11;
MQLParser.RULE_insertEdgeElement = 12;
MQLParser.RULE_setStatement = 13;
MQLParser.RULE_matchStatement = 14;
MQLParser.RULE_whereStatement = 15;
MQLParser.RULE_groupByStatement = 16;
MQLParser.RULE_orderByStatement = 17;
MQLParser.RULE_returnStatement = 18;
MQLParser.RULE_limitOffsetClauses = 19;
MQLParser.RULE_limitClause = 20;
MQLParser.RULE_offsetClause = 21;
MQLParser.RULE_setItem = 22;
MQLParser.RULE_returnItem = 23;
MQLParser.RULE_aggregateFunc = 24;
MQLParser.RULE_orderByItem = 25;
MQLParser.RULE_groupByItem = 26;
MQLParser.RULE_graphPattern = 27;
MQLParser.RULE_optionalPattern = 28;
MQLParser.RULE_similaritySearch = 29;
MQLParser.RULE_tensor = 30;
MQLParser.RULE_basicPattern = 31;
MQLParser.RULE_linearPattern = 32;
MQLParser.RULE_path = 33;
MQLParser.RULE_pathAlternatives = 34;
MQLParser.RULE_pathSequence = 35;
MQLParser.RULE_pathAtom = 36;
MQLParser.RULE_pathSuffix = 37;
MQLParser.RULE_pathType = 38;
MQLParser.RULE_node = 39;
MQLParser.RULE_fixedNode = 40;
MQLParser.RULE_fixedNodeInside = 41;
MQLParser.RULE_edge = 42;
MQLParser.RULE_edgeInside = 43;
MQLParser.RULE_varNode = 44;
MQLParser.RULE_properties = 45;
MQLParser.RULE_property = 46;
MQLParser.RULE_identifier = 47;
MQLParser.RULE_boolValue = 48;
MQLParser.RULE_numericValue = 49;
MQLParser.RULE_datatypeValue = 50;
MQLParser.RULE_value = 51;
MQLParser.RULE_conditionalOrExpr = 52;
MQLParser.RULE_conditionalAndExpr = 53;
MQLParser.RULE_comparisonExpr = 54;
MQLParser.RULE_additiveExpr = 55;
MQLParser.RULE_multiplicativeExpr = 56;
MQLParser.RULE_unaryExpr = 57;
MQLParser.RULE_atomicExpr = 58;
MQLParser.RULE_valueExpr = 59;
MQLParser.RULE_exprTypename = 60;
MQLParser.RULE_keyword = 61;

class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_root;
    }

	EOF() {
	    return this.getToken(MQLParser.EOF, 0);
	};

	matchQuery() {
	    return this.getTypedRuleContext(MatchQueryContext,0);
	};

	describeQuery() {
	    return this.getTypedRuleContext(DescribeQueryContext,0);
	};

	insertQuery() {
	    return this.getTypedRuleContext(InsertQueryContext,0);
	};

	setStatement() {
	    return this.getTypedRuleContext(SetStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitRoot(this);
		}
	}


}



class MatchQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_matchQuery;
    }

	matchStatement() {
	    return this.getTypedRuleContext(MatchStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	projectSimilarity() {
	    return this.getTypedRuleContext(ProjectSimilarityContext,0);
	};

	whereStatement() {
	    return this.getTypedRuleContext(WhereStatementContext,0);
	};

	groupByStatement() {
	    return this.getTypedRuleContext(GroupByStatementContext,0);
	};

	orderByStatement() {
	    return this.getTypedRuleContext(OrderByStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterMatchQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitMatchQuery(this);
		}
	}


}



class ProjectSimilarityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_projectSimilarity;
    }

	K_PROJECT_SIMILARITY() {
	    return this.getToken(MQLParser.K_PROJECT_SIMILARITY, 0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.VARIABLE);
	    } else {
	        return this.getToken(MQLParser.VARIABLE, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	metricType() {
	    return this.getTypedRuleContext(MetricTypeContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	tensor() {
	    return this.getTypedRuleContext(TensorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterProjectSimilarity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitProjectSimilarity(this);
		}
	}


}



class MetricTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_metricType;
    }

	K_ANGULAR() {
	    return this.getToken(MQLParser.K_ANGULAR, 0);
	};

	K_EUCLIDEAN() {
	    return this.getToken(MQLParser.K_EUCLIDEAN, 0);
	};

	K_MANHATTAN() {
	    return this.getToken(MQLParser.K_MANHATTAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterMetricType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitMetricType(this);
		}
	}


}



class DescribeQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_describeQuery;
    }

	K_DESCRIBE() {
	    return this.getToken(MQLParser.K_DESCRIBE, 0);
	};

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	describeFlag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DescribeFlagContext);
	    } else {
	        return this.getTypedRuleContext(DescribeFlagContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterDescribeQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitDescribeQuery(this);
		}
	}


}



class DescribeFlagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_describeFlag;
    }

	K_LABELS() {
	    return this.getToken(MQLParser.K_LABELS, 0);
	};

	K_PROPERTIES() {
	    return this.getToken(MQLParser.K_PROPERTIES, 0);
	};

	K_OUTGOING() {
	    return this.getToken(MQLParser.K_OUTGOING, 0);
	};

	K_INCOMING() {
	    return this.getToken(MQLParser.K_INCOMING, 0);
	};

	K_LIMIT() {
	    return this.getToken(MQLParser.K_LIMIT, 0);
	};

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterDescribeFlag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitDescribeFlag(this);
		}
	}


}



class InsertQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertQuery;
    }

	K_INSERT() {
	    return this.getToken(MQLParser.K_INSERT, 0);
	};

	insertLabelList() {
	    return this.getTypedRuleContext(InsertLabelListContext,0);
	};

	insertPropertyList() {
	    return this.getTypedRuleContext(InsertPropertyListContext,0);
	};

	insertEdgeList() {
	    return this.getTypedRuleContext(InsertEdgeListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertQuery(this);
		}
	}


}



class InsertLabelListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertLabelList;
    }

	K_LABEL() {
	    return this.getToken(MQLParser.K_LABEL, 0);
	};

	insertLabelElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InsertLabelElementContext);
	    } else {
	        return this.getTypedRuleContext(InsertLabelElementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertLabelList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertLabelList(this);
		}
	}


}



class InsertPropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertPropertyList;
    }

	K_PROPERTY() {
	    return this.getToken(MQLParser.K_PROPERTY, 0);
	};

	insertPropertyElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InsertPropertyElementContext);
	    } else {
	        return this.getTypedRuleContext(InsertPropertyElementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertPropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertPropertyList(this);
		}
	}


}



class InsertEdgeListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertEdgeList;
    }

	K_EDGE() {
	    return this.getToken(MQLParser.K_EDGE, 0);
	};

	insertEdgeElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InsertEdgeElementContext);
	    } else {
	        return this.getTypedRuleContext(InsertEdgeElementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertEdgeList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertEdgeList(this);
		}
	}


}



class InsertLabelElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertLabelElement;
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	COMMA() {
	    return this.getToken(MQLParser.COMMA, 0);
	};

	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ANON_ID() {
	    return this.getToken(MQLParser.ANON_ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertLabelElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertLabelElement(this);
		}
	}


}



class InsertPropertyElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertPropertyElement;
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertPropertyElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertPropertyElement(this);
		}
	}


}



class InsertEdgeElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertEdgeElement;
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	fixedNodeInside = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FixedNodeInsideContext);
	    } else {
	        return this.getTypedRuleContext(FixedNodeInsideContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertEdgeElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertEdgeElement(this);
		}
	}


}



class SetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_setStatement;
    }

	K_SET() {
	    return this.getToken(MQLParser.K_SET, 0);
	};

	setItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SetItemContext);
	    } else {
	        return this.getTypedRuleContext(SetItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterSetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitSetStatement(this);
		}
	}


}



class MatchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_matchStatement;
    }

	K_MATCH() {
	    return this.getToken(MQLParser.K_MATCH, 0);
	};

	graphPattern() {
	    return this.getTypedRuleContext(GraphPatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterMatchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitMatchStatement(this);
		}
	}


}



class WhereStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_whereStatement;
    }

	K_WHERE() {
	    return this.getToken(MQLParser.K_WHERE, 0);
	};

	conditionalOrExpr() {
	    return this.getTypedRuleContext(ConditionalOrExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterWhereStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitWhereStatement(this);
		}
	}


}



class GroupByStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_groupByStatement;
    }

	K_GROUP() {
	    return this.getToken(MQLParser.K_GROUP, 0);
	};

	K_BY() {
	    return this.getToken(MQLParser.K_BY, 0);
	};

	groupByItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupByItemContext);
	    } else {
	        return this.getTypedRuleContext(GroupByItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterGroupByStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitGroupByStatement(this);
		}
	}


}



class OrderByStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_orderByStatement;
    }

	K_ORDER() {
	    return this.getToken(MQLParser.K_ORDER, 0);
	};

	K_BY() {
	    return this.getToken(MQLParser.K_BY, 0);
	};

	orderByItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrderByItemContext);
	    } else {
	        return this.getTypedRuleContext(OrderByItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterOrderByStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitOrderByStatement(this);
		}
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_returnStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ReturnAllContext extends ReturnStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	K_RETURN() {
	    return this.getToken(MQLParser.K_RETURN, 0);
	};

	STAR() {
	    return this.getToken(MQLParser.STAR, 0);
	};

	K_DISTINCT() {
	    return this.getToken(MQLParser.K_DISTINCT, 0);
	};

	limitOffsetClauses() {
	    return this.getTypedRuleContext(LimitOffsetClausesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterReturnAll(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitReturnAll(this);
		}
	}


}

MQLParser.ReturnAllContext = ReturnAllContext;

class ReturnListContext extends ReturnStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	K_RETURN() {
	    return this.getToken(MQLParser.K_RETURN, 0);
	};

	returnItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReturnItemContext);
	    } else {
	        return this.getTypedRuleContext(ReturnItemContext,i);
	    }
	};

	K_DISTINCT() {
	    return this.getToken(MQLParser.K_DISTINCT, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	limitOffsetClauses() {
	    return this.getTypedRuleContext(LimitOffsetClausesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterReturnList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitReturnList(this);
		}
	}


}

MQLParser.ReturnListContext = ReturnListContext;

class LimitOffsetClausesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_limitOffsetClauses;
    }

	limitClause() {
	    return this.getTypedRuleContext(LimitClauseContext,0);
	};

	offsetClause() {
	    return this.getTypedRuleContext(OffsetClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterLimitOffsetClauses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitLimitOffsetClauses(this);
		}
	}


}



class LimitClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_limitClause;
    }

	K_LIMIT() {
	    return this.getToken(MQLParser.K_LIMIT, 0);
	};

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterLimitClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitLimitClause(this);
		}
	}


}



class OffsetClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_offsetClause;
    }

	K_OFFSET() {
	    return this.getToken(MQLParser.K_OFFSET, 0);
	};

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterOffsetClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitOffsetClause(this);
		}
	}


}



class SetItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_setItem;
    }

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	SINGLE_EQ() {
	    return this.getToken(MQLParser.SINGLE_EQ, 0);
	};

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterSetItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitSetItem(this);
		}
	}


}



class ReturnItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_returnItem;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ReturnItemVarContext extends ReturnItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterReturnItemVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitReturnItemVar(this);
		}
	}


}

MQLParser.ReturnItemVarContext = ReturnItemVarContext;

class ReturnItemAggContext extends ReturnItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	aggregateFunc() {
	    return this.getTypedRuleContext(AggregateFuncContext,0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterReturnItemAgg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitReturnItemAgg(this);
		}
	}


}

MQLParser.ReturnItemAggContext = ReturnItemAggContext;

class ReturnItemCountContext extends ReturnItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	K_COUNT() {
	    return this.getToken(MQLParser.K_COUNT, 0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	STAR() {
	    return this.getToken(MQLParser.STAR, 0);
	};

	K_DISTINCT() {
	    return this.getToken(MQLParser.K_DISTINCT, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterReturnItemCount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitReturnItemCount(this);
		}
	}


}

MQLParser.ReturnItemCountContext = ReturnItemCountContext;

class AggregateFuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_aggregateFunc;
    }

	K_SUM() {
	    return this.getToken(MQLParser.K_SUM, 0);
	};

	K_MAX() {
	    return this.getToken(MQLParser.K_MAX, 0);
	};

	K_MIN() {
	    return this.getToken(MQLParser.K_MIN, 0);
	};

	K_AVG() {
	    return this.getToken(MQLParser.K_AVG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterAggregateFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitAggregateFunc(this);
		}
	}


}



class OrderByItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_orderByItem;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OrderByItemCountContext extends OrderByItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	K_COUNT() {
	    return this.getToken(MQLParser.K_COUNT, 0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	K_DISTINCT() {
	    return this.getToken(MQLParser.K_DISTINCT, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	K_ASC() {
	    return this.getToken(MQLParser.K_ASC, 0);
	};

	K_DESC() {
	    return this.getToken(MQLParser.K_DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterOrderByItemCount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitOrderByItemCount(this);
		}
	}


}

MQLParser.OrderByItemCountContext = OrderByItemCountContext;

class OrderByItemVarContext extends OrderByItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	K_ASC() {
	    return this.getToken(MQLParser.K_ASC, 0);
	};

	K_DESC() {
	    return this.getToken(MQLParser.K_DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterOrderByItemVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitOrderByItemVar(this);
		}
	}


}

MQLParser.OrderByItemVarContext = OrderByItemVarContext;

class OrderByItemAggContext extends OrderByItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	aggregateFunc() {
	    return this.getTypedRuleContext(AggregateFuncContext,0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	K_ASC() {
	    return this.getToken(MQLParser.K_ASC, 0);
	};

	K_DESC() {
	    return this.getToken(MQLParser.K_DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterOrderByItemAgg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitOrderByItemAgg(this);
		}
	}


}

MQLParser.OrderByItemAggContext = OrderByItemAggContext;

class GroupByItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_groupByItem;
    }

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterGroupByItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitGroupByItem(this);
		}
	}


}



class GraphPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_graphPattern;
    }

	basicPattern() {
	    return this.getTypedRuleContext(BasicPatternContext,0);
	};

	optionalPattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionalPatternContext);
	    } else {
	        return this.getTypedRuleContext(OptionalPatternContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterGraphPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitGraphPattern(this);
		}
	}


}



class OptionalPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_optionalPattern;
    }

	K_OPTIONAL() {
	    return this.getToken(MQLParser.K_OPTIONAL, 0);
	};

	LCURLY_BRACKET() {
	    return this.getToken(MQLParser.LCURLY_BRACKET, 0);
	};

	graphPattern() {
	    return this.getTypedRuleContext(GraphPatternContext,0);
	};

	RCURLY_BRACKET() {
	    return this.getToken(MQLParser.RCURLY_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterOptionalPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitOptionalPattern(this);
		}
	}


}



class SimilaritySearchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_similaritySearch;
    }

	K_SIMILARITY_SEARCH() {
	    return this.getToken(MQLParser.K_SIMILARITY_SEARCH, 0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.VARIABLE);
	    } else {
	        return this.getToken(MQLParser.VARIABLE, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	UNSIGNED_INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.UNSIGNED_INTEGER);
	    } else {
	        return this.getToken(MQLParser.UNSIGNED_INTEGER, i);
	    }
	};


	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	tensor() {
	    return this.getTypedRuleContext(TensorContext,0);
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.PLUS);
	    } else {
	        return this.getToken(MQLParser.PLUS, i);
	    }
	};


	MINUS() {
	    return this.getToken(MQLParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterSimilaritySearch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitSimilaritySearch(this);
		}
	}


}



class TensorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_tensor;
    }

	LSQUARE_BRACKET() {
	    return this.getToken(MQLParser.LSQUARE_BRACKET, 0);
	};

	numericValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumericValueContext);
	    } else {
	        return this.getTypedRuleContext(NumericValueContext,i);
	    }
	};

	RSQUARE_BRACKET() {
	    return this.getToken(MQLParser.RSQUARE_BRACKET, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterTensor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitTensor(this);
		}
	}


}



class BasicPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_basicPattern;
    }

	linearPattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LinearPatternContext);
	    } else {
	        return this.getTypedRuleContext(LinearPatternContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterBasicPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitBasicPattern(this);
		}
	}


}



class LinearPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_linearPattern;
    }

	node = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NodeContext);
	    } else {
	        return this.getTypedRuleContext(NodeContext,i);
	    }
	};

	edge = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EdgeContext);
	    } else {
	        return this.getTypedRuleContext(EdgeContext,i);
	    }
	};

	path = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathContext);
	    } else {
	        return this.getTypedRuleContext(PathContext,i);
	    }
	};

	similaritySearch() {
	    return this.getTypedRuleContext(SimilaritySearchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterLinearPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitLinearPattern(this);
		}
	}


}



class PathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_path;
    }

	LEQ() {
	    return this.getToken(MQLParser.LEQ, 0);
	};

	LSQUARE_BRACKET() {
	    return this.getToken(MQLParser.LSQUARE_BRACKET, 0);
	};

	pathAlternatives() {
	    return this.getTypedRuleContext(PathAlternativesContext,0);
	};

	RSQUARE_BRACKET() {
	    return this.getToken(MQLParser.RSQUARE_BRACKET, 0);
	};

	SINGLE_EQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.SINGLE_EQ);
	    } else {
	        return this.getToken(MQLParser.SINGLE_EQ, i);
	    }
	};


	pathType() {
	    return this.getTypedRuleContext(PathTypeContext,0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	GT() {
	    return this.getToken(MQLParser.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitPath(this);
		}
	}


}



class PathAlternativesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_pathAlternatives;
    }

	pathSequence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathSequenceContext);
	    } else {
	        return this.getTypedRuleContext(PathSequenceContext,i);
	    }
	};

	PATH_ALTERNATIVE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.PATH_ALTERNATIVE);
	    } else {
	        return this.getToken(MQLParser.PATH_ALTERNATIVE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterPathAlternatives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitPathAlternatives(this);
		}
	}


}



class PathSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_pathSequence;
    }

	pathAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathAtomContext);
	    } else {
	        return this.getTypedRuleContext(PathAtomContext,i);
	    }
	};

	PATH_SEQUENCE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.PATH_SEQUENCE);
	    } else {
	        return this.getToken(MQLParser.PATH_SEQUENCE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterPathSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitPathSequence(this);
		}
	}


}



class PathAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_pathAtom;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PathAtomAlternativesContext extends PathAtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	pathAlternatives() {
	    return this.getTypedRuleContext(PathAlternativesContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	PATH_NEGATION() {
	    return this.getToken(MQLParser.PATH_NEGATION, 0);
	};

	pathSuffix() {
	    return this.getTypedRuleContext(PathSuffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterPathAtomAlternatives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitPathAtomAlternatives(this);
		}
	}


}

MQLParser.PathAtomAlternativesContext = PathAtomAlternativesContext;

class PathAtomSimpleContext extends PathAtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TYPE() {
	    return this.getToken(MQLParser.TYPE, 0);
	};

	PATH_NEGATION() {
	    return this.getToken(MQLParser.PATH_NEGATION, 0);
	};

	pathSuffix() {
	    return this.getTypedRuleContext(PathSuffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterPathAtomSimple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitPathAtomSimple(this);
		}
	}


}

MQLParser.PathAtomSimpleContext = PathAtomSimpleContext;

class PathSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_pathSuffix;
        this.op = null;
        this.min = null;
        this.max = null;
    }

	STAR() {
	    return this.getToken(MQLParser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(MQLParser.PLUS, 0);
	};

	QUESTION_MARK() {
	    return this.getToken(MQLParser.QUESTION_MARK, 0);
	};

	LCURLY_BRACKET() {
	    return this.getToken(MQLParser.LCURLY_BRACKET, 0);
	};

	COMMA() {
	    return this.getToken(MQLParser.COMMA, 0);
	};

	RCURLY_BRACKET() {
	    return this.getToken(MQLParser.RCURLY_BRACKET, 0);
	};

	UNSIGNED_INTEGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.UNSIGNED_INTEGER);
	    } else {
	        return this.getToken(MQLParser.UNSIGNED_INTEGER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterPathSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitPathSuffix(this);
		}
	}


}



class PathTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_pathType;
    }

	K_ANY() {
	    return this.getToken(MQLParser.K_ANY, 0);
	};

	K_ALL() {
	    return this.getToken(MQLParser.K_ALL, 0);
	};

	K_SHORTEST() {
	    return this.getToken(MQLParser.K_SHORTEST, 0);
	};

	K_WALKS() {
	    return this.getToken(MQLParser.K_WALKS, 0);
	};

	K_SIMPLE() {
	    return this.getToken(MQLParser.K_SIMPLE, 0);
	};

	K_ACYCLIC() {
	    return this.getToken(MQLParser.K_ACYCLIC, 0);
	};

	K_TRAILS() {
	    return this.getToken(MQLParser.K_TRAILS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterPathType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitPathType(this);
		}
	}


}



class NodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_node;
    }

	fixedNode() {
	    return this.getTypedRuleContext(FixedNodeContext,0);
	};

	varNode() {
	    return this.getTypedRuleContext(VarNodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitNode(this);
		}
	}


}



class FixedNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_fixedNode;
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterFixedNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitFixedNode(this);
		}
	}


}



class FixedNodeInsideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_fixedNodeInside;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ANON_ID() {
	    return this.getToken(MQLParser.ANON_ID, 0);
	};

	EDGE_ID() {
	    return this.getToken(MQLParser.EDGE_ID, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterFixedNodeInside(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitFixedNodeInside(this);
		}
	}


}



class EdgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_edge;
    }

	LT() {
	    return this.getToken(MQLParser.LT, 0);
	};

	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.MINUS);
	    } else {
	        return this.getToken(MQLParser.MINUS, i);
	    }
	};


	edgeInside() {
	    return this.getTypedRuleContext(EdgeInsideContext,0);
	};

	GT() {
	    return this.getToken(MQLParser.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterEdge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitEdge(this);
		}
	}


}



class EdgeInsideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_edgeInside;
    }

	LSQUARE_BRACKET() {
	    return this.getToken(MQLParser.LSQUARE_BRACKET, 0);
	};

	RSQUARE_BRACKET() {
	    return this.getToken(MQLParser.RSQUARE_BRACKET, 0);
	};

	properties() {
	    return this.getTypedRuleContext(PropertiesContext,0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	EDGE_ID() {
	    return this.getToken(MQLParser.EDGE_ID, 0);
	};

	TYPE() {
	    return this.getToken(MQLParser.TYPE, 0);
	};

	TYPE_VAR() {
	    return this.getToken(MQLParser.TYPE_VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterEdgeInside(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitEdgeInside(this);
		}
	}


}



class VarNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_varNode;
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	TYPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.TYPE);
	    } else {
	        return this.getToken(MQLParser.TYPE, i);
	    }
	};


	properties() {
	    return this.getTypedRuleContext(PropertiesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterVarNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitVarNode(this);
		}
	}


}



class PropertiesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_properties;
    }

	LCURLY_BRACKET() {
	    return this.getToken(MQLParser.LCURLY_BRACKET, 0);
	};

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	RCURLY_BRACKET() {
	    return this.getToken(MQLParser.RCURLY_BRACKET, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.COMMA);
	    } else {
	        return this.getToken(MQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterProperties(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitProperties(this);
		}
	}


}



class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_property;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Property2Context extends PropertyContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	TYPE() {
	    return this.getToken(MQLParser.TYPE, 0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterProperty2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitProperty2(this);
		}
	}


}

MQLParser.Property2Context = Property2Context;

class Property1Context extends PropertyContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(MQLParser.COLON, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TRUE_PROP() {
	    return this.getToken(MQLParser.TRUE_PROP, 0);
	};

	FALSE_PROP() {
	    return this.getToken(MQLParser.FALSE_PROP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterProperty1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitProperty1(this);
		}
	}


}

MQLParser.Property1Context = Property1Context;

class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_identifier;
    }

	NAME() {
	    return this.getToken(MQLParser.NAME, 0);
	};

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class BoolValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_boolValue;
    }

	K_TRUE() {
	    return this.getToken(MQLParser.K_TRUE, 0);
	};

	K_FALSE() {
	    return this.getToken(MQLParser.K_FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterBoolValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitBoolValue(this);
		}
	}


}



class NumericValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_numericValue;
    }

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
	};

	UNSIGNED_FLOAT() {
	    return this.getToken(MQLParser.UNSIGNED_FLOAT, 0);
	};

	UNSIGNED_SCIENTIFIC_NOTATION() {
	    return this.getToken(MQLParser.UNSIGNED_SCIENTIFIC_NOTATION, 0);
	};

	PLUS() {
	    return this.getToken(MQLParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(MQLParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterNumericValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitNumericValue(this);
		}
	}


}



class DatatypeValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_datatypeValue;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterDatatypeValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitDatatypeValue(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_value;
    }

	numericValue() {
	    return this.getTypedRuleContext(NumericValueContext,0);
	};

	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	boolValue() {
	    return this.getTypedRuleContext(BoolValueContext,0);
	};

	datatypeValue() {
	    return this.getTypedRuleContext(DatatypeValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class ConditionalOrExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_conditionalOrExpr;
    }

	conditionalAndExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalAndExprContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalAndExprContext,i);
	    }
	};

	K_OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.K_OR);
	    } else {
	        return this.getToken(MQLParser.K_OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterConditionalOrExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitConditionalOrExpr(this);
		}
	}


}



class ConditionalAndExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_conditionalAndExpr;
    }

	comparisonExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonExprContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonExprContext,i);
	    }
	};

	K_AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.K_AND);
	    } else {
	        return this.getToken(MQLParser.K_AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterConditionalAndExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitConditionalAndExpr(this);
		}
	}


}



class ComparisonExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_comparisonExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ComparisonExprIsContext extends ComparisonExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	additiveExpr() {
	    return this.getTypedRuleContext(AdditiveExprContext,0);
	};

	K_IS() {
	    return this.getToken(MQLParser.K_IS, 0);
	};

	exprTypename() {
	    return this.getTypedRuleContext(ExprTypenameContext,0);
	};

	K_NOT() {
	    return this.getToken(MQLParser.K_NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterComparisonExprIs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitComparisonExprIs(this);
		}
	}


}

MQLParser.ComparisonExprIsContext = ComparisonExprIsContext;

class ComparisonExprOpContext extends ComparisonExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	additiveExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExprContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExprContext,i);
	    }
	};

	EQ() {
	    return this.getToken(MQLParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(MQLParser.NEQ, 0);
	};

	LT() {
	    return this.getToken(MQLParser.LT, 0);
	};

	GT() {
	    return this.getToken(MQLParser.GT, 0);
	};

	LEQ() {
	    return this.getToken(MQLParser.LEQ, 0);
	};

	GEQ() {
	    return this.getToken(MQLParser.GEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterComparisonExprOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitComparisonExprOp(this);
		}
	}


}

MQLParser.ComparisonExprOpContext = ComparisonExprOpContext;

class AdditiveExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_additiveExpr;
        this.s77 = null;
        this.op = [];
        this.s78 = null;
        this._tset1214 = null;
    }

	multiplicativeExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExprContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExprContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.PLUS);
	    } else {
	        return this.getToken(MQLParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.MINUS);
	    } else {
	        return this.getToken(MQLParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterAdditiveExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitAdditiveExpr(this);
		}
	}


}



class MultiplicativeExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_multiplicativeExpr;
        this.s74 = null;
        this.op = [];
        this.s71 = null;
        this.s75 = null;
        this._tset1233 = null;
    }

	unaryExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryExprContext);
	    } else {
	        return this.getTypedRuleContext(UnaryExprContext,i);
	    }
	};

	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.STAR);
	    } else {
	        return this.getToken(MQLParser.STAR, i);
	    }
	};


	PATH_SEQUENCE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.PATH_SEQUENCE);
	    } else {
	        return this.getToken(MQLParser.PATH_SEQUENCE, i);
	    }
	};


	PERCENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MQLParser.PERCENT);
	    } else {
	        return this.getToken(MQLParser.PERCENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterMultiplicativeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitMultiplicativeExpr(this);
		}
	}


}



class UnaryExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_unaryExpr;
    }

	K_NOT() {
	    return this.getToken(MQLParser.K_NOT, 0);
	};

	unaryExpr() {
	    return this.getTypedRuleContext(UnaryExprContext,0);
	};

	PLUS() {
	    return this.getToken(MQLParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(MQLParser.MINUS, 0);
	};

	atomicExpr() {
	    return this.getTypedRuleContext(AtomicExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterUnaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitUnaryExpr(this);
		}
	}


}



class AtomicExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_atomicExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprValueExprContext extends AtomicExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	valueExpr() {
	    return this.getTypedRuleContext(ValueExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterExprValueExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitExprValueExpr(this);
		}
	}


}

MQLParser.ExprValueExprContext = ExprValueExprContext;

class ExprVarContext extends AtomicExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	KEY() {
	    return this.getToken(MQLParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterExprVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitExprVar(this);
		}
	}


}

MQLParser.ExprVarContext = ExprVarContext;

class ExprParenthesisContext extends AtomicExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	conditionalOrExpr() {
	    return this.getTypedRuleContext(ConditionalOrExprContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterExprParenthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitExprParenthesis(this);
		}
	}


}

MQLParser.ExprParenthesisContext = ExprParenthesisContext;

class ValueExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_valueExpr;
    }

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
	};

	UNSIGNED_FLOAT() {
	    return this.getToken(MQLParser.UNSIGNED_FLOAT, 0);
	};

	STRING() {
	    return this.getToken(MQLParser.STRING, 0);
	};

	boolValue() {
	    return this.getTypedRuleContext(BoolValueContext,0);
	};

	datatypeValue() {
	    return this.getTypedRuleContext(DatatypeValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterValueExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitValueExpr(this);
		}
	}


}



class ExprTypenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_exprTypename;
    }

	K_NULL() {
	    return this.getToken(MQLParser.K_NULL, 0);
	};

	K_STRING() {
	    return this.getToken(MQLParser.K_STRING, 0);
	};

	K_BOOL() {
	    return this.getToken(MQLParser.K_BOOL, 0);
	};

	K_INTEGER() {
	    return this.getToken(MQLParser.K_INTEGER, 0);
	};

	K_FLOAT() {
	    return this.getToken(MQLParser.K_FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterExprTypename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitExprTypename(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_keyword;
    }

	K_ACYCLIC() {
	    return this.getToken(MQLParser.K_ACYCLIC, 0);
	};

	K_AND() {
	    return this.getToken(MQLParser.K_AND, 0);
	};

	K_ANGULAR() {
	    return this.getToken(MQLParser.K_ANGULAR, 0);
	};

	K_ANY() {
	    return this.getToken(MQLParser.K_ANY, 0);
	};

	K_ALL() {
	    return this.getToken(MQLParser.K_ALL, 0);
	};

	K_AVG() {
	    return this.getToken(MQLParser.K_AVG, 0);
	};

	K_ASC() {
	    return this.getToken(MQLParser.K_ASC, 0);
	};

	K_BY() {
	    return this.getToken(MQLParser.K_BY, 0);
	};

	K_BOOL() {
	    return this.getToken(MQLParser.K_BOOL, 0);
	};

	K_COUNT() {
	    return this.getToken(MQLParser.K_COUNT, 0);
	};

	K_DESCRIBE() {
	    return this.getToken(MQLParser.K_DESCRIBE, 0);
	};

	K_DESC() {
	    return this.getToken(MQLParser.K_DESC, 0);
	};

	K_DISTINCT() {
	    return this.getToken(MQLParser.K_DISTINCT, 0);
	};

	K_EDGE() {
	    return this.getToken(MQLParser.K_EDGE, 0);
	};

	K_EUCLIDEAN() {
	    return this.getToken(MQLParser.K_EUCLIDEAN, 0);
	};

	K_INCOMING() {
	    return this.getToken(MQLParser.K_INCOMING, 0);
	};

	K_INSERT() {
	    return this.getToken(MQLParser.K_INSERT, 0);
	};

	K_INTEGER() {
	    return this.getToken(MQLParser.K_INTEGER, 0);
	};

	K_IS() {
	    return this.getToken(MQLParser.K_IS, 0);
	};

	K_FLOAT() {
	    return this.getToken(MQLParser.K_FLOAT, 0);
	};

	K_GROUP() {
	    return this.getToken(MQLParser.K_GROUP, 0);
	};

	K_LABELS() {
	    return this.getToken(MQLParser.K_LABELS, 0);
	};

	K_LABEL() {
	    return this.getToken(MQLParser.K_LABEL, 0);
	};

	K_LIMIT() {
	    return this.getToken(MQLParser.K_LIMIT, 0);
	};

	K_MANHATTAN() {
	    return this.getToken(MQLParser.K_MANHATTAN, 0);
	};

	K_MATCH() {
	    return this.getToken(MQLParser.K_MATCH, 0);
	};

	K_MAX() {
	    return this.getToken(MQLParser.K_MAX, 0);
	};

	K_MIN() {
	    return this.getToken(MQLParser.K_MIN, 0);
	};

	K_OFFSET() {
	    return this.getToken(MQLParser.K_OFFSET, 0);
	};

	K_OPTIONAL() {
	    return this.getToken(MQLParser.K_OPTIONAL, 0);
	};

	K_ORDER() {
	    return this.getToken(MQLParser.K_ORDER, 0);
	};

	K_OR() {
	    return this.getToken(MQLParser.K_OR, 0);
	};

	K_OUTGOING() {
	    return this.getToken(MQLParser.K_OUTGOING, 0);
	};

	K_PROPERTIES() {
	    return this.getToken(MQLParser.K_PROPERTIES, 0);
	};

	K_PROPERTY() {
	    return this.getToken(MQLParser.K_PROPERTY, 0);
	};

	K_NOT() {
	    return this.getToken(MQLParser.K_NOT, 0);
	};

	K_NULL() {
	    return this.getToken(MQLParser.K_NULL, 0);
	};

	K_SHORTEST() {
	    return this.getToken(MQLParser.K_SHORTEST, 0);
	};

	K_SIMPLE() {
	    return this.getToken(MQLParser.K_SIMPLE, 0);
	};

	K_RETURN() {
	    return this.getToken(MQLParser.K_RETURN, 0);
	};

	K_SET() {
	    return this.getToken(MQLParser.K_SET, 0);
	};

	K_SIMILARITY_SEARCH() {
	    return this.getToken(MQLParser.K_SIMILARITY_SEARCH, 0);
	};

	K_SUM() {
	    return this.getToken(MQLParser.K_SUM, 0);
	};

	K_STRING() {
	    return this.getToken(MQLParser.K_STRING, 0);
	};

	K_TRAILS() {
	    return this.getToken(MQLParser.K_TRAILS, 0);
	};

	K_WALKS() {
	    return this.getToken(MQLParser.K_WALKS, 0);
	};

	K_WHERE() {
	    return this.getToken(MQLParser.K_WHERE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitKeyword(this);
		}
	}


}




MQLParser.RootContext = RootContext; 
MQLParser.MatchQueryContext = MatchQueryContext; 
MQLParser.ProjectSimilarityContext = ProjectSimilarityContext; 
MQLParser.MetricTypeContext = MetricTypeContext; 
MQLParser.DescribeQueryContext = DescribeQueryContext; 
MQLParser.DescribeFlagContext = DescribeFlagContext; 
MQLParser.InsertQueryContext = InsertQueryContext; 
MQLParser.InsertLabelListContext = InsertLabelListContext; 
MQLParser.InsertPropertyListContext = InsertPropertyListContext; 
MQLParser.InsertEdgeListContext = InsertEdgeListContext; 
MQLParser.InsertLabelElementContext = InsertLabelElementContext; 
MQLParser.InsertPropertyElementContext = InsertPropertyElementContext; 
MQLParser.InsertEdgeElementContext = InsertEdgeElementContext; 
MQLParser.SetStatementContext = SetStatementContext; 
MQLParser.MatchStatementContext = MatchStatementContext; 
MQLParser.WhereStatementContext = WhereStatementContext; 
MQLParser.GroupByStatementContext = GroupByStatementContext; 
MQLParser.OrderByStatementContext = OrderByStatementContext; 
MQLParser.ReturnStatementContext = ReturnStatementContext; 
MQLParser.LimitOffsetClausesContext = LimitOffsetClausesContext; 
MQLParser.LimitClauseContext = LimitClauseContext; 
MQLParser.OffsetClauseContext = OffsetClauseContext; 
MQLParser.SetItemContext = SetItemContext; 
MQLParser.ReturnItemContext = ReturnItemContext; 
MQLParser.AggregateFuncContext = AggregateFuncContext; 
MQLParser.OrderByItemContext = OrderByItemContext; 
MQLParser.GroupByItemContext = GroupByItemContext; 
MQLParser.GraphPatternContext = GraphPatternContext; 
MQLParser.OptionalPatternContext = OptionalPatternContext; 
MQLParser.SimilaritySearchContext = SimilaritySearchContext; 
MQLParser.TensorContext = TensorContext; 
MQLParser.BasicPatternContext = BasicPatternContext; 
MQLParser.LinearPatternContext = LinearPatternContext; 
MQLParser.PathContext = PathContext; 
MQLParser.PathAlternativesContext = PathAlternativesContext; 
MQLParser.PathSequenceContext = PathSequenceContext; 
MQLParser.PathAtomContext = PathAtomContext; 
MQLParser.PathSuffixContext = PathSuffixContext; 
MQLParser.PathTypeContext = PathTypeContext; 
MQLParser.NodeContext = NodeContext; 
MQLParser.FixedNodeContext = FixedNodeContext; 
MQLParser.FixedNodeInsideContext = FixedNodeInsideContext; 
MQLParser.EdgeContext = EdgeContext; 
MQLParser.EdgeInsideContext = EdgeInsideContext; 
MQLParser.VarNodeContext = VarNodeContext; 
MQLParser.PropertiesContext = PropertiesContext; 
MQLParser.PropertyContext = PropertyContext; 
MQLParser.IdentifierContext = IdentifierContext; 
MQLParser.BoolValueContext = BoolValueContext; 
MQLParser.NumericValueContext = NumericValueContext; 
MQLParser.DatatypeValueContext = DatatypeValueContext; 
MQLParser.ValueContext = ValueContext; 
MQLParser.ConditionalOrExprContext = ConditionalOrExprContext; 
MQLParser.ConditionalAndExprContext = ConditionalAndExprContext; 
MQLParser.ComparisonExprContext = ComparisonExprContext; 
MQLParser.AdditiveExprContext = AdditiveExprContext; 
MQLParser.MultiplicativeExprContext = MultiplicativeExprContext; 
MQLParser.UnaryExprContext = UnaryExprContext; 
MQLParser.AtomicExprContext = AtomicExprContext; 
MQLParser.ValueExprContext = ValueExprContext; 
MQLParser.ExprTypenameContext = ExprTypenameContext; 
MQLParser.KeywordContext = KeywordContext; 
