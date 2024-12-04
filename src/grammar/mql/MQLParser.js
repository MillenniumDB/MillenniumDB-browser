// Generated from src/grammar/mql/MQLParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MQLParserListener from './MQLParserListener.js';
const serializedATN = [4,1,99,788,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,1,0,3,0,138,8,0,1,0,1,0,3,0,142,
8,0,1,0,1,0,3,0,146,8,0,1,0,1,0,1,1,1,1,3,1,152,8,1,1,1,3,1,155,8,1,1,1,
3,1,158,8,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,166,8,2,10,2,12,2,169,9,2,1,3,1,
3,1,3,1,3,5,3,175,8,3,10,3,12,3,178,9,3,1,4,1,4,3,4,182,8,4,1,4,5,4,185,
8,4,10,4,12,4,188,9,4,1,4,3,4,191,8,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,
6,3,6,202,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,210,8,6,1,6,1,6,1,6,3,6,215,8,
6,1,7,1,7,1,7,3,7,220,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,5,9,238,8,9,10,9,12,9,241,9,9,1,10,1,10,1,10,1,10,1,10,
1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,259,8,11,10,
11,12,11,262,9,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,270,8,12,10,12,12,12,
273,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,14,1,14,3,14,290,8,14,1,15,1,15,1,16,1,16,5,16,296,8,16,10,16,12,16,299,
9,16,1,16,1,16,1,17,1,17,1,17,3,17,306,8,17,1,18,1,18,1,18,1,18,5,18,312,
8,18,10,18,12,18,315,9,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,
21,1,21,5,21,328,8,21,10,21,12,21,331,9,21,1,22,1,22,1,22,1,22,1,22,5,22,
338,8,22,10,22,12,22,341,9,22,1,23,1,23,3,23,345,8,23,1,23,1,23,1,23,5,23,
350,8,23,10,23,12,23,353,9,23,1,23,3,23,356,8,23,1,23,1,23,3,23,360,8,23,
1,23,1,23,3,23,364,8,23,3,23,366,8,23,1,24,1,24,3,24,370,8,24,1,24,1,24,
3,24,374,8,24,3,24,376,8,24,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,
1,27,1,28,1,28,3,28,390,8,28,1,28,1,28,1,28,1,28,3,28,396,8,28,1,28,1,28,
3,28,400,8,28,1,28,1,28,1,28,3,28,405,8,28,1,28,1,28,3,28,409,8,28,1,28,
3,28,412,8,28,1,28,1,28,3,28,416,8,28,1,28,1,28,1,28,3,28,421,8,28,1,29,
1,29,1,29,1,30,1,30,1,31,1,31,3,31,430,8,31,1,31,3,31,433,8,31,1,31,1,31,
1,31,1,31,3,31,439,8,31,1,31,1,31,3,31,443,8,31,1,31,1,31,1,31,3,31,448,
8,31,1,31,1,31,3,31,452,8,31,1,31,1,31,3,31,456,8,31,1,31,1,31,3,31,460,
8,31,3,31,462,8,31,1,32,1,32,3,32,466,8,32,1,33,1,33,5,33,470,8,33,10,33,
12,33,473,9,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,5,35,483,8,35,10,
35,12,35,486,9,35,1,36,1,36,1,36,3,36,491,8,36,1,36,1,36,5,36,495,8,36,10,
36,12,36,498,9,36,1,37,1,37,1,37,3,37,503,8,37,1,37,3,37,506,8,37,1,37,1,
37,1,37,1,37,1,37,1,37,1,37,3,37,515,8,37,1,37,3,37,518,8,37,1,37,1,37,1,
37,1,37,1,37,3,37,525,8,37,1,38,1,38,1,38,5,38,530,8,38,10,38,12,38,533,
9,38,1,39,1,39,1,39,5,39,538,8,39,10,39,12,39,541,9,39,1,40,3,40,544,8,40,
1,40,1,40,3,40,548,8,40,1,40,3,40,551,8,40,1,40,1,40,1,40,1,40,3,40,557,
8,40,3,40,559,8,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,569,8,41,
1,42,1,42,3,42,573,8,42,1,42,3,42,576,8,42,1,43,1,43,3,43,580,8,43,1,44,
1,44,1,44,1,44,1,45,1,45,1,45,1,45,3,45,590,8,45,1,46,1,46,1,46,3,46,595,
8,46,1,46,1,46,1,46,1,46,1,46,3,46,602,8,46,1,46,3,46,605,8,46,1,47,1,47,
3,47,609,8,47,1,47,3,47,612,8,47,1,47,3,47,615,8,47,1,47,1,47,1,48,1,48,
3,48,621,8,48,1,48,5,48,624,8,48,10,48,12,48,627,9,48,1,48,3,48,630,8,48,
1,48,1,48,1,49,1,49,1,49,1,49,5,49,638,8,49,10,49,12,49,641,9,49,1,49,1,
49,1,50,1,50,1,50,1,50,1,50,3,50,650,8,50,1,50,1,50,1,50,1,50,1,50,1,50,
1,50,1,50,1,50,3,50,661,8,50,1,50,1,50,5,50,665,8,50,10,50,12,50,668,9,50,
1,50,1,50,1,50,1,50,3,50,674,8,50,1,51,1,51,1,51,1,52,1,52,3,52,681,8,52,
1,53,1,53,1,54,3,54,686,8,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,56,1,56,
1,56,1,56,3,56,699,8,56,1,57,1,57,1,57,5,57,704,8,57,10,57,12,57,707,9,57,
1,58,1,58,1,58,5,58,712,8,58,10,58,12,58,715,9,58,1,59,1,59,1,59,3,59,720,
8,59,1,59,1,59,1,59,3,59,725,8,59,1,59,1,59,3,59,729,8,59,1,60,1,60,1,60,
5,60,734,8,60,10,60,12,60,737,9,60,1,61,1,61,1,61,5,61,742,8,61,10,61,12,
61,745,9,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,754,8,62,1,63,1,63,3,
63,758,8,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,63,767,8,63,1,64,1,64,3,
64,771,8,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,780,8,65,1,65,1,65,1,
66,1,66,1,67,1,67,1,67,0,0,68,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
122,124,126,128,130,132,134,0,15,3,0,3,3,19,19,32,32,3,0,21,21,29,29,41,
42,3,0,6,6,34,35,52,52,2,0,8,8,15,15,2,0,4,4,7,7,4,0,1,1,47,47,57,57,59,
59,2,0,64,64,68,68,1,0,66,67,1,0,74,79,2,0,26,26,56,56,1,0,87,88,1,0,70,
72,2,0,81,81,84,85,5,0,10,10,23,23,27,27,45,45,53,53,3,0,1,25,27,55,57,60,
840,0,145,1,0,0,0,2,149,1,0,0,0,4,161,1,0,0,0,6,170,1,0,0,0,8,179,1,0,0,
0,10,194,1,0,0,0,12,214,1,0,0,0,14,219,1,0,0,0,16,221,1,0,0,0,18,228,1,0,
0,0,20,242,1,0,0,0,22,248,1,0,0,0,24,265,1,0,0,0,26,276,1,0,0,0,28,289,1,
0,0,0,30,291,1,0,0,0,32,293,1,0,0,0,34,302,1,0,0,0,36,307,1,0,0,0,38,316,
1,0,0,0,40,319,1,0,0,0,42,322,1,0,0,0,44,332,1,0,0,0,46,365,1,0,0,0,48,375,
1,0,0,0,50,377,1,0,0,0,52,380,1,0,0,0,54,383,1,0,0,0,56,420,1,0,0,0,58,422,
1,0,0,0,60,425,1,0,0,0,62,461,1,0,0,0,64,463,1,0,0,0,66,467,1,0,0,0,68,474,
1,0,0,0,70,479,1,0,0,0,72,487,1,0,0,0,74,524,1,0,0,0,76,526,1,0,0,0,78,534,
1,0,0,0,80,558,1,0,0,0,82,568,1,0,0,0,84,570,1,0,0,0,86,579,1,0,0,0,88,581,
1,0,0,0,90,589,1,0,0,0,92,604,1,0,0,0,94,606,1,0,0,0,96,618,1,0,0,0,98,633,
1,0,0,0,100,673,1,0,0,0,102,675,1,0,0,0,104,680,1,0,0,0,106,682,1,0,0,0,
108,685,1,0,0,0,110,689,1,0,0,0,112,698,1,0,0,0,114,700,1,0,0,0,116,708,
1,0,0,0,118,728,1,0,0,0,120,730,1,0,0,0,122,738,1,0,0,0,124,753,1,0,0,0,
126,766,1,0,0,0,128,770,1,0,0,0,130,772,1,0,0,0,132,783,1,0,0,0,134,785,
1,0,0,0,136,138,3,36,18,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,
0,139,142,3,2,1,0,140,142,3,32,16,0,141,137,1,0,0,0,141,140,1,0,0,0,142,
146,1,0,0,0,143,146,3,4,2,0,144,146,3,14,7,0,145,141,1,0,0,0,145,143,1,0,
0,0,145,144,1,0,0,0,146,147,1,0,0,0,147,148,5,0,0,1,148,1,1,0,0,0,149,151,
3,38,19,0,150,152,3,40,20,0,151,150,1,0,0,0,151,152,1,0,0,0,152,154,1,0,
0,0,153,155,3,42,21,0,154,153,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,156,
158,3,44,22,0,157,156,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,3,
46,23,0,160,3,1,0,0,0,161,162,5,22,0,0,162,167,3,6,3,0,163,164,5,95,0,0,
164,166,3,6,3,0,165,163,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,
1,0,0,0,168,5,1,0,0,0,169,167,1,0,0,0,170,176,3,8,4,0,171,172,3,12,6,0,172,
173,3,8,4,0,173,175,1,0,0,0,174,171,1,0,0,0,175,178,1,0,0,0,176,174,1,0,
0,0,176,177,1,0,0,0,177,7,1,0,0,0,178,176,1,0,0,0,179,181,5,89,0,0,180,182,
3,10,5,0,181,180,1,0,0,0,181,182,1,0,0,0,182,186,1,0,0,0,183,185,5,66,0,
0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,190,
1,0,0,0,188,186,1,0,0,0,189,191,3,98,49,0,190,189,1,0,0,0,190,191,1,0,0,
0,191,192,1,0,0,0,192,193,5,90,0,0,193,9,1,0,0,0,194,195,3,104,52,0,195,
11,1,0,0,0,196,197,5,78,0,0,197,198,5,88,0,0,198,199,5,93,0,0,199,201,5,
66,0,0,200,202,3,98,49,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,
203,204,5,94,0,0,204,215,5,88,0,0,205,206,5,88,0,0,206,207,5,93,0,0,207,
209,5,66,0,0,208,210,3,98,49,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,
0,0,0,211,212,5,94,0,0,212,213,5,88,0,0,213,215,5,79,0,0,214,196,1,0,0,0,
214,205,1,0,0,0,215,13,1,0,0,0,216,220,3,16,8,0,217,220,3,18,9,0,218,220,
3,22,11,0,219,216,1,0,0,0,219,217,1,0,0,0,219,218,1,0,0,0,220,15,1,0,0,0,
221,222,5,12,0,0,222,223,5,55,0,0,223,224,5,54,0,0,224,225,3,104,52,0,225,
226,5,16,0,0,226,227,5,70,0,0,227,17,1,0,0,0,228,229,5,22,0,0,229,230,5,
24,0,0,230,231,5,55,0,0,231,232,5,54,0,0,232,233,3,104,52,0,233,234,5,58,
0,0,234,239,3,20,10,0,235,236,5,95,0,0,236,238,3,20,10,0,237,235,1,0,0,0,
238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,19,1,0,0,0,241,239,1,
0,0,0,242,243,5,89,0,0,243,244,3,90,45,0,244,245,5,95,0,0,245,246,3,24,12,
0,246,247,5,90,0,0,247,21,1,0,0,0,248,249,5,13,0,0,249,250,5,20,0,0,250,
251,5,55,0,0,251,252,5,54,0,0,252,253,3,104,52,0,253,254,5,36,0,0,254,255,
5,89,0,0,255,260,3,90,45,0,256,257,5,95,0,0,257,259,3,90,45,0,258,256,1,
0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,261,263,1,0,0,0,262,
260,1,0,0,0,263,264,5,90,0,0,264,23,1,0,0,0,265,266,5,93,0,0,266,271,3,108,
54,0,267,268,5,95,0,0,268,270,3,108,54,0,269,267,1,0,0,0,270,273,1,0,0,0,
271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,271,1,0,0,0,274,275,
5,94,0,0,275,25,1,0,0,0,276,277,5,48,0,0,277,278,5,89,0,0,278,279,3,104,
52,0,279,280,5,95,0,0,280,281,3,114,57,0,281,282,5,95,0,0,282,283,3,28,14,
0,283,284,5,95,0,0,284,285,3,30,15,0,285,286,5,90,0,0,286,27,1,0,0,0,287,
290,3,114,57,0,288,290,3,24,12,0,289,287,1,0,0,0,289,288,1,0,0,0,290,29,
1,0,0,0,291,292,7,0,0,0,292,31,1,0,0,0,293,297,5,14,0,0,294,296,3,34,17,
0,295,294,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,300,
1,0,0,0,299,297,1,0,0,0,300,301,3,90,45,0,301,33,1,0,0,0,302,305,7,1,0,0,
303,304,5,31,0,0,304,306,5,70,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,35,
1,0,0,0,307,308,5,51,0,0,308,313,3,54,27,0,309,310,5,95,0,0,310,312,3,54,
27,0,311,309,1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,
37,1,0,0,0,315,313,1,0,0,0,316,317,5,33,0,0,317,318,3,66,33,0,318,39,1,0,
0,0,319,320,5,60,0,0,320,321,3,114,57,0,321,41,1,0,0,0,322,323,5,28,0,0,
323,324,5,9,0,0,324,329,3,64,32,0,325,326,5,95,0,0,326,328,3,64,32,0,327,
325,1,0,0,0,328,331,1,0,0,0,329,327,1,0,0,0,329,330,1,0,0,0,330,43,1,0,0,
0,331,329,1,0,0,0,332,333,5,39,0,0,333,334,5,9,0,0,334,339,3,62,31,0,335,
336,5,95,0,0,336,338,3,62,31,0,337,335,1,0,0,0,338,341,1,0,0,0,339,337,1,
0,0,0,339,340,1,0,0,0,340,45,1,0,0,0,341,339,1,0,0,0,342,344,5,50,0,0,343,
345,5,17,0,0,344,343,1,0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,351,3,56,
28,0,347,348,5,95,0,0,348,350,3,56,28,0,349,347,1,0,0,0,350,353,1,0,0,0,
351,349,1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,0,353,351,1,0,0,0,354,356,
3,48,24,0,355,354,1,0,0,0,355,356,1,0,0,0,356,366,1,0,0,0,357,359,5,50,0,
0,358,360,5,17,0,0,359,358,1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,363,
5,84,0,0,362,364,3,48,24,0,363,362,1,0,0,0,363,364,1,0,0,0,364,366,1,0,0,
0,365,342,1,0,0,0,365,357,1,0,0,0,366,47,1,0,0,0,367,369,3,50,25,0,368,370,
3,52,26,0,369,368,1,0,0,0,369,370,1,0,0,0,370,376,1,0,0,0,371,373,3,52,26,
0,372,374,3,50,25,0,373,372,1,0,0,0,373,374,1,0,0,0,374,376,1,0,0,0,375,
367,1,0,0,0,375,371,1,0,0,0,376,49,1,0,0,0,377,378,5,31,0,0,378,379,5,70,
0,0,379,51,1,0,0,0,380,381,5,37,0,0,381,382,5,70,0,0,382,53,1,0,0,0,383,
384,5,68,0,0,384,385,5,80,0,0,385,386,3,90,45,0,386,55,1,0,0,0,387,389,5,
68,0,0,388,390,5,65,0,0,389,388,1,0,0,0,389,390,1,0,0,0,390,421,1,0,0,0,
391,392,3,60,30,0,392,393,5,89,0,0,393,395,5,68,0,0,394,396,5,65,0,0,395,
394,1,0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,399,5,90,0,0,398,400,3,58,
29,0,399,398,1,0,0,0,399,400,1,0,0,0,400,421,1,0,0,0,401,402,5,11,0,0,402,
404,5,89,0,0,403,405,5,17,0,0,404,403,1,0,0,0,404,405,1,0,0,0,405,411,1,
0,0,0,406,408,5,68,0,0,407,409,5,65,0,0,408,407,1,0,0,0,408,409,1,0,0,0,
409,412,1,0,0,0,410,412,5,84,0,0,411,406,1,0,0,0,411,410,1,0,0,0,412,413,
1,0,0,0,413,415,5,90,0,0,414,416,3,58,29,0,415,414,1,0,0,0,415,416,1,0,0,
0,416,421,1,0,0,0,417,418,3,114,57,0,418,419,3,58,29,0,419,421,1,0,0,0,420,
387,1,0,0,0,420,391,1,0,0,0,420,401,1,0,0,0,420,417,1,0,0,0,421,57,1,0,0,
0,422,423,5,5,0,0,423,424,5,68,0,0,424,59,1,0,0,0,425,426,7,2,0,0,426,61,
1,0,0,0,427,429,5,68,0,0,428,430,5,65,0,0,429,428,1,0,0,0,429,430,1,0,0,
0,430,432,1,0,0,0,431,433,7,3,0,0,432,431,1,0,0,0,432,433,1,0,0,0,433,462,
1,0,0,0,434,435,3,60,30,0,435,436,5,89,0,0,436,438,5,68,0,0,437,439,5,65,
0,0,438,437,1,0,0,0,438,439,1,0,0,0,439,440,1,0,0,0,440,442,5,90,0,0,441,
443,7,3,0,0,442,441,1,0,0,0,442,443,1,0,0,0,443,462,1,0,0,0,444,445,5,11,
0,0,445,447,5,89,0,0,446,448,5,17,0,0,447,446,1,0,0,0,447,448,1,0,0,0,448,
449,1,0,0,0,449,451,5,68,0,0,450,452,5,65,0,0,451,450,1,0,0,0,451,452,1,
0,0,0,452,453,1,0,0,0,453,455,5,90,0,0,454,456,7,3,0,0,455,454,1,0,0,0,455,
456,1,0,0,0,456,462,1,0,0,0,457,459,3,114,57,0,458,460,7,3,0,0,459,458,1,
0,0,0,459,460,1,0,0,0,460,462,1,0,0,0,461,427,1,0,0,0,461,434,1,0,0,0,461,
444,1,0,0,0,461,457,1,0,0,0,462,63,1,0,0,0,463,465,5,68,0,0,464,466,5,65,
0,0,465,464,1,0,0,0,465,466,1,0,0,0,466,65,1,0,0,0,467,471,3,70,35,0,468,
470,3,68,34,0,469,468,1,0,0,0,470,473,1,0,0,0,471,469,1,0,0,0,471,472,1,
0,0,0,472,67,1,0,0,0,473,471,1,0,0,0,474,475,5,38,0,0,475,476,5,91,0,0,476,
477,3,66,33,0,477,478,5,92,0,0,478,69,1,0,0,0,479,484,3,72,36,0,480,481,
5,95,0,0,481,483,3,72,36,0,482,480,1,0,0,0,483,486,1,0,0,0,484,482,1,0,0,
0,484,485,1,0,0,0,485,71,1,0,0,0,486,484,1,0,0,0,487,496,3,86,43,0,488,491,
3,92,46,0,489,491,3,74,37,0,490,488,1,0,0,0,490,489,1,0,0,0,491,492,1,0,
0,0,492,493,3,86,43,0,493,495,1,0,0,0,494,490,1,0,0,0,495,498,1,0,0,0,496,
494,1,0,0,0,496,497,1,0,0,0,497,73,1,0,0,0,498,496,1,0,0,0,499,500,5,74,
0,0,500,502,5,93,0,0,501,503,3,84,42,0,502,501,1,0,0,0,502,503,1,0,0,0,503,
505,1,0,0,0,504,506,5,68,0,0,505,504,1,0,0,0,505,506,1,0,0,0,506,507,1,0,
0,0,507,508,3,76,38,0,508,509,5,94,0,0,509,510,5,80,0,0,510,525,1,0,0,0,
511,512,5,80,0,0,512,514,5,93,0,0,513,515,3,84,42,0,514,513,1,0,0,0,514,
515,1,0,0,0,515,517,1,0,0,0,516,518,5,68,0,0,517,516,1,0,0,0,517,518,1,0,
0,0,518,519,1,0,0,0,519,520,3,76,38,0,520,521,5,94,0,0,521,522,5,80,0,0,
522,523,5,79,0,0,523,525,1,0,0,0,524,499,1,0,0,0,524,511,1,0,0,0,525,75,
1,0,0,0,526,531,3,78,39,0,527,528,5,82,0,0,528,530,3,78,39,0,529,527,1,0,
0,0,530,533,1,0,0,0,531,529,1,0,0,0,531,532,1,0,0,0,532,77,1,0,0,0,533,531,
1,0,0,0,534,539,3,80,40,0,535,536,5,81,0,0,536,538,3,80,40,0,537,535,1,0,
0,0,538,541,1,0,0,0,539,537,1,0,0,0,539,540,1,0,0,0,540,79,1,0,0,0,541,539,
1,0,0,0,542,544,5,83,0,0,543,542,1,0,0,0,543,544,1,0,0,0,544,545,1,0,0,0,
545,547,5,66,0,0,546,548,3,82,41,0,547,546,1,0,0,0,547,548,1,0,0,0,548,559,
1,0,0,0,549,551,5,83,0,0,550,549,1,0,0,0,550,551,1,0,0,0,551,552,1,0,0,0,
552,553,5,89,0,0,553,554,3,76,38,0,554,556,5,90,0,0,555,557,3,82,41,0,556,
555,1,0,0,0,556,557,1,0,0,0,557,559,1,0,0,0,558,543,1,0,0,0,558,550,1,0,
0,0,559,81,1,0,0,0,560,569,5,84,0,0,561,569,5,87,0,0,562,569,5,86,0,0,563,
564,5,91,0,0,564,565,5,70,0,0,565,566,5,95,0,0,566,567,5,70,0,0,567,569,
5,92,0,0,568,560,1,0,0,0,568,561,1,0,0,0,568,562,1,0,0,0,568,563,1,0,0,0,
569,83,1,0,0,0,570,572,7,4,0,0,571,573,5,46,0,0,572,571,1,0,0,0,572,573,
1,0,0,0,573,575,1,0,0,0,574,576,7,5,0,0,575,574,1,0,0,0,575,576,1,0,0,0,
576,85,1,0,0,0,577,580,3,88,44,0,578,580,3,96,48,0,579,577,1,0,0,0,579,578,
1,0,0,0,580,87,1,0,0,0,581,582,5,89,0,0,582,583,3,90,45,0,583,584,5,90,0,
0,584,89,1,0,0,0,585,590,3,104,52,0,586,590,5,63,0,0,587,590,5,64,0,0,588,
590,3,112,56,0,589,585,1,0,0,0,589,586,1,0,0,0,589,587,1,0,0,0,589,588,1,
0,0,0,590,91,1,0,0,0,591,594,5,78,0,0,592,593,5,88,0,0,593,595,3,94,47,0,
594,592,1,0,0,0,594,595,1,0,0,0,595,596,1,0,0,0,596,605,5,88,0,0,597,601,
5,88,0,0,598,599,3,94,47,0,599,600,5,88,0,0,600,602,1,0,0,0,601,598,1,0,
0,0,601,602,1,0,0,0,602,603,1,0,0,0,603,605,5,79,0,0,604,591,1,0,0,0,604,
597,1,0,0,0,605,93,1,0,0,0,606,608,5,93,0,0,607,609,7,6,0,0,608,607,1,0,
0,0,608,609,1,0,0,0,609,611,1,0,0,0,610,612,7,7,0,0,611,610,1,0,0,0,611,
612,1,0,0,0,612,614,1,0,0,0,613,615,3,98,49,0,614,613,1,0,0,0,614,615,1,
0,0,0,615,616,1,0,0,0,616,617,5,94,0,0,617,95,1,0,0,0,618,620,5,89,0,0,619,
621,5,68,0,0,620,619,1,0,0,0,620,621,1,0,0,0,621,625,1,0,0,0,622,624,5,66,
0,0,623,622,1,0,0,0,624,627,1,0,0,0,625,623,1,0,0,0,625,626,1,0,0,0,626,
629,1,0,0,0,627,625,1,0,0,0,628,630,3,98,49,0,629,628,1,0,0,0,629,630,1,
0,0,0,630,631,1,0,0,0,631,632,5,90,0,0,632,97,1,0,0,0,633,634,5,91,0,0,634,
639,3,100,50,0,635,636,5,95,0,0,636,638,3,100,50,0,637,635,1,0,0,0,638,641,
1,0,0,0,639,637,1,0,0,0,639,640,1,0,0,0,640,642,1,0,0,0,641,639,1,0,0,0,
642,643,5,92,0,0,643,99,1,0,0,0,644,649,3,104,52,0,645,646,5,96,0,0,646,
650,3,112,56,0,647,650,5,61,0,0,648,650,5,62,0,0,649,645,1,0,0,0,649,647,
1,0,0,0,649,648,1,0,0,0,650,674,1,0,0,0,651,652,3,104,52,0,652,653,5,66,
0,0,653,654,5,89,0,0,654,655,5,69,0,0,655,656,5,90,0,0,656,674,1,0,0,0,657,
658,3,104,52,0,658,660,5,25,0,0,659,661,5,44,0,0,660,659,1,0,0,0,660,661,
1,0,0,0,661,662,1,0,0,0,662,666,3,132,66,0,663,665,3,102,51,0,664,663,1,
0,0,0,665,668,1,0,0,0,666,664,1,0,0,0,666,667,1,0,0,0,667,674,1,0,0,0,668,
666,1,0,0,0,669,670,3,104,52,0,670,671,7,8,0,0,671,672,3,112,56,0,672,674,
1,0,0,0,673,644,1,0,0,0,673,651,1,0,0,0,673,657,1,0,0,0,673,669,1,0,0,0,
674,101,1,0,0,0,675,676,5,40,0,0,676,677,3,132,66,0,677,103,1,0,0,0,678,
681,5,73,0,0,679,681,3,134,67,0,680,678,1,0,0,0,680,679,1,0,0,0,681,105,
1,0,0,0,682,683,7,9,0,0,683,107,1,0,0,0,684,686,7,10,0,0,685,684,1,0,0,0,
685,686,1,0,0,0,686,687,1,0,0,0,687,688,7,11,0,0,688,109,1,0,0,0,689,690,
3,104,52,0,690,691,5,89,0,0,691,692,5,69,0,0,692,693,5,90,0,0,693,111,1,
0,0,0,694,699,3,108,54,0,695,699,5,69,0,0,696,699,3,106,53,0,697,699,3,110,
55,0,698,694,1,0,0,0,698,695,1,0,0,0,698,696,1,0,0,0,698,697,1,0,0,0,699,
113,1,0,0,0,700,705,3,116,58,0,701,702,5,40,0,0,702,704,3,116,58,0,703,701,
1,0,0,0,704,707,1,0,0,0,705,703,1,0,0,0,705,706,1,0,0,0,706,115,1,0,0,0,
707,705,1,0,0,0,708,713,3,118,59,0,709,710,5,2,0,0,710,712,3,118,59,0,711,
709,1,0,0,0,712,715,1,0,0,0,713,711,1,0,0,0,713,714,1,0,0,0,714,117,1,0,
0,0,715,713,1,0,0,0,716,719,3,120,60,0,717,718,7,8,0,0,718,720,3,120,60,
0,719,717,1,0,0,0,719,720,1,0,0,0,720,729,1,0,0,0,721,722,3,120,60,0,722,
724,5,25,0,0,723,725,5,44,0,0,724,723,1,0,0,0,724,725,1,0,0,0,725,726,1,
0,0,0,726,727,3,132,66,0,727,729,1,0,0,0,728,716,1,0,0,0,728,721,1,0,0,0,
729,119,1,0,0,0,730,735,3,122,61,0,731,732,7,10,0,0,732,734,3,122,61,0,733,
731,1,0,0,0,734,737,1,0,0,0,735,733,1,0,0,0,735,736,1,0,0,0,736,121,1,0,
0,0,737,735,1,0,0,0,738,743,3,124,62,0,739,740,7,12,0,0,740,742,3,124,62,
0,741,739,1,0,0,0,742,745,1,0,0,0,743,741,1,0,0,0,743,744,1,0,0,0,744,123,
1,0,0,0,745,743,1,0,0,0,746,747,5,44,0,0,747,754,3,124,62,0,748,754,3,126,
63,0,749,750,5,87,0,0,750,754,3,124,62,0,751,752,5,88,0,0,752,754,3,124,
62,0,753,746,1,0,0,0,753,748,1,0,0,0,753,749,1,0,0,0,753,751,1,0,0,0,754,
125,1,0,0,0,755,757,5,68,0,0,756,758,5,65,0,0,757,756,1,0,0,0,757,758,1,
0,0,0,758,767,1,0,0,0,759,767,3,112,56,0,760,767,3,90,45,0,761,762,5,89,
0,0,762,763,3,114,57,0,763,764,5,90,0,0,764,767,1,0,0,0,765,767,3,128,64,
0,766,755,1,0,0,0,766,759,1,0,0,0,766,760,1,0,0,0,766,761,1,0,0,0,766,765,
1,0,0,0,767,127,1,0,0,0,768,771,3,130,65,0,769,771,3,26,13,0,770,768,1,0,
0,0,770,769,1,0,0,0,771,129,1,0,0,0,772,773,5,49,0,0,773,774,5,89,0,0,774,
775,3,114,57,0,775,776,5,95,0,0,776,779,3,114,57,0,777,778,5,95,0,0,778,
780,3,114,57,0,779,777,1,0,0,0,779,780,1,0,0,0,780,781,1,0,0,0,781,782,5,
90,0,0,782,131,1,0,0,0,783,784,7,13,0,0,784,133,1,0,0,0,785,786,7,14,0,0,
786,135,1,0,0,0,101,137,141,145,151,154,157,167,176,181,186,190,201,209,
214,219,239,260,271,289,297,305,313,329,339,344,351,355,359,363,365,369,
373,375,389,395,399,404,408,411,415,420,429,432,438,442,447,451,455,459,
461,465,471,484,490,496,502,505,514,517,524,531,539,543,547,550,556,558,
568,572,575,579,589,594,601,604,608,611,614,620,625,629,639,649,660,666,
673,680,685,698,705,713,719,724,728,735,743,753,757,766,770,779];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MQLParser extends antlr4.Parser {

    static grammarFileName = "MQLParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'false'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'true'", null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'<='", "'>='", "'=='", 
                            "'!='", "'<'", "'>'", "'='", "'/'", "'|'", "'^'", 
                            "'*'", "'%'", "'?'", "'+'", "'-'", "'('", "')'", 
                            "'{'", "'}'", "'['", "']'", "','", "':'" ];
    static symbolicNames = [ null, "K_ACYCLIC", "K_AND", "K_ANGULAR", "K_ANY", 
                             "K_AS", "K_AVG", "K_ALL", "K_ASC", "K_BY", 
                             "K_BOOL", "K_COUNT", "K_CREATE", "K_DELETE", 
                             "K_DESCRIBE", "K_DESC", "K_DIMENSIONS", "K_DISTINCT", 
                             "K_EDGE", "K_EUCLIDEAN", "K_FROM", "K_INCOMING", 
                             "K_INSERT", "K_INTEGER", "K_INTO", "K_IS", 
                             "K_FALSE", "K_FLOAT", "K_GROUP", "K_LABELS", 
                             "K_LABEL", "K_LIMIT", "K_MANHATTAN", "K_MATCH", 
                             "K_MAX", "K_MIN", "K_OBJECTS", "K_OFFSET", 
                             "K_OPTIONAL", "K_ORDER", "K_OR", "K_OUTGOING", 
                             "K_PROPERTIES", "K_PROPERTY", "K_NOT", "K_NULL", 
                             "K_SHORTEST", "K_SIMPLE", "K_TENSOR_DISTANCE", 
                             "K_REGEX", "K_RETURN", "K_SET", "K_SUM", "K_STRING", 
                             "K_STORE", "K_TENSOR", "K_TRUE", "K_TRAILS", 
                             "K_VALUES", "K_WALKS", "K_WHERE", "TRUE_PROP", 
                             "FALSE_PROP", "ANON_ID", "EDGE_ID", "KEY", 
                             "TYPE", "TYPE_VAR", "VARIABLE", "STRING", "UNSIGNED_INTEGER", 
                             "UNSIGNED_FLOAT", "UNSIGNED_SCIENTIFIC_NOTATION", 
                             "NAME", "LEQ", "GEQ", "EQ", "NEQ", "LT", "GT", 
                             "SINGLE_EQ", "PATH_SEQUENCE", "PATH_ALTERNATIVE", 
                             "PATH_NEGATION", "STAR", "PERCENT", "QUESTION_MARK", 
                             "PLUS", "MINUS", "L_PAR", "R_PAR", "LCURLY_BRACKET", 
                             "RCURLY_BRACKET", "LSQUARE_BRACKET", "RSQUARE_BRACKET", 
                             "COMMA", "COLON", "WHITE_SPACE", "SINGLE_LINE_COMMENT", 
                             "UNRECOGNIZED" ];
    static ruleNames = [ "root", "matchQuery", "insertPatterns", "insertLinearPattern", 
                         "insertPlainNode", "insertPlainNodeInside", "insertPlainEdge", 
                         "tensorStoreQuery", "createTensorStore", "insertTensors", 
                         "insertTensorsTuple", "deleteTensors", "tensor", 
                         "tensorDistance", "tensorDistanceReference", "metricType", 
                         "describeQuery", "describeFlag", "setStatement", 
                         "matchStatement", "whereStatement", "groupByStatement", 
                         "orderByStatement", "returnStatement", "limitOffsetClauses", 
                         "limitClause", "offsetClause", "setItem", "returnItem", 
                         "alias", "aggregateFunc", "orderByItem", "groupByItem", 
                         "graphPattern", "optionalPattern", "basicPattern", 
                         "linearPattern", "path", "pathAlternatives", "pathSequence", 
                         "pathAtom", "pathSuffix", "pathType", "node", "fixedNode", 
                         "fixedNodeInside", "edge", "edgeInside", "varNode", 
                         "properties", "property", "conditionalOrType", 
                         "identifier", "boolValue", "numericValue", "datatypeValue", 
                         "value", "conditionalOrExpr", "conditionalAndExpr", 
                         "comparisonExpr", "additiveExpr", "multiplicativeExpr", 
                         "unaryExpr", "atomicExpr", "function", "regex", 
                         "exprTypename", "keyword" ];

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
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 141;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 33:
	            case 51:
	                this.state = 137;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===51) {
	                    this.state = 136;
	                    this.setStatement();
	                }

	                this.state = 139;
	                this.matchQuery();
	                break;
	            case 14:
	                this.state = 140;
	                this.describeQuery();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            this.state = 143;
	            this.insertPatterns();
	            break;

	        case 3:
	            this.state = 144;
	            this.tensorStoreQuery();
	            break;

	        }
	        this.state = 147;
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
	        this.state = 149;
	        this.matchStatement();
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 150;
	            this.whereStatement();
	        }

	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 153;
	            this.groupByStatement();
	        }

	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 156;
	            this.orderByStatement();
	        }

	        this.state = 159;
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
	        this.state = 161;
	        this.match(MQLParser.K_INSERT);
	        this.state = 162;
	        this.insertLinearPattern();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 163;
	            this.match(MQLParser.COMMA);
	            this.state = 164;
	            this.insertLinearPattern();
	            this.state = 169;
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
	        this.state = 170;
	        this.insertPlainNode();
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===78 || _la===88) {
	            this.state = 171;
	            this.insertPlainEdge();
	            this.state = 172;
	            this.insertPlainNode();
	            this.state = 178;
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
	        this.state = 179;
	        this.match(MQLParser.L_PAR);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4227858430) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 520093695) !== 0) || _la===73) {
	            this.state = 180;
	            this.insertPlainNodeInside();
	        }

	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 183;
	            this.match(MQLParser.TYPE);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===91) {
	            this.state = 189;
	            this.properties();
	        }

	        this.state = 192;
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
	        this.state = 194;
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
	        this.state = 214;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 78:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 196;
	            this.match(MQLParser.LT);
	            this.state = 197;
	            this.match(MQLParser.MINUS);
	            this.state = 198;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 199;
	            this.match(MQLParser.TYPE);
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===91) {
	                this.state = 200;
	                this.properties();
	            }

	            this.state = 203;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 204;
	            this.match(MQLParser.MINUS);
	            break;
	        case 88:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.match(MQLParser.MINUS);
	            this.state = 206;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 207;
	            this.match(MQLParser.TYPE);
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===91) {
	                this.state = 208;
	                this.properties();
	            }

	            this.state = 211;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 212;
	            this.match(MQLParser.MINUS);
	            this.state = 213;
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



	tensorStoreQuery() {
	    let localctx = new TensorStoreQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MQLParser.RULE_tensorStoreQuery);
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 216;
	            this.createTensorStore();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 217;
	            this.insertTensors();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 218;
	            this.deleteTensors();
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



	createTensorStore() {
	    let localctx = new CreateTensorStoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MQLParser.RULE_createTensorStore);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(MQLParser.K_CREATE);
	        this.state = 222;
	        this.match(MQLParser.K_TENSOR);
	        this.state = 223;
	        this.match(MQLParser.K_STORE);
	        this.state = 224;
	        this.identifier();
	        this.state = 225;
	        this.match(MQLParser.K_DIMENSIONS);
	        this.state = 226;
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



	insertTensors() {
	    let localctx = new InsertTensorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MQLParser.RULE_insertTensors);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(MQLParser.K_INSERT);
	        this.state = 229;
	        this.match(MQLParser.K_INTO);
	        this.state = 230;
	        this.match(MQLParser.K_TENSOR);
	        this.state = 231;
	        this.match(MQLParser.K_STORE);
	        this.state = 232;
	        this.identifier();
	        this.state = 233;
	        this.match(MQLParser.K_VALUES);
	        this.state = 234;
	        this.insertTensorsTuple();
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 235;
	            this.match(MQLParser.COMMA);
	            this.state = 236;
	            this.insertTensorsTuple();
	            this.state = 241;
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



	insertTensorsTuple() {
	    let localctx = new InsertTensorsTupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MQLParser.RULE_insertTensorsTuple);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(MQLParser.L_PAR);
	        this.state = 243;
	        this.fixedNodeInside();
	        this.state = 244;
	        this.match(MQLParser.COMMA);
	        this.state = 245;
	        this.tensor();
	        this.state = 246;
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



	deleteTensors() {
	    let localctx = new DeleteTensorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MQLParser.RULE_deleteTensors);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(MQLParser.K_DELETE);
	        this.state = 249;
	        this.match(MQLParser.K_FROM);
	        this.state = 250;
	        this.match(MQLParser.K_TENSOR);
	        this.state = 251;
	        this.match(MQLParser.K_STORE);
	        this.state = 252;
	        this.identifier();
	        this.state = 253;
	        this.match(MQLParser.K_OBJECTS);
	        this.state = 254;
	        this.match(MQLParser.L_PAR);
	        this.state = 255;
	        this.fixedNodeInside();
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 256;
	            this.match(MQLParser.COMMA);
	            this.state = 257;
	            this.fixedNodeInside();
	            this.state = 262;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 263;
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
	    this.enterRule(localctx, 24, MQLParser.RULE_tensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 266;
	        this.numericValue();
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 267;
	            this.match(MQLParser.COMMA);
	            this.state = 268;
	            this.numericValue();
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 274;
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



	tensorDistance() {
	    let localctx = new TensorDistanceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MQLParser.RULE_tensorDistance);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(MQLParser.K_TENSOR_DISTANCE);
	        this.state = 277;
	        this.match(MQLParser.L_PAR);
	        this.state = 278;
	        this.identifier();
	        this.state = 279;
	        this.match(MQLParser.COMMA);
	        this.state = 280;
	        this.conditionalOrExpr();
	        this.state = 281;
	        this.match(MQLParser.COMMA);
	        this.state = 282;
	        this.tensorDistanceReference();
	        this.state = 283;
	        this.match(MQLParser.COMMA);
	        this.state = 284;
	        this.metricType();
	        this.state = 285;
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



	tensorDistanceReference() {
	    let localctx = new TensorDistanceReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MQLParser.RULE_tensorDistanceReference);
	    try {
	        this.state = 289;
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
	        case 35:
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
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 63:
	        case 64:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 87:
	        case 88:
	        case 89:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 287;
	            this.conditionalOrExpr();
	            break;
	        case 93:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
	            this.tensor();
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



	metricType() {
	    let localctx = new MetricTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MQLParser.RULE_metricType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        _la = this._input.LA(1);
	        if(!(((((_la - 3)) & ~0x1f) === 0 && ((1 << (_la - 3)) & 536936449) !== 0))) {
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
	    this.enterRule(localctx, 32, MQLParser.RULE_describeQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(MQLParser.K_DESCRIBE);
	        this.state = 297;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 294;
	                this.describeFlag(); 
	            }
	            this.state = 299;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 300;
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
	    this.enterRule(localctx, 34, MQLParser.RULE_describeFlag);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        _la = this._input.LA(1);
	        if(!(((((_la - 21)) & ~0x1f) === 0 && ((1 << (_la - 21)) & 3145985) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 305;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 303;
	            this.match(MQLParser.K_LIMIT);
	            this.state = 304;
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
	    this.enterRule(localctx, 36, MQLParser.RULE_setStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(MQLParser.K_SET);
	        this.state = 308;
	        this.setItem();
	        this.state = 313;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 309;
	            this.match(MQLParser.COMMA);
	            this.state = 310;
	            this.setItem();
	            this.state = 315;
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
	    this.enterRule(localctx, 38, MQLParser.RULE_matchStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(MQLParser.K_MATCH);
	        this.state = 317;
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
	    this.enterRule(localctx, 40, MQLParser.RULE_whereStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(MQLParser.K_WHERE);
	        this.state = 320;
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
	    this.enterRule(localctx, 42, MQLParser.RULE_groupByStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(MQLParser.K_GROUP);
	        this.state = 323;
	        this.match(MQLParser.K_BY);
	        this.state = 324;
	        this.groupByItem();
	        this.state = 329;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 325;
	            this.match(MQLParser.COMMA);
	            this.state = 326;
	            this.groupByItem();
	            this.state = 331;
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
	    this.enterRule(localctx, 44, MQLParser.RULE_orderByStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.match(MQLParser.K_ORDER);
	        this.state = 333;
	        this.match(MQLParser.K_BY);
	        this.state = 334;
	        this.orderByItem();
	        this.state = 339;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 335;
	            this.match(MQLParser.COMMA);
	            this.state = 336;
	            this.orderByItem();
	            this.state = 341;
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
	    this.enterRule(localctx, 46, MQLParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReturnListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 342;
	            this.match(MQLParser.K_RETURN);
	            this.state = 344;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 343;
	                this.match(MQLParser.K_DISTINCT);

	            }
	            this.state = 346;
	            this.returnItem();
	            this.state = 351;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===95) {
	                this.state = 347;
	                this.match(MQLParser.COMMA);
	                this.state = 348;
	                this.returnItem();
	                this.state = 353;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 355;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31 || _la===37) {
	                this.state = 354;
	                this.limitOffsetClauses();
	            }

	            break;

	        case 2:
	            localctx = new ReturnAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.match(MQLParser.K_RETURN);
	            this.state = 359;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 358;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 361;
	            this.match(MQLParser.STAR);
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31 || _la===37) {
	                this.state = 362;
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
	    this.enterRule(localctx, 48, MQLParser.RULE_limitOffsetClauses);
	    var _la = 0;
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 367;
	            this.limitClause();
	            this.state = 369;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 368;
	                this.offsetClause();
	            }

	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 371;
	            this.offsetClause();
	            this.state = 373;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 372;
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
	    this.enterRule(localctx, 50, MQLParser.RULE_limitClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(MQLParser.K_LIMIT);
	        this.state = 378;
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
	    this.enterRule(localctx, 52, MQLParser.RULE_offsetClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(MQLParser.K_OFFSET);
	        this.state = 381;
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
	    this.enterRule(localctx, 54, MQLParser.RULE_setItem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.match(MQLParser.VARIABLE);
	        this.state = 384;
	        this.match(MQLParser.SINGLE_EQ);
	        this.state = 385;
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
	    this.enterRule(localctx, 56, MQLParser.RULE_returnItem);
	    var _la = 0;
	    try {
	        this.state = 420;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReturnItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 387;
	            this.match(MQLParser.VARIABLE);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 388;
	                this.match(MQLParser.KEY);
	            }

	            break;

	        case 2:
	            localctx = new ReturnItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 391;
	            this.aggregateFunc();
	            this.state = 392;
	            this.match(MQLParser.L_PAR);
	            this.state = 393;
	            this.match(MQLParser.VARIABLE);
	            this.state = 395;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 394;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 397;
	            this.match(MQLParser.R_PAR);
	            this.state = 399;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 398;
	                this.alias();
	            }

	            break;

	        case 3:
	            localctx = new ReturnItemCountContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 401;
	            this.match(MQLParser.K_COUNT);
	            this.state = 402;
	            this.match(MQLParser.L_PAR);
	            this.state = 404;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 403;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 411;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 68:
	                this.state = 406;
	                this.match(MQLParser.VARIABLE);
	                this.state = 408;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===65) {
	                    this.state = 407;
	                    this.match(MQLParser.KEY);
	                }

	                break;
	            case 84:
	                this.state = 410;
	                this.match(MQLParser.STAR);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 413;
	            this.match(MQLParser.R_PAR);
	            this.state = 415;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 414;
	                this.alias();
	            }

	            break;

	        case 4:
	            localctx = new ReturnItemExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 417;
	            this.conditionalOrExpr();
	            this.state = 418;
	            this.alias();
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



	alias() {
	    let localctx = new AliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, MQLParser.RULE_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(MQLParser.K_AS);
	        this.state = 423;
	        this.match(MQLParser.VARIABLE);
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
	    this.enterRule(localctx, 60, MQLParser.RULE_aggregateFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        _la = this._input.LA(1);
	        if(!(_la===6 || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 262147) !== 0))) {
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
	    this.enterRule(localctx, 62, MQLParser.RULE_orderByItem);
	    var _la = 0;
	    try {
	        this.state = 461;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OrderByItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.match(MQLParser.VARIABLE);
	            this.state = 429;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 428;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 432;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===15) {
	                this.state = 431;
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===15)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;

	        case 2:
	            localctx = new OrderByItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 434;
	            this.aggregateFunc();
	            this.state = 435;
	            this.match(MQLParser.L_PAR);
	            this.state = 436;
	            this.match(MQLParser.VARIABLE);
	            this.state = 438;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 437;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 440;
	            this.match(MQLParser.R_PAR);
	            this.state = 442;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===15) {
	                this.state = 441;
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===15)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;

	        case 3:
	            localctx = new OrderByItemCountContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 444;
	            this.match(MQLParser.K_COUNT);
	            this.state = 445;
	            this.match(MQLParser.L_PAR);
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 446;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 449;
	            this.match(MQLParser.VARIABLE);
	            this.state = 451;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 450;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 453;
	            this.match(MQLParser.R_PAR);
	            this.state = 455;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===15) {
	                this.state = 454;
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===15)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            break;

	        case 4:
	            localctx = new OrderByItemExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 457;
	            this.conditionalOrExpr();
	            this.state = 459;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8 || _la===15) {
	                this.state = 458;
	                _la = this._input.LA(1);
	                if(!(_la===8 || _la===15)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
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



	groupByItem() {
	    let localctx = new GroupByItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, MQLParser.RULE_groupByItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.match(MQLParser.VARIABLE);
	        this.state = 465;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===65) {
	            this.state = 464;
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
	    this.enterRule(localctx, 66, MQLParser.RULE_graphPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.basicPattern();
	        this.state = 471;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 468;
	            this.optionalPattern();
	            this.state = 473;
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
	    this.enterRule(localctx, 68, MQLParser.RULE_optionalPattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
	        this.match(MQLParser.K_OPTIONAL);
	        this.state = 475;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 476;
	        this.graphPattern();
	        this.state = 477;
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



	basicPattern() {
	    let localctx = new BasicPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, MQLParser.RULE_basicPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.linearPattern();
	        this.state = 484;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 480;
	            this.match(MQLParser.COMMA);
	            this.state = 481;
	            this.linearPattern();
	            this.state = 486;
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
	    this.enterRule(localctx, 72, MQLParser.RULE_linearPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
	        this.node();
	        this.state = 496;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 16465) !== 0)) {
	            this.state = 490;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 78:
	            case 88:
	                this.state = 488;
	                this.edge();
	                break;
	            case 74:
	            case 80:
	                this.state = 489;
	                this.path();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 492;
	            this.node();
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



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, MQLParser.RULE_path);
	    var _la = 0;
	    try {
	        this.state = 524;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 74:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 499;
	            this.match(MQLParser.LEQ);
	            this.state = 500;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 502;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===7) {
	                this.state = 501;
	                this.pathType();
	            }

	            this.state = 505;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===68) {
	                this.state = 504;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 507;
	            this.pathAlternatives();
	            this.state = 508;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 509;
	            this.match(MQLParser.SINGLE_EQ);
	            break;
	        case 80:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 511;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 512;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 514;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===7) {
	                this.state = 513;
	                this.pathType();
	            }

	            this.state = 517;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===68) {
	                this.state = 516;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 519;
	            this.pathAlternatives();
	            this.state = 520;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 521;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 522;
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
	    this.enterRule(localctx, 76, MQLParser.RULE_pathAlternatives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 526;
	        this.pathSequence();
	        this.state = 531;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===82) {
	            this.state = 527;
	            this.match(MQLParser.PATH_ALTERNATIVE);
	            this.state = 528;
	            this.pathSequence();
	            this.state = 533;
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
	    this.enterRule(localctx, 78, MQLParser.RULE_pathSequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.pathAtom();
	        this.state = 539;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===81) {
	            this.state = 535;
	            this.match(MQLParser.PATH_SEQUENCE);
	            this.state = 536;
	            this.pathAtom();
	            this.state = 541;
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
	    this.enterRule(localctx, 80, MQLParser.RULE_pathAtom);
	    var _la = 0;
	    try {
	        this.state = 558;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PathAtomSimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 543;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===83) {
	                this.state = 542;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 545;
	            this.match(MQLParser.TYPE);
	            this.state = 547;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 84)) & ~0x1f) === 0 && ((1 << (_la - 84)) & 141) !== 0)) {
	                this.state = 546;
	                this.pathSuffix();
	            }

	            break;

	        case 2:
	            localctx = new PathAtomAlternativesContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 550;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===83) {
	                this.state = 549;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 552;
	            this.match(MQLParser.L_PAR);
	            this.state = 553;
	            this.pathAlternatives();
	            this.state = 554;
	            this.match(MQLParser.R_PAR);
	            this.state = 556;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 84)) & ~0x1f) === 0 && ((1 << (_la - 84)) & 141) !== 0)) {
	                this.state = 555;
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
	    this.enterRule(localctx, 82, MQLParser.RULE_pathSuffix);
	    try {
	        this.state = 568;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 84:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 560;
	            localctx.op = this.match(MQLParser.STAR);
	            break;
	        case 87:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 561;
	            localctx.op = this.match(MQLParser.PLUS);
	            break;
	        case 86:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 562;
	            localctx.op = this.match(MQLParser.QUESTION_MARK);
	            break;
	        case 91:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 563;
	            this.match(MQLParser.LCURLY_BRACKET);
	            this.state = 564;
	            localctx.min = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 565;
	            this.match(MQLParser.COMMA);
	            this.state = 566;
	            localctx.max = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 567;
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
	    this.enterRule(localctx, 84, MQLParser.RULE_pathType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 570;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 572;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46) {
	            this.state = 571;
	            this.match(MQLParser.K_SHORTEST);
	        }

	        this.state = 575;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || ((((_la - 47)) & ~0x1f) === 0 && ((1 << (_la - 47)) & 5121) !== 0)) {
	            this.state = 574;
	            _la = this._input.LA(1);
	            if(!(_la===1 || ((((_la - 47)) & ~0x1f) === 0 && ((1 << (_la - 47)) & 5121) !== 0))) {
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
	    this.enterRule(localctx, 86, MQLParser.RULE_node);
	    try {
	        this.state = 579;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 577;
	            this.fixedNode();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 578;
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
	    this.enterRule(localctx, 88, MQLParser.RULE_fixedNode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 581;
	        this.match(MQLParser.L_PAR);
	        this.state = 582;
	        this.fixedNodeInside();
	        this.state = 583;
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
	    this.enterRule(localctx, 90, MQLParser.RULE_fixedNodeInside);
	    try {
	        this.state = 589;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 585;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 586;
	            this.match(MQLParser.ANON_ID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 587;
	            this.match(MQLParser.EDGE_ID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 588;
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
	    this.enterRule(localctx, 92, MQLParser.RULE_edge);
	    var _la = 0;
	    try {
	        this.state = 604;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 78:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 591;
	            this.match(MQLParser.LT);
	            this.state = 594;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	            if(la_===1) {
	                this.state = 592;
	                this.match(MQLParser.MINUS);
	                this.state = 593;
	                this.edgeInside();

	            }
	            this.state = 596;
	            this.match(MQLParser.MINUS);
	            break;
	        case 88:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 597;
	            this.match(MQLParser.MINUS);
	            this.state = 601;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===93) {
	                this.state = 598;
	                this.edgeInside();
	                this.state = 599;
	                this.match(MQLParser.MINUS);
	            }

	            this.state = 603;
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
	    this.enterRule(localctx, 94, MQLParser.RULE_edgeInside);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 606;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 608;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===64 || _la===68) {
	            this.state = 607;
	            _la = this._input.LA(1);
	            if(!(_la===64 || _la===68)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 611;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===66 || _la===67) {
	            this.state = 610;
	            _la = this._input.LA(1);
	            if(!(_la===66 || _la===67)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 614;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===91) {
	            this.state = 613;
	            this.properties();
	        }

	        this.state = 616;
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
	    this.enterRule(localctx, 96, MQLParser.RULE_varNode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 618;
	        this.match(MQLParser.L_PAR);
	        this.state = 620;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===68) {
	            this.state = 619;
	            this.match(MQLParser.VARIABLE);
	        }

	        this.state = 625;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 622;
	            this.match(MQLParser.TYPE);
	            this.state = 627;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 629;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===91) {
	            this.state = 628;
	            this.properties();
	        }

	        this.state = 631;
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
	    this.enterRule(localctx, 98, MQLParser.RULE_properties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 633;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 634;
	        this.property();
	        this.state = 639;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===95) {
	            this.state = 635;
	            this.match(MQLParser.COMMA);
	            this.state = 636;
	            this.property();
	            this.state = 641;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 642;
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
	    this.enterRule(localctx, 100, MQLParser.RULE_property);
	    var _la = 0;
	    try {
	        this.state = 673;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,85,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Property1Context(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 644;
	            this.identifier();
	            this.state = 649;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 96:
	                this.state = 645;
	                this.match(MQLParser.COLON);
	                this.state = 646;
	                this.value();
	                break;
	            case 61:
	                this.state = 647;
	                this.match(MQLParser.TRUE_PROP);
	                break;
	            case 62:
	                this.state = 648;
	                this.match(MQLParser.FALSE_PROP);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            localctx = new Property2Context(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 651;
	            this.identifier();
	            this.state = 652;
	            this.match(MQLParser.TYPE);
	            this.state = 653;
	            this.match(MQLParser.L_PAR);
	            this.state = 654;
	            this.match(MQLParser.STRING);
	            this.state = 655;
	            this.match(MQLParser.R_PAR);
	            break;

	        case 3:
	            localctx = new Property3Context(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 657;
	            this.identifier();
	            this.state = 658;
	            this.match(MQLParser.K_IS);
	            this.state = 660;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 659;
	                this.match(MQLParser.K_NOT);
	            }

	            this.state = 662;
	            this.exprTypename();
	            this.state = 666;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===40) {
	                this.state = 663;
	                this.conditionalOrType();
	                this.state = 668;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 4:
	            localctx = new Property4Context(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 669;
	            this.identifier();

	            this.state = 670;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 63) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 671;
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
	    this.enterRule(localctx, 102, MQLParser.RULE_conditionalOrType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 675;
	        this.match(MQLParser.K_OR);
	        this.state = 676;
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
	    this.enterRule(localctx, 104, MQLParser.RULE_identifier);
	    try {
	        this.state = 680;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 73:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 678;
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
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
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
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 679;
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
	    this.enterRule(localctx, 106, MQLParser.RULE_boolValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 682;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===56)) {
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
	    this.enterRule(localctx, 108, MQLParser.RULE_numericValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 685;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===87 || _la===88) {
	            this.state = 684;
	            _la = this._input.LA(1);
	            if(!(_la===87 || _la===88)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 687;
	        _la = this._input.LA(1);
	        if(!(((((_la - 70)) & ~0x1f) === 0 && ((1 << (_la - 70)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 110, MQLParser.RULE_datatypeValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 689;
	        this.identifier();
	        this.state = 690;
	        this.match(MQLParser.L_PAR);
	        this.state = 691;
	        this.match(MQLParser.STRING);
	        this.state = 692;
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
	    this.enterRule(localctx, 112, MQLParser.RULE_value);
	    try {
	        this.state = 698;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	        case 71:
	        case 72:
	        case 87:
	        case 88:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 694;
	            this.numericValue();
	            break;
	        case 69:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 695;
	            this.match(MQLParser.STRING);
	            break;
	        case 26:
	        case 56:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 696;
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
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
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
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 73:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 697;
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
	    this.enterRule(localctx, 114, MQLParser.RULE_conditionalOrExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 700;
	        this.conditionalAndExpr();
	        this.state = 705;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 701;
	            this.match(MQLParser.K_OR);
	            this.state = 702;
	            this.conditionalAndExpr();
	            this.state = 707;
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
	    this.enterRule(localctx, 116, MQLParser.RULE_conditionalAndExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 708;
	        this.comparisonExpr();
	        this.state = 713;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 709;
	            this.match(MQLParser.K_AND);
	            this.state = 710;
	            this.comparisonExpr();
	            this.state = 715;
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
	    this.enterRule(localctx, 118, MQLParser.RULE_comparisonExpr);
	    var _la = 0;
	    try {
	        this.state = 728;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,93,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ComparisonExprOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 716;
	            this.additiveExpr();
	            this.state = 719;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 63) !== 0)) {
	                this.state = 717;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 63) !== 0))) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 718;
	                this.additiveExpr();
	            }

	            break;

	        case 2:
	            localctx = new ComparisonExprIsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 721;
	            this.additiveExpr();
	            this.state = 722;
	            this.match(MQLParser.K_IS);
	            this.state = 724;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 723;
	                this.match(MQLParser.K_NOT);
	            }

	            this.state = 726;
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
	    this.enterRule(localctx, 120, MQLParser.RULE_additiveExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 730;
	        this.multiplicativeExpr();
	        this.state = 735;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===87 || _la===88) {
	            this.state = 731;
	            localctx._tset1387 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===87 || _la===88)) {
	                localctx._tset1387 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1387);
	            this.state = 732;
	            this.multiplicativeExpr();
	            this.state = 737;
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
	    this.enterRule(localctx, 122, MQLParser.RULE_multiplicativeExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 738;
	        this.unaryExpr();
	        this.state = 743;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 25) !== 0)) {
	            this.state = 739;
	            localctx._tset1406 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 81)) & ~0x1f) === 0 && ((1 << (_la - 81)) & 25) !== 0))) {
	                localctx._tset1406 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1406);
	            this.state = 740;
	            this.unaryExpr();
	            this.state = 745;
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
	    this.enterRule(localctx, 124, MQLParser.RULE_unaryExpr);
	    try {
	        this.state = 753;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,96,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 746;
	            this.match(MQLParser.K_NOT);
	            this.state = 747;
	            this.unaryExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 748;
	            this.atomicExpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 749;
	            this.match(MQLParser.PLUS);
	            this.state = 750;
	            this.unaryExpr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 751;
	            this.match(MQLParser.MINUS);
	            this.state = 752;
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
	    this.enterRule(localctx, 126, MQLParser.RULE_atomicExpr);
	    var _la = 0;
	    try {
	        this.state = 766;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,98,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExprVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 755;
	            this.match(MQLParser.VARIABLE);
	            this.state = 757;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 756;
	                this.match(MQLParser.KEY);
	            }

	            break;

	        case 2:
	            localctx = new ExprValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 759;
	            this.value();
	            break;

	        case 3:
	            localctx = new ExprFixedNodeInsideContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 760;
	            this.fixedNodeInside();
	            break;

	        case 4:
	            localctx = new ExprParenthesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 761;
	            this.match(MQLParser.L_PAR);
	            this.state = 762;
	            this.conditionalOrExpr();
	            this.state = 763;
	            this.match(MQLParser.R_PAR);
	            break;

	        case 5:
	            localctx = new ExprFunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 765;
	            this.function_();
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



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, MQLParser.RULE_function);
	    try {
	        this.state = 770;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 768;
	            this.regex();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 769;
	            this.tensorDistance();
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



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, MQLParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 772;
	        this.match(MQLParser.K_REGEX);
	        this.state = 773;
	        this.match(MQLParser.L_PAR);
	        this.state = 774;
	        this.conditionalOrExpr();
	        this.state = 775;
	        this.match(MQLParser.COMMA);
	        this.state = 776;
	        this.conditionalOrExpr();
	        this.state = 779;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===95) {
	            this.state = 777;
	            this.match(MQLParser.COMMA);
	            this.state = 778;
	            this.conditionalOrExpr();
	        }

	        this.state = 781;
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
	    this.enterRule(localctx, 132, MQLParser.RULE_exprTypename);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 783;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 142607360) !== 0) || _la===45 || _la===53)) {
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
	    this.enterRule(localctx, 134, MQLParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 785;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4227858430) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 520093695) !== 0))) {
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
MQLParser.K_AS = 5;
MQLParser.K_AVG = 6;
MQLParser.K_ALL = 7;
MQLParser.K_ASC = 8;
MQLParser.K_BY = 9;
MQLParser.K_BOOL = 10;
MQLParser.K_COUNT = 11;
MQLParser.K_CREATE = 12;
MQLParser.K_DELETE = 13;
MQLParser.K_DESCRIBE = 14;
MQLParser.K_DESC = 15;
MQLParser.K_DIMENSIONS = 16;
MQLParser.K_DISTINCT = 17;
MQLParser.K_EDGE = 18;
MQLParser.K_EUCLIDEAN = 19;
MQLParser.K_FROM = 20;
MQLParser.K_INCOMING = 21;
MQLParser.K_INSERT = 22;
MQLParser.K_INTEGER = 23;
MQLParser.K_INTO = 24;
MQLParser.K_IS = 25;
MQLParser.K_FALSE = 26;
MQLParser.K_FLOAT = 27;
MQLParser.K_GROUP = 28;
MQLParser.K_LABELS = 29;
MQLParser.K_LABEL = 30;
MQLParser.K_LIMIT = 31;
MQLParser.K_MANHATTAN = 32;
MQLParser.K_MATCH = 33;
MQLParser.K_MAX = 34;
MQLParser.K_MIN = 35;
MQLParser.K_OBJECTS = 36;
MQLParser.K_OFFSET = 37;
MQLParser.K_OPTIONAL = 38;
MQLParser.K_ORDER = 39;
MQLParser.K_OR = 40;
MQLParser.K_OUTGOING = 41;
MQLParser.K_PROPERTIES = 42;
MQLParser.K_PROPERTY = 43;
MQLParser.K_NOT = 44;
MQLParser.K_NULL = 45;
MQLParser.K_SHORTEST = 46;
MQLParser.K_SIMPLE = 47;
MQLParser.K_TENSOR_DISTANCE = 48;
MQLParser.K_REGEX = 49;
MQLParser.K_RETURN = 50;
MQLParser.K_SET = 51;
MQLParser.K_SUM = 52;
MQLParser.K_STRING = 53;
MQLParser.K_STORE = 54;
MQLParser.K_TENSOR = 55;
MQLParser.K_TRUE = 56;
MQLParser.K_TRAILS = 57;
MQLParser.K_VALUES = 58;
MQLParser.K_WALKS = 59;
MQLParser.K_WHERE = 60;
MQLParser.TRUE_PROP = 61;
MQLParser.FALSE_PROP = 62;
MQLParser.ANON_ID = 63;
MQLParser.EDGE_ID = 64;
MQLParser.KEY = 65;
MQLParser.TYPE = 66;
MQLParser.TYPE_VAR = 67;
MQLParser.VARIABLE = 68;
MQLParser.STRING = 69;
MQLParser.UNSIGNED_INTEGER = 70;
MQLParser.UNSIGNED_FLOAT = 71;
MQLParser.UNSIGNED_SCIENTIFIC_NOTATION = 72;
MQLParser.NAME = 73;
MQLParser.LEQ = 74;
MQLParser.GEQ = 75;
MQLParser.EQ = 76;
MQLParser.NEQ = 77;
MQLParser.LT = 78;
MQLParser.GT = 79;
MQLParser.SINGLE_EQ = 80;
MQLParser.PATH_SEQUENCE = 81;
MQLParser.PATH_ALTERNATIVE = 82;
MQLParser.PATH_NEGATION = 83;
MQLParser.STAR = 84;
MQLParser.PERCENT = 85;
MQLParser.QUESTION_MARK = 86;
MQLParser.PLUS = 87;
MQLParser.MINUS = 88;
MQLParser.L_PAR = 89;
MQLParser.R_PAR = 90;
MQLParser.LCURLY_BRACKET = 91;
MQLParser.RCURLY_BRACKET = 92;
MQLParser.LSQUARE_BRACKET = 93;
MQLParser.RSQUARE_BRACKET = 94;
MQLParser.COMMA = 95;
MQLParser.COLON = 96;
MQLParser.WHITE_SPACE = 97;
MQLParser.SINGLE_LINE_COMMENT = 98;
MQLParser.UNRECOGNIZED = 99;

MQLParser.RULE_root = 0;
MQLParser.RULE_matchQuery = 1;
MQLParser.RULE_insertPatterns = 2;
MQLParser.RULE_insertLinearPattern = 3;
MQLParser.RULE_insertPlainNode = 4;
MQLParser.RULE_insertPlainNodeInside = 5;
MQLParser.RULE_insertPlainEdge = 6;
MQLParser.RULE_tensorStoreQuery = 7;
MQLParser.RULE_createTensorStore = 8;
MQLParser.RULE_insertTensors = 9;
MQLParser.RULE_insertTensorsTuple = 10;
MQLParser.RULE_deleteTensors = 11;
MQLParser.RULE_tensor = 12;
MQLParser.RULE_tensorDistance = 13;
MQLParser.RULE_tensorDistanceReference = 14;
MQLParser.RULE_metricType = 15;
MQLParser.RULE_describeQuery = 16;
MQLParser.RULE_describeFlag = 17;
MQLParser.RULE_setStatement = 18;
MQLParser.RULE_matchStatement = 19;
MQLParser.RULE_whereStatement = 20;
MQLParser.RULE_groupByStatement = 21;
MQLParser.RULE_orderByStatement = 22;
MQLParser.RULE_returnStatement = 23;
MQLParser.RULE_limitOffsetClauses = 24;
MQLParser.RULE_limitClause = 25;
MQLParser.RULE_offsetClause = 26;
MQLParser.RULE_setItem = 27;
MQLParser.RULE_returnItem = 28;
MQLParser.RULE_alias = 29;
MQLParser.RULE_aggregateFunc = 30;
MQLParser.RULE_orderByItem = 31;
MQLParser.RULE_groupByItem = 32;
MQLParser.RULE_graphPattern = 33;
MQLParser.RULE_optionalPattern = 34;
MQLParser.RULE_basicPattern = 35;
MQLParser.RULE_linearPattern = 36;
MQLParser.RULE_path = 37;
MQLParser.RULE_pathAlternatives = 38;
MQLParser.RULE_pathSequence = 39;
MQLParser.RULE_pathAtom = 40;
MQLParser.RULE_pathSuffix = 41;
MQLParser.RULE_pathType = 42;
MQLParser.RULE_node = 43;
MQLParser.RULE_fixedNode = 44;
MQLParser.RULE_fixedNodeInside = 45;
MQLParser.RULE_edge = 46;
MQLParser.RULE_edgeInside = 47;
MQLParser.RULE_varNode = 48;
MQLParser.RULE_properties = 49;
MQLParser.RULE_property = 50;
MQLParser.RULE_conditionalOrType = 51;
MQLParser.RULE_identifier = 52;
MQLParser.RULE_boolValue = 53;
MQLParser.RULE_numericValue = 54;
MQLParser.RULE_datatypeValue = 55;
MQLParser.RULE_value = 56;
MQLParser.RULE_conditionalOrExpr = 57;
MQLParser.RULE_conditionalAndExpr = 58;
MQLParser.RULE_comparisonExpr = 59;
MQLParser.RULE_additiveExpr = 60;
MQLParser.RULE_multiplicativeExpr = 61;
MQLParser.RULE_unaryExpr = 62;
MQLParser.RULE_atomicExpr = 63;
MQLParser.RULE_function = 64;
MQLParser.RULE_regex = 65;
MQLParser.RULE_exprTypename = 66;
MQLParser.RULE_keyword = 67;

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

	tensorStoreQuery() {
	    return this.getTypedRuleContext(TensorStoreQueryContext,0);
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



class TensorStoreQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_tensorStoreQuery;
    }

	createTensorStore() {
	    return this.getTypedRuleContext(CreateTensorStoreContext,0);
	};

	insertTensors() {
	    return this.getTypedRuleContext(InsertTensorsContext,0);
	};

	deleteTensors() {
	    return this.getTypedRuleContext(DeleteTensorsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterTensorStoreQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitTensorStoreQuery(this);
		}
	}


}



class CreateTensorStoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_createTensorStore;
    }

	K_CREATE() {
	    return this.getToken(MQLParser.K_CREATE, 0);
	};

	K_TENSOR() {
	    return this.getToken(MQLParser.K_TENSOR, 0);
	};

	K_STORE() {
	    return this.getToken(MQLParser.K_STORE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	K_DIMENSIONS() {
	    return this.getToken(MQLParser.K_DIMENSIONS, 0);
	};

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterCreateTensorStore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitCreateTensorStore(this);
		}
	}


}



class InsertTensorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertTensors;
    }

	K_INSERT() {
	    return this.getToken(MQLParser.K_INSERT, 0);
	};

	K_INTO() {
	    return this.getToken(MQLParser.K_INTO, 0);
	};

	K_TENSOR() {
	    return this.getToken(MQLParser.K_TENSOR, 0);
	};

	K_STORE() {
	    return this.getToken(MQLParser.K_STORE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	K_VALUES() {
	    return this.getToken(MQLParser.K_VALUES, 0);
	};

	insertTensorsTuple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InsertTensorsTupleContext);
	    } else {
	        return this.getTypedRuleContext(InsertTensorsTupleContext,i);
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
	        listener.enterInsertTensors(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertTensors(this);
		}
	}


}



class InsertTensorsTupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_insertTensorsTuple;
    }

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	COMMA() {
	    return this.getToken(MQLParser.COMMA, 0);
	};

	tensor() {
	    return this.getTypedRuleContext(TensorContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterInsertTensorsTuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitInsertTensorsTuple(this);
		}
	}


}



class DeleteTensorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_deleteTensors;
    }

	K_DELETE() {
	    return this.getToken(MQLParser.K_DELETE, 0);
	};

	K_FROM() {
	    return this.getToken(MQLParser.K_FROM, 0);
	};

	K_TENSOR() {
	    return this.getToken(MQLParser.K_TENSOR, 0);
	};

	K_STORE() {
	    return this.getToken(MQLParser.K_STORE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	K_OBJECTS() {
	    return this.getToken(MQLParser.K_OBJECTS, 0);
	};

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

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
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
	        listener.enterDeleteTensors(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitDeleteTensors(this);
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



class TensorDistanceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_tensorDistance;
    }

	K_TENSOR_DISTANCE() {
	    return this.getToken(MQLParser.K_TENSOR_DISTANCE, 0);
	};

	L_PAR() {
	    return this.getToken(MQLParser.L_PAR, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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


	conditionalOrExpr() {
	    return this.getTypedRuleContext(ConditionalOrExprContext,0);
	};

	tensorDistanceReference() {
	    return this.getTypedRuleContext(TensorDistanceReferenceContext,0);
	};

	metricType() {
	    return this.getTypedRuleContext(MetricTypeContext,0);
	};

	R_PAR() {
	    return this.getToken(MQLParser.R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterTensorDistance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitTensorDistance(this);
		}
	}


}



class TensorDistanceReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_tensorDistanceReference;
    }

	conditionalOrExpr() {
	    return this.getTypedRuleContext(ConditionalOrExprContext,0);
	};

	tensor() {
	    return this.getTypedRuleContext(TensorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterTensorDistanceReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitTensorDistanceReference(this);
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


class ReturnItemExprContext extends ReturnItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	conditionalOrExpr() {
	    return this.getTypedRuleContext(ConditionalOrExprContext,0);
	};

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterReturnItemExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitReturnItemExpr(this);
		}
	}


}

MQLParser.ReturnItemExprContext = ReturnItemExprContext;

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

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
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

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
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

class AliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MQLParser.RULE_alias;
    }

	K_AS() {
	    return this.getToken(MQLParser.K_AS, 0);
	};

	VARIABLE() {
	    return this.getToken(MQLParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterAlias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitAlias(this);
		}
	}


}



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

class OrderByItemExprContext extends OrderByItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	conditionalOrExpr() {
	    return this.getTypedRuleContext(ConditionalOrExprContext,0);
	};

	K_ASC() {
	    return this.getToken(MQLParser.K_ASC, 0);
	};

	K_DESC() {
	    return this.getToken(MQLParser.K_DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterOrderByItemExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitOrderByItemExpr(this);
		}
	}


}

MQLParser.OrderByItemExprContext = OrderByItemExprContext;

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
        this.s87 = null;
        this.op = [];
        this.s88 = null;
        this._tset1387 = null;
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
        this.s84 = null;
        this.op = [];
        this.s81 = null;
        this.s85 = null;
        this._tset1406 = null;
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

class ExprFixedNodeInsideContext extends AtomicExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	fixedNodeInside() {
	    return this.getTypedRuleContext(FixedNodeInsideContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.enterExprFixedNodeInside(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MQLParserListener ) {
	        listener.exitExprFixedNodeInside(this);
		}
	}


}

MQLParser.ExprFixedNodeInsideContext = ExprFixedNodeInsideContext;

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

	tensorDistance() {
	    return this.getTypedRuleContext(TensorDistanceContext,0);
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

	K_AS() {
	    return this.getToken(MQLParser.K_AS, 0);
	};

	K_AVG() {
	    return this.getToken(MQLParser.K_AVG, 0);
	};

	K_ALL() {
	    return this.getToken(MQLParser.K_ALL, 0);
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

	K_CREATE() {
	    return this.getToken(MQLParser.K_CREATE, 0);
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

	K_DIMENSIONS() {
	    return this.getToken(MQLParser.K_DIMENSIONS, 0);
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

	K_FROM() {
	    return this.getToken(MQLParser.K_FROM, 0);
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

	K_INTO() {
	    return this.getToken(MQLParser.K_INTO, 0);
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

	K_OBJECTS() {
	    return this.getToken(MQLParser.K_OBJECTS, 0);
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

	K_TENSOR_DISTANCE() {
	    return this.getToken(MQLParser.K_TENSOR_DISTANCE, 0);
	};

	K_REGEX() {
	    return this.getToken(MQLParser.K_REGEX, 0);
	};

	K_RETURN() {
	    return this.getToken(MQLParser.K_RETURN, 0);
	};

	K_SET() {
	    return this.getToken(MQLParser.K_SET, 0);
	};

	K_SUM() {
	    return this.getToken(MQLParser.K_SUM, 0);
	};

	K_STRING() {
	    return this.getToken(MQLParser.K_STRING, 0);
	};

	K_STORE() {
	    return this.getToken(MQLParser.K_STORE, 0);
	};

	K_TENSOR() {
	    return this.getToken(MQLParser.K_TENSOR, 0);
	};

	K_TRAILS() {
	    return this.getToken(MQLParser.K_TRAILS, 0);
	};

	K_VALUES() {
	    return this.getToken(MQLParser.K_VALUES, 0);
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
MQLParser.TensorStoreQueryContext = TensorStoreQueryContext; 
MQLParser.CreateTensorStoreContext = CreateTensorStoreContext; 
MQLParser.InsertTensorsContext = InsertTensorsContext; 
MQLParser.InsertTensorsTupleContext = InsertTensorsTupleContext; 
MQLParser.DeleteTensorsContext = DeleteTensorsContext; 
MQLParser.TensorContext = TensorContext; 
MQLParser.TensorDistanceContext = TensorDistanceContext; 
MQLParser.TensorDistanceReferenceContext = TensorDistanceReferenceContext; 
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
MQLParser.AliasContext = AliasContext; 
MQLParser.AggregateFuncContext = AggregateFuncContext; 
MQLParser.OrderByItemContext = OrderByItemContext; 
MQLParser.GroupByItemContext = GroupByItemContext; 
MQLParser.GraphPatternContext = GraphPatternContext; 
MQLParser.OptionalPatternContext = OptionalPatternContext; 
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
