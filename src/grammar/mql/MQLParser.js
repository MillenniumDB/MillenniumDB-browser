// Generated from src/grammar/mql/MQLParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MQLParserListener from './MQLParserListener.js';
const serializedATN = [4,1,92,765,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,1,0,3,0,
128,8,0,1,0,1,0,3,0,132,8,0,1,0,3,0,135,8,0,1,0,1,0,1,1,1,1,1,1,3,1,142,
8,1,1,1,3,1,145,8,1,1,1,3,1,148,8,1,1,1,3,1,151,8,1,1,1,1,1,1,2,1,2,1,2,
1,2,5,2,159,8,2,10,2,12,2,162,9,2,1,3,1,3,1,3,1,3,5,3,168,8,3,10,3,12,3,
171,9,3,1,4,1,4,3,4,175,8,4,1,4,5,4,178,8,4,10,4,12,4,181,9,4,1,4,3,4,184,
8,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,195,8,6,1,6,1,6,1,6,1,6,1,6,
1,6,3,6,203,8,6,1,6,1,6,1,6,3,6,208,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,3,7,220,8,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,5,9,230,8,9,10,9,12,
9,233,9,9,1,9,1,9,1,10,1,10,1,10,3,10,240,8,10,1,11,1,11,1,11,1,11,5,11,
246,8,11,10,11,12,11,249,9,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,
14,1,14,1,14,5,14,262,8,14,10,14,12,14,265,9,14,1,15,1,15,1,15,1,15,1,15,
5,15,272,8,15,10,15,12,15,275,9,15,1,16,1,16,3,16,279,8,16,1,16,1,16,1,16,
5,16,284,8,16,10,16,12,16,287,9,16,1,16,3,16,290,8,16,1,16,1,16,3,16,294,
8,16,1,16,1,16,3,16,298,8,16,3,16,300,8,16,1,17,1,17,3,17,304,8,17,1,17,
1,17,3,17,308,8,17,3,17,310,8,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,
1,20,1,20,1,21,1,21,3,21,324,8,21,1,21,1,21,1,21,1,21,3,21,330,8,21,1,21,
1,21,1,21,1,21,1,21,3,21,337,8,21,1,21,1,21,3,21,341,8,21,1,21,3,21,344,
8,21,1,21,3,21,347,8,21,1,22,1,22,1,23,1,23,3,23,353,8,23,1,23,3,23,356,
8,23,1,23,1,23,1,23,1,23,3,23,362,8,23,1,23,1,23,3,23,366,8,23,1,23,1,23,
1,23,3,23,371,8,23,1,23,1,23,3,23,375,8,23,1,23,1,23,3,23,379,8,23,3,23,
381,8,23,1,24,1,24,3,24,385,8,24,1,25,1,25,5,25,389,8,25,10,25,12,25,392,
9,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,27,3,27,409,8,27,1,27,1,27,3,27,413,8,27,1,27,1,27,1,27,3,27,418,8,
27,1,27,3,27,421,8,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,3,28,435,8,28,1,28,1,28,1,28,1,28,3,28,441,8,28,1,28,1,28,1,28,
1,29,1,29,1,29,1,29,5,29,450,8,29,10,29,12,29,453,9,29,1,29,1,29,1,30,1,
30,1,30,5,30,460,8,30,10,30,12,30,463,9,30,1,31,1,31,1,31,3,31,468,8,31,
1,31,1,31,5,31,472,8,31,10,31,12,31,475,9,31,1,31,3,31,478,8,31,1,32,1,32,
1,32,3,32,483,8,32,1,32,3,32,486,8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
3,32,495,8,32,1,32,3,32,498,8,32,1,32,1,32,1,32,1,32,1,32,3,32,505,8,32,
1,33,1,33,1,33,5,33,510,8,33,10,33,12,33,513,9,33,1,34,1,34,1,34,5,34,518,
8,34,10,34,12,34,521,9,34,1,35,3,35,524,8,35,1,35,1,35,3,35,528,8,35,1,35,
3,35,531,8,35,1,35,1,35,1,35,1,35,3,35,537,8,35,3,35,539,8,35,1,36,1,36,
1,36,1,36,1,36,1,36,1,36,1,36,3,36,549,8,36,1,37,1,37,3,37,553,8,37,1,37,
3,37,556,8,37,1,38,1,38,3,38,560,8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,
1,40,3,40,570,8,40,1,41,1,41,1,41,3,41,575,8,41,1,41,1,41,1,41,1,41,1,41,
3,41,582,8,41,1,41,3,41,585,8,41,1,42,1,42,3,42,589,8,42,1,42,3,42,592,8,
42,1,42,3,42,595,8,42,1,42,1,42,1,43,1,43,3,43,601,8,43,1,43,5,43,604,8,
43,10,43,12,43,607,9,43,1,43,3,43,610,8,43,1,43,1,43,1,44,1,44,1,44,1,44,
5,44,618,8,44,10,44,12,44,621,9,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,3,
45,630,8,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,641,8,45,1,
45,1,45,5,45,645,8,45,10,45,12,45,648,9,45,1,45,1,45,1,45,1,45,3,45,654,
8,45,1,46,1,46,1,46,1,47,1,47,3,47,661,8,47,1,48,1,48,1,49,3,49,666,8,49,
1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,3,51,679,8,51,1,52,
1,52,1,52,5,52,684,8,52,10,52,12,52,687,9,52,1,53,1,53,1,53,5,53,692,8,53,
10,53,12,53,695,9,53,1,54,1,54,1,54,3,54,700,8,54,1,54,1,54,1,54,3,54,705,
8,54,1,54,1,54,3,54,709,8,54,1,55,1,55,1,55,5,55,714,8,55,10,55,12,55,717,
9,55,1,56,1,56,1,56,5,56,722,8,56,10,56,12,56,725,9,56,1,57,1,57,1,57,1,
57,1,57,1,57,1,57,3,57,734,8,57,1,58,1,58,3,58,738,8,58,1,58,1,58,1,58,1,
58,1,58,1,58,3,58,746,8,58,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
3,60,757,8,60,1,60,1,60,1,61,1,61,1,62,1,62,1,62,0,0,63,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
108,110,112,114,116,118,120,122,124,0,15,3,0,3,3,17,17,28,28,4,0,18,18,25,
25,36,36,38,38,3,0,5,5,30,31,48,48,2,0,7,7,14,14,1,0,80,81,2,0,4,4,6,6,3,
0,1,1,43,43,51,52,2,0,57,57,61,61,1,0,59,60,1,0,67,72,2,0,22,22,50,50,1,
0,63,65,2,0,74,74,77,78,5,0,10,10,20,20,23,23,41,41,49,49,6,0,1,7,9,21,23,
36,38,43,45,49,51,53,819,0,134,1,0,0,0,2,138,1,0,0,0,4,154,1,0,0,0,6,163,
1,0,0,0,8,172,1,0,0,0,10,187,1,0,0,0,12,207,1,0,0,0,14,209,1,0,0,0,16,225,
1,0,0,0,18,227,1,0,0,0,20,236,1,0,0,0,22,241,1,0,0,0,24,250,1,0,0,0,26,253,
1,0,0,0,28,256,1,0,0,0,30,266,1,0,0,0,32,299,1,0,0,0,34,309,1,0,0,0,36,311,
1,0,0,0,38,314,1,0,0,0,40,317,1,0,0,0,42,346,1,0,0,0,44,348,1,0,0,0,46,380,
1,0,0,0,48,382,1,0,0,0,50,386,1,0,0,0,52,393,1,0,0,0,54,398,1,0,0,0,56,424,
1,0,0,0,58,445,1,0,0,0,60,456,1,0,0,0,62,477,1,0,0,0,64,504,1,0,0,0,66,506,
1,0,0,0,68,514,1,0,0,0,70,538,1,0,0,0,72,548,1,0,0,0,74,550,1,0,0,0,76,559,
1,0,0,0,78,561,1,0,0,0,80,569,1,0,0,0,82,584,1,0,0,0,84,586,1,0,0,0,86,598,
1,0,0,0,88,613,1,0,0,0,90,653,1,0,0,0,92,655,1,0,0,0,94,660,1,0,0,0,96,662,
1,0,0,0,98,665,1,0,0,0,100,669,1,0,0,0,102,678,1,0,0,0,104,680,1,0,0,0,106,
688,1,0,0,0,108,708,1,0,0,0,110,710,1,0,0,0,112,718,1,0,0,0,114,733,1,0,
0,0,116,745,1,0,0,0,118,747,1,0,0,0,120,749,1,0,0,0,122,760,1,0,0,0,124,
762,1,0,0,0,126,128,3,22,11,0,127,126,1,0,0,0,127,128,1,0,0,0,128,129,1,
0,0,0,129,132,3,2,1,0,130,132,3,18,9,0,131,127,1,0,0,0,131,130,1,0,0,0,132,
135,1,0,0,0,133,135,3,4,2,0,134,131,1,0,0,0,134,133,1,0,0,0,135,136,1,0,
0,0,136,137,5,0,0,1,137,1,1,0,0,0,138,141,3,24,12,0,139,142,3,14,7,0,140,
142,3,56,28,0,141,139,1,0,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,144,1,
0,0,0,143,145,3,26,13,0,144,143,1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,
146,148,3,28,14,0,147,146,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,151,
3,30,15,0,150,149,1,0,0,0,150,151,1,0,0,0,151,152,1,0,0,0,152,153,3,32,16,
0,153,3,1,0,0,0,154,155,5,19,0,0,155,160,3,6,3,0,156,157,5,88,0,0,157,159,
3,6,3,0,158,156,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,
161,5,1,0,0,0,162,160,1,0,0,0,163,169,3,8,4,0,164,165,3,12,6,0,165,166,3,
8,4,0,166,168,1,0,0,0,167,164,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,
170,1,0,0,0,170,7,1,0,0,0,171,169,1,0,0,0,172,174,5,82,0,0,173,175,3,10,
5,0,174,173,1,0,0,0,174,175,1,0,0,0,175,179,1,0,0,0,176,178,5,59,0,0,177,
176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,183,1,0,
0,0,181,179,1,0,0,0,182,184,3,88,44,0,183,182,1,0,0,0,183,184,1,0,0,0,184,
185,1,0,0,0,185,186,5,83,0,0,186,9,1,0,0,0,187,188,3,94,47,0,188,11,1,0,
0,0,189,190,5,71,0,0,190,191,5,81,0,0,191,192,5,86,0,0,192,194,5,59,0,0,
193,195,3,88,44,0,194,193,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,197,
5,87,0,0,197,208,5,81,0,0,198,199,5,81,0,0,199,200,5,86,0,0,200,202,5,59,
0,0,201,203,3,88,44,0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,
205,5,87,0,0,205,206,5,81,0,0,206,208,5,72,0,0,207,189,1,0,0,0,207,198,1,
0,0,0,208,13,1,0,0,0,209,210,5,37,0,0,210,211,5,82,0,0,211,212,5,61,0,0,
212,213,5,88,0,0,213,214,5,61,0,0,214,215,5,88,0,0,215,216,5,62,0,0,216,
219,5,88,0,0,217,220,3,80,40,0,218,220,3,58,29,0,219,217,1,0,0,0,219,218,
1,0,0,0,220,221,1,0,0,0,221,222,5,88,0,0,222,223,3,16,8,0,223,224,5,83,0,
0,224,15,1,0,0,0,225,226,7,0,0,0,226,17,1,0,0,0,227,231,5,13,0,0,228,230,
3,20,10,0,229,228,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,232,1,0,0,
0,232,234,1,0,0,0,233,231,1,0,0,0,234,235,3,80,40,0,235,19,1,0,0,0,236,239,
7,1,0,0,237,238,5,27,0,0,238,240,5,63,0,0,239,237,1,0,0,0,239,240,1,0,0,
0,240,21,1,0,0,0,241,242,5,46,0,0,242,247,3,40,20,0,243,244,5,88,0,0,244,
246,3,40,20,0,245,243,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,1,
0,0,0,248,23,1,0,0,0,249,247,1,0,0,0,250,251,5,29,0,0,251,252,3,50,25,0,
252,25,1,0,0,0,253,254,5,53,0,0,254,255,3,104,52,0,255,27,1,0,0,0,256,257,
5,24,0,0,257,258,5,9,0,0,258,263,3,48,24,0,259,260,5,88,0,0,260,262,3,48,
24,0,261,259,1,0,0,0,262,265,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,0,264,
29,1,0,0,0,265,263,1,0,0,0,266,267,5,34,0,0,267,268,5,9,0,0,268,273,3,46,
23,0,269,270,5,88,0,0,270,272,3,46,23,0,271,269,1,0,0,0,272,275,1,0,0,0,
273,271,1,0,0,0,273,274,1,0,0,0,274,31,1,0,0,0,275,273,1,0,0,0,276,278,5,
45,0,0,277,279,5,15,0,0,278,277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,
280,285,3,42,21,0,281,282,5,88,0,0,282,284,3,42,21,0,283,281,1,0,0,0,284,
287,1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,289,1,0,0,0,287,285,1,0,
0,0,288,290,3,34,17,0,289,288,1,0,0,0,289,290,1,0,0,0,290,300,1,0,0,0,291,
293,5,45,0,0,292,294,5,15,0,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,
0,0,0,295,297,5,77,0,0,296,298,3,34,17,0,297,296,1,0,0,0,297,298,1,0,0,0,
298,300,1,0,0,0,299,276,1,0,0,0,299,291,1,0,0,0,300,33,1,0,0,0,301,303,3,
36,18,0,302,304,3,38,19,0,303,302,1,0,0,0,303,304,1,0,0,0,304,310,1,0,0,
0,305,307,3,38,19,0,306,308,3,36,18,0,307,306,1,0,0,0,307,308,1,0,0,0,308,
310,1,0,0,0,309,301,1,0,0,0,309,305,1,0,0,0,310,35,1,0,0,0,311,312,5,27,
0,0,312,313,5,63,0,0,313,37,1,0,0,0,314,315,5,32,0,0,315,316,5,63,0,0,316,
39,1,0,0,0,317,318,5,61,0,0,318,319,5,73,0,0,319,320,3,80,40,0,320,41,1,
0,0,0,321,323,5,61,0,0,322,324,5,58,0,0,323,322,1,0,0,0,323,324,1,0,0,0,
324,347,1,0,0,0,325,326,3,44,22,0,326,327,5,82,0,0,327,329,5,61,0,0,328,
330,5,58,0,0,329,328,1,0,0,0,329,330,1,0,0,0,330,331,1,0,0,0,331,332,5,83,
0,0,332,347,1,0,0,0,333,334,5,11,0,0,334,336,5,82,0,0,335,337,5,15,0,0,336,
335,1,0,0,0,336,337,1,0,0,0,337,343,1,0,0,0,338,340,5,61,0,0,339,341,5,58,
0,0,340,339,1,0,0,0,340,341,1,0,0,0,341,344,1,0,0,0,342,344,5,77,0,0,343,
338,1,0,0,0,343,342,1,0,0,0,344,345,1,0,0,0,345,347,5,83,0,0,346,321,1,0,
0,0,346,325,1,0,0,0,346,333,1,0,0,0,347,43,1,0,0,0,348,349,7,2,0,0,349,45,
1,0,0,0,350,352,5,61,0,0,351,353,5,58,0,0,352,351,1,0,0,0,352,353,1,0,0,
0,353,355,1,0,0,0,354,356,7,3,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,381,
1,0,0,0,357,358,3,44,22,0,358,359,5,82,0,0,359,361,5,61,0,0,360,362,5,58,
0,0,361,360,1,0,0,0,361,362,1,0,0,0,362,363,1,0,0,0,363,365,5,83,0,0,364,
366,7,3,0,0,365,364,1,0,0,0,365,366,1,0,0,0,366,381,1,0,0,0,367,368,5,11,
0,0,368,370,5,82,0,0,369,371,5,15,0,0,370,369,1,0,0,0,370,371,1,0,0,0,371,
372,1,0,0,0,372,374,5,61,0,0,373,375,5,58,0,0,374,373,1,0,0,0,374,375,1,
0,0,0,375,376,1,0,0,0,376,378,5,83,0,0,377,379,7,3,0,0,378,377,1,0,0,0,378,
379,1,0,0,0,379,381,1,0,0,0,380,350,1,0,0,0,380,357,1,0,0,0,380,367,1,0,
0,0,381,47,1,0,0,0,382,384,5,61,0,0,383,385,5,58,0,0,384,383,1,0,0,0,384,
385,1,0,0,0,385,49,1,0,0,0,386,390,3,60,30,0,387,389,3,52,26,0,388,387,1,
0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,51,1,0,0,0,392,
390,1,0,0,0,393,394,5,33,0,0,394,395,5,84,0,0,395,396,3,50,25,0,396,397,
5,85,0,0,397,53,1,0,0,0,398,399,5,47,0,0,399,400,5,82,0,0,400,401,5,61,0,
0,401,402,5,88,0,0,402,403,5,61,0,0,403,404,5,88,0,0,404,405,5,62,0,0,405,
408,5,88,0,0,406,409,3,80,40,0,407,409,3,58,29,0,408,406,1,0,0,0,408,407,
1,0,0,0,409,410,1,0,0,0,410,412,5,88,0,0,411,413,7,4,0,0,412,411,1,0,0,0,
412,413,1,0,0,0,413,414,1,0,0,0,414,420,5,63,0,0,415,417,5,88,0,0,416,418,
5,80,0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,419,1,0,0,0,419,421,5,63,0,
0,420,415,1,0,0,0,420,421,1,0,0,0,421,422,1,0,0,0,422,423,5,83,0,0,423,55,
1,0,0,0,424,425,5,8,0,0,425,426,5,82,0,0,426,427,5,61,0,0,427,428,5,88,0,
0,428,429,5,61,0,0,429,430,5,88,0,0,430,431,5,62,0,0,431,434,5,88,0,0,432,
435,3,80,40,0,433,435,3,58,29,0,434,432,1,0,0,0,434,433,1,0,0,0,435,436,
1,0,0,0,436,437,5,88,0,0,437,438,3,16,8,0,438,440,5,88,0,0,439,441,5,80,
0,0,440,439,1,0,0,0,440,441,1,0,0,0,441,442,1,0,0,0,442,443,5,63,0,0,443,
444,5,83,0,0,444,57,1,0,0,0,445,446,5,86,0,0,446,451,3,98,49,0,447,448,5,
88,0,0,448,450,3,98,49,0,449,447,1,0,0,0,450,453,1,0,0,0,451,449,1,0,0,0,
451,452,1,0,0,0,452,454,1,0,0,0,453,451,1,0,0,0,454,455,5,87,0,0,455,59,
1,0,0,0,456,461,3,62,31,0,457,458,5,88,0,0,458,460,3,62,31,0,459,457,1,0,
0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,0,0,462,61,1,0,0,0,463,461,
1,0,0,0,464,473,3,76,38,0,465,468,3,82,41,0,466,468,3,64,32,0,467,465,1,
0,0,0,467,466,1,0,0,0,468,469,1,0,0,0,469,470,3,76,38,0,470,472,1,0,0,0,
471,467,1,0,0,0,472,475,1,0,0,0,473,471,1,0,0,0,473,474,1,0,0,0,474,478,
1,0,0,0,475,473,1,0,0,0,476,478,3,54,27,0,477,464,1,0,0,0,477,476,1,0,0,
0,478,63,1,0,0,0,479,480,5,67,0,0,480,482,5,86,0,0,481,483,3,74,37,0,482,
481,1,0,0,0,482,483,1,0,0,0,483,485,1,0,0,0,484,486,5,61,0,0,485,484,1,0,
0,0,485,486,1,0,0,0,486,487,1,0,0,0,487,488,3,66,33,0,488,489,5,87,0,0,489,
490,5,73,0,0,490,505,1,0,0,0,491,492,5,73,0,0,492,494,5,86,0,0,493,495,3,
74,37,0,494,493,1,0,0,0,494,495,1,0,0,0,495,497,1,0,0,0,496,498,5,61,0,0,
497,496,1,0,0,0,497,498,1,0,0,0,498,499,1,0,0,0,499,500,3,66,33,0,500,501,
5,87,0,0,501,502,5,73,0,0,502,503,5,72,0,0,503,505,1,0,0,0,504,479,1,0,0,
0,504,491,1,0,0,0,505,65,1,0,0,0,506,511,3,68,34,0,507,508,5,75,0,0,508,
510,3,68,34,0,509,507,1,0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,512,1,
0,0,0,512,67,1,0,0,0,513,511,1,0,0,0,514,519,3,70,35,0,515,516,5,74,0,0,
516,518,3,70,35,0,517,515,1,0,0,0,518,521,1,0,0,0,519,517,1,0,0,0,519,520,
1,0,0,0,520,69,1,0,0,0,521,519,1,0,0,0,522,524,5,76,0,0,523,522,1,0,0,0,
523,524,1,0,0,0,524,525,1,0,0,0,525,527,5,59,0,0,526,528,3,72,36,0,527,526,
1,0,0,0,527,528,1,0,0,0,528,539,1,0,0,0,529,531,5,76,0,0,530,529,1,0,0,0,
530,531,1,0,0,0,531,532,1,0,0,0,532,533,5,82,0,0,533,534,3,66,33,0,534,536,
5,83,0,0,535,537,3,72,36,0,536,535,1,0,0,0,536,537,1,0,0,0,537,539,1,0,0,
0,538,523,1,0,0,0,538,530,1,0,0,0,539,71,1,0,0,0,540,549,5,77,0,0,541,549,
5,80,0,0,542,549,5,79,0,0,543,544,5,84,0,0,544,545,5,63,0,0,545,546,5,88,
0,0,546,547,5,63,0,0,547,549,5,85,0,0,548,540,1,0,0,0,548,541,1,0,0,0,548,
542,1,0,0,0,548,543,1,0,0,0,549,73,1,0,0,0,550,552,7,5,0,0,551,553,5,42,
0,0,552,551,1,0,0,0,552,553,1,0,0,0,553,555,1,0,0,0,554,556,7,6,0,0,555,
554,1,0,0,0,555,556,1,0,0,0,556,75,1,0,0,0,557,560,3,78,39,0,558,560,3,86,
43,0,559,557,1,0,0,0,559,558,1,0,0,0,560,77,1,0,0,0,561,562,5,82,0,0,562,
563,3,80,40,0,563,564,5,83,0,0,564,79,1,0,0,0,565,570,3,94,47,0,566,570,
5,56,0,0,567,570,5,57,0,0,568,570,3,102,51,0,569,565,1,0,0,0,569,566,1,0,
0,0,569,567,1,0,0,0,569,568,1,0,0,0,570,81,1,0,0,0,571,574,5,71,0,0,572,
573,5,81,0,0,573,575,3,84,42,0,574,572,1,0,0,0,574,575,1,0,0,0,575,576,1,
0,0,0,576,585,5,81,0,0,577,581,5,81,0,0,578,579,3,84,42,0,579,580,5,81,0,
0,580,582,1,0,0,0,581,578,1,0,0,0,581,582,1,0,0,0,582,583,1,0,0,0,583,585,
5,72,0,0,584,571,1,0,0,0,584,577,1,0,0,0,585,83,1,0,0,0,586,588,5,86,0,0,
587,589,7,7,0,0,588,587,1,0,0,0,588,589,1,0,0,0,589,591,1,0,0,0,590,592,
7,8,0,0,591,590,1,0,0,0,591,592,1,0,0,0,592,594,1,0,0,0,593,595,3,88,44,
0,594,593,1,0,0,0,594,595,1,0,0,0,595,596,1,0,0,0,596,597,5,87,0,0,597,85,
1,0,0,0,598,600,5,82,0,0,599,601,5,61,0,0,600,599,1,0,0,0,600,601,1,0,0,
0,601,605,1,0,0,0,602,604,5,59,0,0,603,602,1,0,0,0,604,607,1,0,0,0,605,603,
1,0,0,0,605,606,1,0,0,0,606,609,1,0,0,0,607,605,1,0,0,0,608,610,3,88,44,
0,609,608,1,0,0,0,609,610,1,0,0,0,610,611,1,0,0,0,611,612,5,83,0,0,612,87,
1,0,0,0,613,614,5,84,0,0,614,619,3,90,45,0,615,616,5,88,0,0,616,618,3,90,
45,0,617,615,1,0,0,0,618,621,1,0,0,0,619,617,1,0,0,0,619,620,1,0,0,0,620,
622,1,0,0,0,621,619,1,0,0,0,622,623,5,85,0,0,623,89,1,0,0,0,624,629,3,94,
47,0,625,626,5,89,0,0,626,630,3,102,51,0,627,630,5,54,0,0,628,630,5,55,0,
0,629,625,1,0,0,0,629,627,1,0,0,0,629,628,1,0,0,0,630,654,1,0,0,0,631,632,
3,94,47,0,632,633,5,59,0,0,633,634,5,82,0,0,634,635,5,62,0,0,635,636,5,83,
0,0,636,654,1,0,0,0,637,638,3,94,47,0,638,640,5,21,0,0,639,641,5,40,0,0,
640,639,1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,646,3,122,61,0,643,645,
3,92,46,0,644,643,1,0,0,0,645,648,1,0,0,0,646,644,1,0,0,0,646,647,1,0,0,
0,647,654,1,0,0,0,648,646,1,0,0,0,649,650,3,94,47,0,650,651,7,9,0,0,651,
652,3,102,51,0,652,654,1,0,0,0,653,624,1,0,0,0,653,631,1,0,0,0,653,637,1,
0,0,0,653,649,1,0,0,0,654,91,1,0,0,0,655,656,5,35,0,0,656,657,3,122,61,0,
657,93,1,0,0,0,658,661,5,66,0,0,659,661,3,124,62,0,660,658,1,0,0,0,660,659,
1,0,0,0,661,95,1,0,0,0,662,663,7,10,0,0,663,97,1,0,0,0,664,666,7,4,0,0,665,
664,1,0,0,0,665,666,1,0,0,0,666,667,1,0,0,0,667,668,7,11,0,0,668,99,1,0,
0,0,669,670,3,94,47,0,670,671,5,82,0,0,671,672,5,62,0,0,672,673,5,83,0,0,
673,101,1,0,0,0,674,679,3,98,49,0,675,679,5,62,0,0,676,679,3,96,48,0,677,
679,3,100,50,0,678,674,1,0,0,0,678,675,1,0,0,0,678,676,1,0,0,0,678,677,1,
0,0,0,679,103,1,0,0,0,680,685,3,106,53,0,681,682,5,35,0,0,682,684,3,106,
53,0,683,681,1,0,0,0,684,687,1,0,0,0,685,683,1,0,0,0,685,686,1,0,0,0,686,
105,1,0,0,0,687,685,1,0,0,0,688,693,3,108,54,0,689,690,5,2,0,0,690,692,3,
108,54,0,691,689,1,0,0,0,692,695,1,0,0,0,693,691,1,0,0,0,693,694,1,0,0,0,
694,107,1,0,0,0,695,693,1,0,0,0,696,699,3,110,55,0,697,698,7,9,0,0,698,700,
3,110,55,0,699,697,1,0,0,0,699,700,1,0,0,0,700,709,1,0,0,0,701,702,3,110,
55,0,702,704,5,21,0,0,703,705,5,40,0,0,704,703,1,0,0,0,704,705,1,0,0,0,705,
706,1,0,0,0,706,707,3,122,61,0,707,709,1,0,0,0,708,696,1,0,0,0,708,701,1,
0,0,0,709,109,1,0,0,0,710,715,3,112,56,0,711,712,7,4,0,0,712,714,3,112,56,
0,713,711,1,0,0,0,714,717,1,0,0,0,715,713,1,0,0,0,715,716,1,0,0,0,716,111,
1,0,0,0,717,715,1,0,0,0,718,723,3,114,57,0,719,720,7,12,0,0,720,722,3,114,
57,0,721,719,1,0,0,0,722,725,1,0,0,0,723,721,1,0,0,0,723,724,1,0,0,0,724,
113,1,0,0,0,725,723,1,0,0,0,726,727,5,40,0,0,727,734,3,114,57,0,728,734,
3,116,58,0,729,730,5,80,0,0,730,734,3,114,57,0,731,732,5,81,0,0,732,734,
3,114,57,0,733,726,1,0,0,0,733,728,1,0,0,0,733,729,1,0,0,0,733,731,1,0,0,
0,734,115,1,0,0,0,735,737,5,61,0,0,736,738,5,58,0,0,737,736,1,0,0,0,737,
738,1,0,0,0,738,746,1,0,0,0,739,746,3,102,51,0,740,741,5,82,0,0,741,742,
3,104,52,0,742,743,5,83,0,0,743,746,1,0,0,0,744,746,3,118,59,0,745,735,1,
0,0,0,745,739,1,0,0,0,745,740,1,0,0,0,745,744,1,0,0,0,746,117,1,0,0,0,747,
748,3,120,60,0,748,119,1,0,0,0,749,750,5,44,0,0,750,751,5,82,0,0,751,752,
3,104,52,0,752,753,5,88,0,0,753,756,3,104,52,0,754,755,5,88,0,0,755,757,
3,104,52,0,756,754,1,0,0,0,756,757,1,0,0,0,757,758,1,0,0,0,758,759,5,83,
0,0,759,121,1,0,0,0,760,761,7,13,0,0,761,123,1,0,0,0,762,763,7,14,0,0,763,
125,1,0,0,0,102,127,131,134,141,144,147,150,160,169,174,179,183,194,202,
207,219,231,239,247,263,273,278,285,289,293,297,299,303,307,309,323,329,
336,340,343,346,352,355,361,365,370,374,378,380,384,390,408,412,417,420,
434,440,451,461,467,473,477,482,485,494,497,504,511,519,523,527,530,536,
538,548,552,555,559,569,574,581,584,588,591,594,600,605,609,619,629,640,
646,653,660,665,678,685,693,699,704,708,715,723,733,737,745,756];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MQLParser extends antlr4.Parser {

    static grammarFileName = "MQLParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'false'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'true'", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "'<='", "'>='", 
                            "'=='", "'!='", "'<'", "'>'", "'='", "'/'", 
                            "'|'", "'^'", "'*'", "'%'", "'?'", "'+'", "'-'", 
                            "'('", "')'", "'{'", "'}'", "'['", "']'", "','", 
                            "':'" ];
    static symbolicNames = [ null, "K_ACYCLIC", "K_AND", "K_ANGULAR", "K_ANY", 
                             "K_AVG", "K_ALL", "K_ASC", "K_BRUTE_SIMILARITY_SEARCH", 
                             "K_BY", "K_BOOL", "K_COUNT", "K_DELETE", "K_DESCRIBE", 
                             "K_DESC", "K_DISTINCT", "K_EDGE", "K_EUCLIDEAN", 
                             "K_INCOMING", "K_INSERT", "K_INTEGER", "K_IS", 
                             "K_FALSE", "K_FLOAT", "K_GROUP", "K_LABELS", 
                             "K_LABEL", "K_LIMIT", "K_MANHATTAN", "K_MATCH", 
                             "K_MAX", "K_MIN", "K_OFFSET", "K_OPTIONAL", 
                             "K_ORDER", "K_OR", "K_OUTGOING", "K_PROJECT_SIMILARITY", 
                             "K_PROPERTIES", "K_PROPERTY", "K_NOT", "K_NULL", 
                             "K_SHORTEST", "K_SIMPLE", "K_REGEX", "K_RETURN", 
                             "K_SET", "K_SIMILARITY_SEARCH", "K_SUM", "K_STRING", 
                             "K_TRUE", "K_TRAILS", "K_WALKS", "K_WHERE", 
                             "TRUE_PROP", "FALSE_PROP", "ANON_ID", "EDGE_ID", 
                             "KEY", "TYPE", "TYPE_VAR", "VARIABLE", "STRING", 
                             "UNSIGNED_INTEGER", "UNSIGNED_FLOAT", "UNSIGNED_SCIENTIFIC_NOTATION", 
                             "NAME", "LEQ", "GEQ", "EQ", "NEQ", "LT", "GT", 
                             "SINGLE_EQ", "PATH_SEQUENCE", "PATH_ALTERNATIVE", 
                             "PATH_NEGATION", "STAR", "PERCENT", "QUESTION_MARK", 
                             "PLUS", "MINUS", "L_PAR", "R_PAR", "LCURLY_BRACKET", 
                             "RCURLY_BRACKET", "LSQUARE_BRACKET", "RSQUARE_BRACKET", 
                             "COMMA", "COLON", "WHITE_SPACE", "SINGLE_LINE_COMMENT", 
                             "UNRECOGNIZED" ];
    static ruleNames = [ "root", "matchQuery", "insertPatterns", "insertLinearPattern", 
                         "insertPlainNode", "insertPlainNodeInside", "insertPlainEdge", 
                         "projectSimilarity", "metricType", "describeQuery", 
                         "describeFlag", "setStatement", "matchStatement", 
                         "whereStatement", "groupByStatement", "orderByStatement", 
                         "returnStatement", "limitOffsetClauses", "limitClause", 
                         "offsetClause", "setItem", "returnItem", "aggregateFunc", 
                         "orderByItem", "groupByItem", "graphPattern", "optionalPattern", 
                         "similaritySearch", "bruteSimilaritySearch", "tensor", 
                         "basicPattern", "linearPattern", "path", "pathAlternatives", 
                         "pathSequence", "pathAtom", "pathSuffix", "pathType", 
                         "node", "fixedNode", "fixedNodeInside", "edge", 
                         "edgeInside", "varNode", "properties", "property", 
                         "conditionalOrType", "identifier", "boolValue", 
                         "numericValue", "datatypeValue", "value", "conditionalOrExpr", 
                         "conditionalAndExpr", "comparisonExpr", "additiveExpr", 
                         "multiplicativeExpr", "unaryExpr", "atomicExpr", 
                         "function", "regex", "exprTypename", "keyword" ];

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
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 29:
	        case 46:
	            this.state = 131;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 29:
	            case 46:
	                this.state = 127;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===46) {
	                    this.state = 126;
	                    this.setStatement();
	                }

	                this.state = 129;
	                this.matchQuery();
	                break;
	            case 13:
	                this.state = 130;
	                this.describeQuery();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case 19:
	            this.state = 133;
	            this.insertPatterns();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 136;
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
	        this.state = 138;
	        this.matchStatement();
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 37:
	        	this.state = 139;
	        	this.projectSimilarity();
	        	break;
	        case 8:
	        	this.state = 140;
	        	this.bruteSimilaritySearch();
	        	break;
	        case 24:
	        case 34:
	        case 45:
	        case 53:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 143;
	            this.whereStatement();
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 146;
	            this.groupByStatement();
	        }

	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 149;
	            this.orderByStatement();
	        }

	        this.state = 152;
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



	insertPatterns() {
	    let localctx = new InsertPatternsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MQLParser.RULE_insertPatterns);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(MQLParser.K_INSERT);
	        this.state = 155;
	        this.insertLinearPattern();
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===88) {
	            this.state = 156;
	            this.match(MQLParser.COMMA);
	            this.state = 157;
	            this.insertLinearPattern();
	            this.state = 162;
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



	insertLinearPattern() {
	    let localctx = new InsertLinearPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MQLParser.RULE_insertLinearPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.insertPlainNode();
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71 || _la===81) {
	            this.state = 164;
	            this.insertPlainEdge();
	            this.state = 165;
	            this.insertPlainNode();
	            this.state = 171;
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



	insertPlainNode() {
	    let localctx = new InsertPlainNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MQLParser.RULE_insertPlainNode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(MQLParser.L_PAR);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4290772734) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 3928031) !== 0) || _la===66) {
	            this.state = 173;
	            this.insertPlainNodeInside();
	        }

	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===59) {
	            this.state = 176;
	            this.match(MQLParser.TYPE);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===84) {
	            this.state = 182;
	            this.properties();
	        }

	        this.state = 185;
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



	insertPlainNodeInside() {
	    let localctx = new InsertPlainNodeInsideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MQLParser.RULE_insertPlainNodeInside);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.identifier();
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



	insertPlainEdge() {
	    let localctx = new InsertPlainEdgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MQLParser.RULE_insertPlainEdge);
	    var _la = 0;
	    try {
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 71:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189;
	            this.match(MQLParser.LT);
	            this.state = 190;
	            this.match(MQLParser.MINUS);
	            this.state = 191;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 192;
	            this.match(MQLParser.TYPE);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===84) {
	                this.state = 193;
	                this.properties();
	            }

	            this.state = 196;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 197;
	            this.match(MQLParser.MINUS);
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.match(MQLParser.MINUS);
	            this.state = 199;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 200;
	            this.match(MQLParser.TYPE);
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===84) {
	                this.state = 201;
	                this.properties();
	            }

	            this.state = 204;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 205;
	            this.match(MQLParser.MINUS);
	            this.state = 206;
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



	projectSimilarity() {
	    let localctx = new ProjectSimilarityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MQLParser.RULE_projectSimilarity);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(MQLParser.K_PROJECT_SIMILARITY);
	        this.state = 210;
	        this.match(MQLParser.L_PAR);
	        this.state = 211;
	        this.match(MQLParser.VARIABLE);
	        this.state = 212;
	        this.match(MQLParser.COMMA);
	        this.state = 213;
	        this.match(MQLParser.VARIABLE);
	        this.state = 214;
	        this.match(MQLParser.COMMA);
	        this.state = 215;
	        this.match(MQLParser.STRING);
	        this.state = 216;
	        this.match(MQLParser.COMMA);
	        this.state = 219;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
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
	        case 35:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 56:
	        case 57:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 80:
	        case 81:
	            this.state = 217;
	            this.fixedNodeInside();
	            break;
	        case 86:
	            this.state = 218;
	            this.tensor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 221;
	        this.match(MQLParser.COMMA);
	        this.state = 222;
	        this.metricType();
	        this.state = 223;
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
	    this.enterRule(localctx, 16, MQLParser.RULE_metricType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 268566536) !== 0))) {
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
	    this.enterRule(localctx, 18, MQLParser.RULE_describeQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.match(MQLParser.K_DESCRIBE);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 228;
	                this.describeFlag(); 
	            }
	            this.state = 233;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 234;
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
	    this.enterRule(localctx, 20, MQLParser.RULE_describeFlag);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        _la = this._input.LA(1);
	        if(!(((((_la - 18)) & ~0x1f) === 0 && ((1 << (_la - 18)) & 1310849) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 237;
	            this.match(MQLParser.K_LIMIT);
	            this.state = 238;
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



	setStatement() {
	    let localctx = new SetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MQLParser.RULE_setStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(MQLParser.K_SET);
	        this.state = 242;
	        this.setItem();
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===88) {
	            this.state = 243;
	            this.match(MQLParser.COMMA);
	            this.state = 244;
	            this.setItem();
	            this.state = 249;
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
	    this.enterRule(localctx, 24, MQLParser.RULE_matchStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(MQLParser.K_MATCH);
	        this.state = 251;
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
	    this.enterRule(localctx, 26, MQLParser.RULE_whereStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(MQLParser.K_WHERE);
	        this.state = 254;
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
	    this.enterRule(localctx, 28, MQLParser.RULE_groupByStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(MQLParser.K_GROUP);
	        this.state = 257;
	        this.match(MQLParser.K_BY);
	        this.state = 258;
	        this.groupByItem();
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===88) {
	            this.state = 259;
	            this.match(MQLParser.COMMA);
	            this.state = 260;
	            this.groupByItem();
	            this.state = 265;
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
	    this.enterRule(localctx, 30, MQLParser.RULE_orderByStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(MQLParser.K_ORDER);
	        this.state = 267;
	        this.match(MQLParser.K_BY);
	        this.state = 268;
	        this.orderByItem();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===88) {
	            this.state = 269;
	            this.match(MQLParser.COMMA);
	            this.state = 270;
	            this.orderByItem();
	            this.state = 275;
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
	    this.enterRule(localctx, 32, MQLParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.state = 299;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReturnListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 276;
	            this.match(MQLParser.K_RETURN);
	            this.state = 278;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 277;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 280;
	            this.returnItem();
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===88) {
	                this.state = 281;
	                this.match(MQLParser.COMMA);
	                this.state = 282;
	                this.returnItem();
	                this.state = 287;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27 || _la===32) {
	                this.state = 288;
	                this.limitOffsetClauses();
	            }

	            break;

	        case 2:
	            localctx = new ReturnAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.match(MQLParser.K_RETURN);
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 292;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 295;
	            this.match(MQLParser.STAR);
	            this.state = 297;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27 || _la===32) {
	                this.state = 296;
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
	    this.enterRule(localctx, 34, MQLParser.RULE_limitOffsetClauses);
	    var _la = 0;
	    try {
	        this.state = 309;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 301;
	            this.limitClause();
	            this.state = 303;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 302;
	                this.offsetClause();
	            }

	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.offsetClause();
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 306;
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
	    this.enterRule(localctx, 36, MQLParser.RULE_limitClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this.match(MQLParser.K_LIMIT);
	        this.state = 312;
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
	    this.enterRule(localctx, 38, MQLParser.RULE_offsetClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(MQLParser.K_OFFSET);
	        this.state = 315;
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
	    this.enterRule(localctx, 40, MQLParser.RULE_setItem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(MQLParser.VARIABLE);
	        this.state = 318;
	        this.match(MQLParser.SINGLE_EQ);
	        this.state = 319;
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
	    this.enterRule(localctx, 42, MQLParser.RULE_returnItem);
	    var _la = 0;
	    try {
	        this.state = 346;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 61:
	            localctx = new ReturnItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 321;
	            this.match(MQLParser.VARIABLE);
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 322;
	                this.match(MQLParser.KEY);
	            }

	            break;
	        case 5:
	        case 30:
	        case 31:
	        case 48:
	            localctx = new ReturnItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 325;
	            this.aggregateFunc();
	            this.state = 326;
	            this.match(MQLParser.L_PAR);
	            this.state = 327;
	            this.match(MQLParser.VARIABLE);
	            this.state = 329;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 328;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 331;
	            this.match(MQLParser.R_PAR);
	            break;
	        case 11:
	            localctx = new ReturnItemCountContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 333;
	            this.match(MQLParser.K_COUNT);
	            this.state = 334;
	            this.match(MQLParser.L_PAR);
	            this.state = 336;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 335;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 343;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 61:
	                this.state = 338;
	                this.match(MQLParser.VARIABLE);
	                this.state = 340;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===58) {
	                    this.state = 339;
	                    this.match(MQLParser.KEY);
	                }

	                break;
	            case 77:
	                this.state = 342;
	                this.match(MQLParser.STAR);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 345;
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
	    this.enterRule(localctx, 44, MQLParser.RULE_aggregateFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221225504) !== 0) || _la===48)) {
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
	    this.enterRule(localctx, 46, MQLParser.RULE_orderByItem);
	    var _la = 0;
	    try {
	        this.state = 380;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 61:
	            localctx = new OrderByItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 350;
	            this.match(MQLParser.VARIABLE);
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 351;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 355;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===14) {
	                this.state = 354;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===14)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;
	        case 5:
	        case 30:
	        case 31:
	        case 48:
	            localctx = new OrderByItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.aggregateFunc();
	            this.state = 358;
	            this.match(MQLParser.L_PAR);
	            this.state = 359;
	            this.match(MQLParser.VARIABLE);
	            this.state = 361;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 360;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 363;
	            this.match(MQLParser.R_PAR);
	            this.state = 365;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===14) {
	                this.state = 364;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===14)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;
	        case 11:
	            localctx = new OrderByItemCountContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 367;
	            this.match(MQLParser.K_COUNT);
	            this.state = 368;
	            this.match(MQLParser.L_PAR);
	            this.state = 370;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 369;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 372;
	            this.match(MQLParser.VARIABLE);
	            this.state = 374;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 373;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 376;
	            this.match(MQLParser.R_PAR);
	            this.state = 378;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===14) {
	                this.state = 377;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===14)) {
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
	    this.enterRule(localctx, 48, MQLParser.RULE_groupByItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(MQLParser.VARIABLE);
	        this.state = 384;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 383;
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
	    this.enterRule(localctx, 50, MQLParser.RULE_graphPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.basicPattern();
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33) {
	            this.state = 387;
	            this.optionalPattern();
	            this.state = 392;
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
	    this.enterRule(localctx, 52, MQLParser.RULE_optionalPattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(MQLParser.K_OPTIONAL);
	        this.state = 394;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 395;
	        this.graphPattern();
	        this.state = 396;
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
	    this.enterRule(localctx, 54, MQLParser.RULE_similaritySearch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.match(MQLParser.K_SIMILARITY_SEARCH);
	        this.state = 399;
	        this.match(MQLParser.L_PAR);
	        this.state = 400;
	        this.match(MQLParser.VARIABLE);
	        this.state = 401;
	        this.match(MQLParser.COMMA);
	        this.state = 402;
	        this.match(MQLParser.VARIABLE);
	        this.state = 403;
	        this.match(MQLParser.COMMA);
	        this.state = 404;
	        this.match(MQLParser.STRING);
	        this.state = 405;
	        this.match(MQLParser.COMMA);
	        this.state = 408;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
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
	        case 35:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 56:
	        case 57:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 80:
	        case 81:
	            this.state = 406;
	            this.fixedNodeInside();
	            break;
	        case 86:
	            this.state = 407;
	            this.tensor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 410;
	        this.match(MQLParser.COMMA);
	        this.state = 412;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80 || _la===81) {
	            this.state = 411;
	            _la = this._input.LA(1);
	            if(!(_la===80 || _la===81)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 414;
	        this.match(MQLParser.UNSIGNED_INTEGER);
	        this.state = 420;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===88) {
	            this.state = 415;
	            this.match(MQLParser.COMMA);
	            this.state = 417;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===80) {
	                this.state = 416;
	                this.match(MQLParser.PLUS);
	            }

	            this.state = 419;
	            this.match(MQLParser.UNSIGNED_INTEGER);
	        }

	        this.state = 422;
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



	bruteSimilaritySearch() {
	    let localctx = new BruteSimilaritySearchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, MQLParser.RULE_bruteSimilaritySearch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this.match(MQLParser.K_BRUTE_SIMILARITY_SEARCH);
	        this.state = 425;
	        this.match(MQLParser.L_PAR);
	        this.state = 426;
	        this.match(MQLParser.VARIABLE);
	        this.state = 427;
	        this.match(MQLParser.COMMA);
	        this.state = 428;
	        this.match(MQLParser.VARIABLE);
	        this.state = 429;
	        this.match(MQLParser.COMMA);
	        this.state = 430;
	        this.match(MQLParser.STRING);
	        this.state = 431;
	        this.match(MQLParser.COMMA);
	        this.state = 434;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
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
	        case 35:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 56:
	        case 57:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 80:
	        case 81:
	            this.state = 432;
	            this.fixedNodeInside();
	            break;
	        case 86:
	            this.state = 433;
	            this.tensor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 436;
	        this.match(MQLParser.COMMA);
	        this.state = 437;
	        this.metricType();
	        this.state = 438;
	        this.match(MQLParser.COMMA);
	        this.state = 440;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80) {
	            this.state = 439;
	            this.match(MQLParser.PLUS);
	        }

	        this.state = 442;
	        this.match(MQLParser.UNSIGNED_INTEGER);
	        this.state = 443;
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
	    this.enterRule(localctx, 58, MQLParser.RULE_tensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 446;
	        this.numericValue();
	        this.state = 451;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===88) {
	            this.state = 447;
	            this.match(MQLParser.COMMA);
	            this.state = 448;
	            this.numericValue();
	            this.state = 453;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 454;
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
	    this.enterRule(localctx, 60, MQLParser.RULE_basicPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this.linearPattern();
	        this.state = 461;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===88) {
	            this.state = 457;
	            this.match(MQLParser.COMMA);
	            this.state = 458;
	            this.linearPattern();
	            this.state = 463;
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
	    this.enterRule(localctx, 62, MQLParser.RULE_linearPattern);
	    var _la = 0;
	    try {
	        this.state = 477;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 464;
	            this.node();
	            this.state = 473;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 16465) !== 0)) {
	                this.state = 467;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 71:
	                case 81:
	                    this.state = 465;
	                    this.edge();
	                    break;
	                case 67:
	                case 73:
	                    this.state = 466;
	                    this.path();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 469;
	                this.node();
	                this.state = 475;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 476;
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
	    this.enterRule(localctx, 64, MQLParser.RULE_path);
	    var _la = 0;
	    try {
	        this.state = 504;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 67:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 479;
	            this.match(MQLParser.LEQ);
	            this.state = 480;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 482;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6) {
	                this.state = 481;
	                this.pathType();
	            }

	            this.state = 485;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 484;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 487;
	            this.pathAlternatives();
	            this.state = 488;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 489;
	            this.match(MQLParser.SINGLE_EQ);
	            break;
	        case 73:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 491;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 492;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 494;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6) {
	                this.state = 493;
	                this.pathType();
	            }

	            this.state = 497;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 496;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 499;
	            this.pathAlternatives();
	            this.state = 500;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 501;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 502;
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
	    this.enterRule(localctx, 66, MQLParser.RULE_pathAlternatives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.pathSequence();
	        this.state = 511;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 507;
	            this.match(MQLParser.PATH_ALTERNATIVE);
	            this.state = 508;
	            this.pathSequence();
	            this.state = 513;
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
	    this.enterRule(localctx, 68, MQLParser.RULE_pathSequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 514;
	        this.pathAtom();
	        this.state = 519;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 515;
	            this.match(MQLParser.PATH_SEQUENCE);
	            this.state = 516;
	            this.pathAtom();
	            this.state = 521;
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
	    this.enterRule(localctx, 70, MQLParser.RULE_pathAtom);
	    var _la = 0;
	    try {
	        this.state = 538;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PathAtomSimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 523;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===76) {
	                this.state = 522;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 525;
	            this.match(MQLParser.TYPE);
	            this.state = 527;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 77)) & ~0x1f) === 0 && ((1 << (_la - 77)) & 141) !== 0)) {
	                this.state = 526;
	                this.pathSuffix();
	            }

	            break;

	        case 2:
	            localctx = new PathAtomAlternativesContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 530;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===76) {
	                this.state = 529;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 532;
	            this.match(MQLParser.L_PAR);
	            this.state = 533;
	            this.pathAlternatives();
	            this.state = 534;
	            this.match(MQLParser.R_PAR);
	            this.state = 536;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 77)) & ~0x1f) === 0 && ((1 << (_la - 77)) & 141) !== 0)) {
	                this.state = 535;
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
	    this.enterRule(localctx, 72, MQLParser.RULE_pathSuffix);
	    try {
	        this.state = 548;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 77:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 540;
	            localctx.op = this.match(MQLParser.STAR);
	            break;
	        case 80:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 541;
	            localctx.op = this.match(MQLParser.PLUS);
	            break;
	        case 79:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 542;
	            localctx.op = this.match(MQLParser.QUESTION_MARK);
	            break;
	        case 84:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 543;
	            this.match(MQLParser.LCURLY_BRACKET);
	            this.state = 544;
	            localctx.min = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 545;
	            this.match(MQLParser.COMMA);
	            this.state = 546;
	            localctx.max = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 547;
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
	    this.enterRule(localctx, 74, MQLParser.RULE_pathType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 550;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 552;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 551;
	            this.match(MQLParser.K_SHORTEST);
	        }

	        this.state = 555;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 769) !== 0)) {
	            this.state = 554;
	            _la = this._input.LA(1);
	            if(!(_la===1 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 769) !== 0))) {
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
	    this.enterRule(localctx, 76, MQLParser.RULE_node);
	    try {
	        this.state = 559;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 557;
	            this.fixedNode();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 558;
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
	    this.enterRule(localctx, 78, MQLParser.RULE_fixedNode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
	        this.match(MQLParser.L_PAR);
	        this.state = 562;
	        this.fixedNodeInside();
	        this.state = 563;
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
	    this.enterRule(localctx, 80, MQLParser.RULE_fixedNodeInside);
	    try {
	        this.state = 569;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,73,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 565;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 566;
	            this.match(MQLParser.ANON_ID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 567;
	            this.match(MQLParser.EDGE_ID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 568;
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
	    this.enterRule(localctx, 82, MQLParser.RULE_edge);
	    var _la = 0;
	    try {
	        this.state = 584;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 71:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 571;
	            this.match(MQLParser.LT);
	            this.state = 574;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
	            if(la_===1) {
	                this.state = 572;
	                this.match(MQLParser.MINUS);
	                this.state = 573;
	                this.edgeInside();

	            }
	            this.state = 576;
	            this.match(MQLParser.MINUS);
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 577;
	            this.match(MQLParser.MINUS);
	            this.state = 581;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===86) {
	                this.state = 578;
	                this.edgeInside();
	                this.state = 579;
	                this.match(MQLParser.MINUS);
	            }

	            this.state = 583;
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
	    this.enterRule(localctx, 84, MQLParser.RULE_edgeInside);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 586;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 588;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57 || _la===61) {
	            this.state = 587;
	            _la = this._input.LA(1);
	            if(!(_la===57 || _la===61)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 591;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===59 || _la===60) {
	            this.state = 590;
	            _la = this._input.LA(1);
	            if(!(_la===59 || _la===60)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 594;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===84) {
	            this.state = 593;
	            this.properties();
	        }

	        this.state = 596;
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
	    this.enterRule(localctx, 86, MQLParser.RULE_varNode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 598;
	        this.match(MQLParser.L_PAR);
	        this.state = 600;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===61) {
	            this.state = 599;
	            this.match(MQLParser.VARIABLE);
	        }

	        this.state = 605;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===59) {
	            this.state = 602;
	            this.match(MQLParser.TYPE);
	            this.state = 607;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 609;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===84) {
	            this.state = 608;
	            this.properties();
	        }

	        this.state = 611;
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
	    this.enterRule(localctx, 88, MQLParser.RULE_properties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 613;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 614;
	        this.property();
	        this.state = 619;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===88) {
	            this.state = 615;
	            this.match(MQLParser.COMMA);
	            this.state = 616;
	            this.property();
	            this.state = 621;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 622;
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
	    this.enterRule(localctx, 90, MQLParser.RULE_property);
	    var _la = 0;
	    try {
	        this.state = 653;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,87,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Property1Context(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 624;
	            this.identifier();
	            this.state = 629;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 89:
	                this.state = 625;
	                this.match(MQLParser.COLON);
	                this.state = 626;
	                this.value();
	                break;
	            case 54:
	                this.state = 627;
	                this.match(MQLParser.TRUE_PROP);
	                break;
	            case 55:
	                this.state = 628;
	                this.match(MQLParser.FALSE_PROP);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            localctx = new Property2Context(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 631;
	            this.identifier();
	            this.state = 632;
	            this.match(MQLParser.TYPE);
	            this.state = 633;
	            this.match(MQLParser.L_PAR);
	            this.state = 634;
	            this.match(MQLParser.STRING);
	            this.state = 635;
	            this.match(MQLParser.R_PAR);
	            break;

	        case 3:
	            localctx = new Property3Context(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 637;
	            this.identifier();
	            this.state = 638;
	            this.match(MQLParser.K_IS);
	            this.state = 640;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 639;
	                this.match(MQLParser.K_NOT);
	            }

	            this.state = 642;
	            this.exprTypename();
	            this.state = 646;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===35) {
	                this.state = 643;
	                this.conditionalOrType();
	                this.state = 648;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 4:
	            localctx = new Property4Context(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 649;
	            this.identifier();

	            this.state = 650;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 63) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 651;
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



	conditionalOrType() {
	    let localctx = new ConditionalOrTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, MQLParser.RULE_conditionalOrType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 655;
	        this.match(MQLParser.K_OR);
	        this.state = 656;
	        this.exprTypename();
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
	        this.state = 660;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 658;
	            this.match(MQLParser.NAME);
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
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
	        case 35:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 51:
	        case 52:
	        case 53:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 659;
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
	        this.state = 662;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===50)) {
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
	        this.state = 665;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80 || _la===81) {
	            this.state = 664;
	            _la = this._input.LA(1);
	            if(!(_la===80 || _la===81)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 667;
	        _la = this._input.LA(1);
	        if(!(((((_la - 63)) & ~0x1f) === 0 && ((1 << (_la - 63)) & 7) !== 0))) {
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
	        this.state = 669;
	        this.identifier();
	        this.state = 670;
	        this.match(MQLParser.L_PAR);
	        this.state = 671;
	        this.match(MQLParser.STRING);
	        this.state = 672;
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
	        this.state = 678;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	        case 64:
	        case 65:
	        case 80:
	        case 81:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 674;
	            this.numericValue();
	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 675;
	            this.match(MQLParser.STRING);
	            break;
	        case 22:
	        case 50:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 676;
	            this.boolValue();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
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
	        case 35:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 51:
	        case 52:
	        case 53:
	        case 66:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 677;
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
	        this.state = 680;
	        this.conditionalAndExpr();
	        this.state = 685;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 681;
	            this.match(MQLParser.K_OR);
	            this.state = 682;
	            this.conditionalAndExpr();
	            this.state = 687;
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
	        this.state = 688;
	        this.comparisonExpr();
	        this.state = 693;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 689;
	            this.match(MQLParser.K_AND);
	            this.state = 690;
	            this.comparisonExpr();
	            this.state = 695;
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
	        this.state = 708;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,95,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ComparisonExprOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 696;
	            this.additiveExpr();
	            this.state = 699;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 63) !== 0)) {
	                this.state = 697;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 63) !== 0))) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 698;
	                this.additiveExpr();
	            }

	            break;

	        case 2:
	            localctx = new ComparisonExprIsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 701;
	            this.additiveExpr();
	            this.state = 702;
	            this.match(MQLParser.K_IS);
	            this.state = 704;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 703;
	                this.match(MQLParser.K_NOT);
	            }

	            this.state = 706;
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
	        this.state = 710;
	        this.multiplicativeExpr();
	        this.state = 715;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===80 || _la===81) {
	            this.state = 711;
	            localctx._tset1342 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===80 || _la===81)) {
	                localctx._tset1342 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1342);
	            this.state = 712;
	            this.multiplicativeExpr();
	            this.state = 717;
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
	        this.state = 718;
	        this.unaryExpr();
	        this.state = 723;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 25) !== 0)) {
	            this.state = 719;
	            localctx._tset1361 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 25) !== 0))) {
	                localctx._tset1361 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1361);
	            this.state = 720;
	            this.unaryExpr();
	            this.state = 725;
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
	        this.state = 733;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,98,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 726;
	            this.match(MQLParser.K_NOT);
	            this.state = 727;
	            this.unaryExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 728;
	            this.atomicExpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 729;
	            this.match(MQLParser.PLUS);
	            this.state = 730;
	            this.unaryExpr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 731;
	            this.match(MQLParser.MINUS);
	            this.state = 732;
	            this.unaryExpr();
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
	        this.state = 745;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 61:
	            localctx = new ExprVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 735;
	            this.match(MQLParser.VARIABLE);
	            this.state = 737;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 736;
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
	        case 35:
	        case 36:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 80:
	        case 81:
	            localctx = new ExprValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 739;
	            this.value();
	            break;
	        case 82:
	            localctx = new ExprParenthesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 740;
	            this.match(MQLParser.L_PAR);
	            this.state = 741;
	            this.conditionalOrExpr();
	            this.state = 742;
	            this.match(MQLParser.R_PAR);
	            break;
	        case 44:
	            localctx = new ExprFunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 744;
	            this.function_();
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



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, MQLParser.RULE_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 747;
	        this.regex();
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



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, MQLParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 749;
	        this.match(MQLParser.K_REGEX);
	        this.state = 750;
	        this.match(MQLParser.L_PAR);
	        this.state = 751;
	        this.conditionalOrExpr();
	        this.state = 752;
	        this.match(MQLParser.COMMA);
	        this.state = 753;
	        this.conditionalOrExpr();
	        this.state = 756;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===88) {
	            this.state = 754;
	            this.match(MQLParser.COMMA);
	            this.state = 755;
	            this.conditionalOrExpr();
	        }

	        this.state = 758;
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



	exprTypename() {
	    let localctx = new ExprTypenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, MQLParser.RULE_exprTypename);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 760;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 9438208) !== 0) || _la===41 || _la===49)) {
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
	    this.enterRule(localctx, 124, MQLParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 762;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4290772734) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 3928031) !== 0))) {
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
MQLParser.K_BRUTE_SIMILARITY_SEARCH = 8;
MQLParser.K_BY = 9;
MQLParser.K_BOOL = 10;
MQLParser.K_COUNT = 11;
MQLParser.K_DELETE = 12;
MQLParser.K_DESCRIBE = 13;
MQLParser.K_DESC = 14;
MQLParser.K_DISTINCT = 15;
MQLParser.K_EDGE = 16;
MQLParser.K_EUCLIDEAN = 17;
MQLParser.K_INCOMING = 18;
MQLParser.K_INSERT = 19;
MQLParser.K_INTEGER = 20;
MQLParser.K_IS = 21;
MQLParser.K_FALSE = 22;
MQLParser.K_FLOAT = 23;
MQLParser.K_GROUP = 24;
MQLParser.K_LABELS = 25;
MQLParser.K_LABEL = 26;
MQLParser.K_LIMIT = 27;
MQLParser.K_MANHATTAN = 28;
MQLParser.K_MATCH = 29;
MQLParser.K_MAX = 30;
MQLParser.K_MIN = 31;
MQLParser.K_OFFSET = 32;
MQLParser.K_OPTIONAL = 33;
MQLParser.K_ORDER = 34;
MQLParser.K_OR = 35;
MQLParser.K_OUTGOING = 36;
MQLParser.K_PROJECT_SIMILARITY = 37;
MQLParser.K_PROPERTIES = 38;
MQLParser.K_PROPERTY = 39;
MQLParser.K_NOT = 40;
MQLParser.K_NULL = 41;
MQLParser.K_SHORTEST = 42;
MQLParser.K_SIMPLE = 43;
MQLParser.K_REGEX = 44;
MQLParser.K_RETURN = 45;
MQLParser.K_SET = 46;
MQLParser.K_SIMILARITY_SEARCH = 47;
MQLParser.K_SUM = 48;
MQLParser.K_STRING = 49;
MQLParser.K_TRUE = 50;
MQLParser.K_TRAILS = 51;
MQLParser.K_WALKS = 52;
MQLParser.K_WHERE = 53;
MQLParser.TRUE_PROP = 54;
MQLParser.FALSE_PROP = 55;
MQLParser.ANON_ID = 56;
MQLParser.EDGE_ID = 57;
MQLParser.KEY = 58;
MQLParser.TYPE = 59;
MQLParser.TYPE_VAR = 60;
MQLParser.VARIABLE = 61;
MQLParser.STRING = 62;
MQLParser.UNSIGNED_INTEGER = 63;
MQLParser.UNSIGNED_FLOAT = 64;
MQLParser.UNSIGNED_SCIENTIFIC_NOTATION = 65;
MQLParser.NAME = 66;
MQLParser.LEQ = 67;
MQLParser.GEQ = 68;
MQLParser.EQ = 69;
MQLParser.NEQ = 70;
MQLParser.LT = 71;
MQLParser.GT = 72;
MQLParser.SINGLE_EQ = 73;
MQLParser.PATH_SEQUENCE = 74;
MQLParser.PATH_ALTERNATIVE = 75;
MQLParser.PATH_NEGATION = 76;
MQLParser.STAR = 77;
MQLParser.PERCENT = 78;
MQLParser.QUESTION_MARK = 79;
MQLParser.PLUS = 80;
MQLParser.MINUS = 81;
MQLParser.L_PAR = 82;
MQLParser.R_PAR = 83;
MQLParser.LCURLY_BRACKET = 84;
MQLParser.RCURLY_BRACKET = 85;
MQLParser.LSQUARE_BRACKET = 86;
MQLParser.RSQUARE_BRACKET = 87;
MQLParser.COMMA = 88;
MQLParser.COLON = 89;
MQLParser.WHITE_SPACE = 90;
MQLParser.SINGLE_LINE_COMMENT = 91;
MQLParser.UNRECOGNIZED = 92;

MQLParser.RULE_root = 0;
MQLParser.RULE_matchQuery = 1;
MQLParser.RULE_insertPatterns = 2;
MQLParser.RULE_insertLinearPattern = 3;
MQLParser.RULE_insertPlainNode = 4;
MQLParser.RULE_insertPlainNodeInside = 5;
MQLParser.RULE_insertPlainEdge = 6;
MQLParser.RULE_projectSimilarity = 7;
MQLParser.RULE_metricType = 8;
MQLParser.RULE_describeQuery = 9;
MQLParser.RULE_describeFlag = 10;
MQLParser.RULE_setStatement = 11;
MQLParser.RULE_matchStatement = 12;
MQLParser.RULE_whereStatement = 13;
MQLParser.RULE_groupByStatement = 14;
MQLParser.RULE_orderByStatement = 15;
MQLParser.RULE_returnStatement = 16;
MQLParser.RULE_limitOffsetClauses = 17;
MQLParser.RULE_limitClause = 18;
MQLParser.RULE_offsetClause = 19;
MQLParser.RULE_setItem = 20;
MQLParser.RULE_returnItem = 21;
MQLParser.RULE_aggregateFunc = 22;
MQLParser.RULE_orderByItem = 23;
MQLParser.RULE_groupByItem = 24;
MQLParser.RULE_graphPattern = 25;
MQLParser.RULE_optionalPattern = 26;
MQLParser.RULE_similaritySearch = 27;
MQLParser.RULE_bruteSimilaritySearch = 28;
MQLParser.RULE_tensor = 29;
MQLParser.RULE_basicPattern = 30;
MQLParser.RULE_linearPattern = 31;
MQLParser.RULE_path = 32;
MQLParser.RULE_pathAlternatives = 33;
MQLParser.RULE_pathSequence = 34;
MQLParser.RULE_pathAtom = 35;
MQLParser.RULE_pathSuffix = 36;
MQLParser.RULE_pathType = 37;
MQLParser.RULE_node = 38;
MQLParser.RULE_fixedNode = 39;
MQLParser.RULE_fixedNodeInside = 40;
MQLParser.RULE_edge = 41;
MQLParser.RULE_edgeInside = 42;
MQLParser.RULE_varNode = 43;
MQLParser.RULE_properties = 44;
MQLParser.RULE_property = 45;
MQLParser.RULE_conditionalOrType = 46;
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
MQLParser.RULE_function = 59;
MQLParser.RULE_regex = 60;
MQLParser.RULE_exprTypename = 61;
MQLParser.RULE_keyword = 62;

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

	insertPatterns() {
	    return this.getTypedRuleContext(InsertPatternsContext,0);
	};

	matchQuery() {
	    return this.getTypedRuleContext(MatchQueryContext,0);
	};

	describeQuery() {
	    return this.getTypedRuleContext(DescribeQueryContext,0);
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

	bruteSimilaritySearch() {
	    return this.getTypedRuleContext(BruteSimilaritySearchContext,0);
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



class InsertPatternsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertPatterns;
    }

	K_INSERT() {
	    return this.getToken(MQLParser.K_INSERT, 0);
	};

	insertLinearPattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InsertLinearPatternContext);
	    } else {
	        return this.getTypedRuleContext(InsertLinearPatternContext,i);
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
	        listener.enterInsertPatterns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertPatterns(this);
		}
	}


}



class InsertLinearPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertLinearPattern;
    }

	insertPlainNode = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InsertPlainNodeContext);
	    } else {
	        return this.getTypedRuleContext(InsertPlainNodeContext,i);
	    }
	};

	insertPlainEdge = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InsertPlainEdgeContext);
	    } else {
	        return this.getTypedRuleContext(InsertPlainEdgeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertLinearPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertLinearPattern(this);
		}
	}


}



class InsertPlainNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertPlainNode;
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	insertPlainNodeInside() {
	    return this.getTypedRuleContext(InsertPlainNodeInsideContext,0);
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
	        listener.enterInsertPlainNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertPlainNode(this);
		}
	}


}



class InsertPlainNodeInsideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertPlainNodeInside;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertPlainNodeInside(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertPlainNodeInside(this);
		}
	}


}



class InsertPlainEdgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertPlainEdge;
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


	LSQUARE_BRACKET() {
	    return this.getToken(MQLParser.LSQUARE_BRACKET, 0);
	};

	TYPE() {
	    return this.getToken(MQLParser.TYPE, 0);
	};

	RSQUARE_BRACKET() {
	    return this.getToken(MQLParser.RSQUARE_BRACKET, 0);
	};

	properties() {
	    return this.getTypedRuleContext(PropertiesContext,0);
	};

	GT() {
	    return this.getToken(MQLParser.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertPlainEdge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertPlainEdge(this);
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



class BruteSimilaritySearchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_bruteSimilaritySearch;
    }

	K_BRUTE_SIMILARITY_SEARCH() {
	    return this.getToken(MQLParser.K_BRUTE_SIMILARITY_SEARCH, 0);
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

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
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

	PLUS() {
	    return this.getToken(MQLParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterBruteSimilaritySearch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitBruteSimilaritySearch(this);
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

class Property4Context extends PropertyContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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
	        listener.enterProperty4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitProperty4(this);
		}
	}


}

MQLParser.Property4Context = Property4Context;

class Property3Context extends PropertyContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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

	conditionalOrType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalOrTypeContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalOrTypeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterProperty3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitProperty3(this);
		}
	}


}

MQLParser.Property3Context = Property3Context;

class ConditionalOrTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_conditionalOrType;
    }

	K_OR() {
	    return this.getToken(MQLParser.K_OR, 0);
	};

	exprTypename() {
	    return this.getTypedRuleContext(ExprTypenameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterConditionalOrType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitConditionalOrType(this);
		}
	}


}



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
        this.s80 = null;
        this.op = [];
        this.s81 = null;
        this._tset1342 = null;
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
        this.s77 = null;
        this.op = [];
        this.s74 = null;
        this.s78 = null;
        this._tset1361 = null;
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

	atomicExpr() {
	    return this.getTypedRuleContext(AtomicExprContext,0);
	};

	PLUS() {
	    return this.getToken(MQLParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(MQLParser.MINUS, 0);
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


class ExprFunctionContext extends AtomicExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterExprFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitExprFunction(this);
		}
	}


}

MQLParser.ExprFunctionContext = ExprFunctionContext;

class ExprValueContext extends AtomicExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterExprValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitExprValue(this);
		}
	}


}

MQLParser.ExprValueContext = ExprValueContext;

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

class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_function;
    }

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitFunction(this);
		}
	}


}



class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_regex;
    }

	K_REGEX() {
	    return this.getToken(MQLParser.K_REGEX, 0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	conditionalOrExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalOrExprContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalOrExprContext,i);
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


	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitRegex(this);
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

	K_DELETE() {
	    return this.getToken(MQLParser.K_DELETE, 0);
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
MQLParser.InsertPatternsContext = InsertPatternsContext; 
MQLParser.InsertLinearPatternContext = InsertLinearPatternContext; 
MQLParser.InsertPlainNodeContext = InsertPlainNodeContext; 
MQLParser.InsertPlainNodeInsideContext = InsertPlainNodeInsideContext; 
MQLParser.InsertPlainEdgeContext = InsertPlainEdgeContext; 
MQLParser.ProjectSimilarityContext = ProjectSimilarityContext; 
MQLParser.MetricTypeContext = MetricTypeContext; 
MQLParser.DescribeQueryContext = DescribeQueryContext; 
MQLParser.DescribeFlagContext = DescribeFlagContext; 
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
MQLParser.BruteSimilaritySearchContext = BruteSimilaritySearchContext; 
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
MQLParser.ConditionalOrTypeContext = ConditionalOrTypeContext; 
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
MQLParser.FunctionContext = FunctionContext; 
MQLParser.RegexContext = RegexContext; 
MQLParser.ExprTypenameContext = ExprTypenameContext; 
MQLParser.KeywordContext = KeywordContext; 
