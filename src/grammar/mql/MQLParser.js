// Generated from src/grammar/mql/MQLParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MQLParserListener from './MQLParserListener.js';
const serializedATN = [4,1,87,689,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,1,0,3,0,120,8,0,1,0,1,0,1,0,3,0,125,8,0,1,0,1,0,
1,1,1,1,3,1,131,8,1,1,1,3,1,134,8,1,1,1,3,1,137,8,1,1,1,3,1,140,8,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,154,8,2,1,2,1,2,1,2,1,2,
1,3,1,3,1,4,1,4,5,4,164,8,4,10,4,12,4,167,9,4,1,4,1,4,1,5,1,5,1,5,3,5,174,
8,5,1,6,1,6,1,6,1,6,3,6,180,8,6,1,7,1,7,1,7,1,7,5,7,186,8,7,10,7,12,7,189,
9,7,1,8,1,8,1,8,1,8,5,8,195,8,8,10,8,12,8,198,9,8,1,9,1,9,1,9,1,9,5,9,204,
8,9,10,9,12,9,207,9,9,1,10,1,10,1,10,3,10,212,8,10,1,10,1,10,1,10,1,10,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,13,1,13,1,13,1,13,5,13,238,8,13,10,13,12,13,241,9,13,1,14,1,14,1,
14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,5,16,254,8,16,10,16,12,16,257,
9,16,1,17,1,17,1,17,1,17,1,17,5,17,264,8,17,10,17,12,17,267,9,17,1,18,1,
18,3,18,271,8,18,1,18,1,18,1,18,5,18,276,8,18,10,18,12,18,279,9,18,1,18,
1,18,3,18,283,8,18,1,18,1,18,3,18,287,8,18,1,18,1,18,1,18,3,18,292,8,18,
3,18,294,8,18,1,19,1,19,1,19,1,19,1,20,1,20,3,20,302,8,20,1,20,1,20,1,20,
1,20,3,20,308,8,20,1,20,1,20,1,20,1,20,1,20,3,20,315,8,20,1,20,1,20,3,20,
319,8,20,1,20,3,20,322,8,20,1,20,3,20,325,8,20,1,21,1,21,1,22,1,22,3,22,
331,8,22,1,22,3,22,334,8,22,1,22,1,22,1,22,1,22,3,22,340,8,22,1,22,1,22,
3,22,344,8,22,1,22,1,22,1,22,3,22,349,8,22,1,22,1,22,3,22,353,8,22,1,22,
1,22,3,22,357,8,22,3,22,359,8,22,1,23,1,23,3,23,363,8,23,1,24,1,24,5,24,
367,8,24,10,24,12,24,370,9,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,387,8,26,1,26,1,26,3,26,391,8,26,1,
26,1,26,1,26,1,27,1,27,1,27,1,27,5,27,400,8,27,10,27,12,27,403,9,27,1,27,
1,27,1,28,1,28,1,28,5,28,410,8,28,10,28,12,28,413,9,28,1,29,1,29,1,29,3,
29,418,8,29,1,29,1,29,5,29,422,8,29,10,29,12,29,425,9,29,1,29,3,29,428,8,
29,1,30,1,30,1,30,3,30,433,8,30,1,30,3,30,436,8,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,3,30,445,8,30,1,30,3,30,448,8,30,1,30,1,30,1,30,1,30,1,30,3,
30,455,8,30,1,31,1,31,1,31,5,31,460,8,31,10,31,12,31,463,9,31,1,32,1,32,
1,32,5,32,468,8,32,10,32,12,32,471,9,32,1,33,3,33,474,8,33,1,33,1,33,3,33,
478,8,33,1,33,3,33,481,8,33,1,33,1,33,1,33,1,33,3,33,487,8,33,3,33,489,8,
33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,499,8,34,1,35,1,35,3,35,
503,8,35,1,35,3,35,506,8,35,1,36,1,36,3,36,510,8,36,1,37,1,37,1,37,1,37,
1,38,1,38,1,38,1,38,3,38,520,8,38,1,39,1,39,1,39,3,39,525,8,39,1,39,1,39,
1,39,1,39,1,39,3,39,532,8,39,1,39,3,39,535,8,39,1,40,1,40,3,40,539,8,40,
1,40,3,40,542,8,40,1,40,3,40,545,8,40,1,40,1,40,1,41,1,41,3,41,551,8,41,
1,41,5,41,554,8,41,10,41,12,41,557,9,41,1,41,3,41,560,8,41,1,41,1,41,1,42,
1,42,1,42,1,42,5,42,568,8,42,10,42,12,42,571,9,42,1,42,1,42,1,43,1,43,1,
43,1,43,1,43,3,43,580,8,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,588,8,43,1,
44,1,44,3,44,592,8,44,1,45,1,45,1,46,3,46,597,8,46,1,46,1,46,1,47,1,47,1,
47,1,47,1,47,1,48,1,48,1,48,1,48,3,48,610,8,48,1,49,1,49,1,49,5,49,615,8,
49,10,49,12,49,618,9,49,1,50,1,50,1,50,5,50,623,8,50,10,50,12,50,626,9,50,
1,51,1,51,1,51,3,51,631,8,51,1,51,1,51,1,51,3,51,636,8,51,1,51,1,51,3,51,
640,8,51,1,52,1,52,1,52,5,52,645,8,52,10,52,12,52,648,9,52,1,53,1,53,1,53,
5,53,653,8,53,10,53,12,53,656,9,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,3,
54,665,8,54,1,55,1,55,3,55,669,8,55,1,55,1,55,1,55,1,55,1,55,3,55,676,8,
55,1,56,1,56,1,56,1,56,1,56,3,56,683,8,56,1,57,1,57,1,58,1,58,1,58,0,0,59,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
100,102,104,106,108,110,112,114,116,0,15,3,0,3,3,15,15,26,26,4,0,16,16,23,
23,33,33,35,35,3,0,5,5,28,29,44,44,2,0,7,7,12,12,1,0,75,76,2,0,4,4,6,6,3,
0,1,1,40,40,47,48,2,0,53,53,57,57,1,0,55,56,2,0,20,20,46,46,1,0,59,60,1,
0,62,67,2,0,69,69,72,73,5,0,9,9,18,18,21,21,38,38,45,45,4,0,1,19,21,33,35,
45,47,49,735,0,119,1,0,0,0,2,128,1,0,0,0,4,143,1,0,0,0,6,159,1,0,0,0,8,161,
1,0,0,0,10,170,1,0,0,0,12,175,1,0,0,0,14,181,1,0,0,0,16,190,1,0,0,0,18,199,
1,0,0,0,20,208,1,0,0,0,22,217,1,0,0,0,24,225,1,0,0,0,26,233,1,0,0,0,28,242,
1,0,0,0,30,245,1,0,0,0,32,248,1,0,0,0,34,258,1,0,0,0,36,293,1,0,0,0,38,295,
1,0,0,0,40,324,1,0,0,0,42,326,1,0,0,0,44,358,1,0,0,0,46,360,1,0,0,0,48,364,
1,0,0,0,50,371,1,0,0,0,52,376,1,0,0,0,54,395,1,0,0,0,56,406,1,0,0,0,58,427,
1,0,0,0,60,454,1,0,0,0,62,456,1,0,0,0,64,464,1,0,0,0,66,488,1,0,0,0,68,498,
1,0,0,0,70,500,1,0,0,0,72,509,1,0,0,0,74,511,1,0,0,0,76,519,1,0,0,0,78,534,
1,0,0,0,80,536,1,0,0,0,82,548,1,0,0,0,84,563,1,0,0,0,86,587,1,0,0,0,88,591,
1,0,0,0,90,593,1,0,0,0,92,596,1,0,0,0,94,600,1,0,0,0,96,609,1,0,0,0,98,611,
1,0,0,0,100,619,1,0,0,0,102,639,1,0,0,0,104,641,1,0,0,0,106,649,1,0,0,0,
108,664,1,0,0,0,110,675,1,0,0,0,112,682,1,0,0,0,114,684,1,0,0,0,116,686,
1,0,0,0,118,120,3,26,13,0,119,118,1,0,0,0,119,120,1,0,0,0,120,124,1,0,0,
0,121,125,3,2,1,0,122,125,3,8,4,0,123,125,3,12,6,0,124,121,1,0,0,0,124,122,
1,0,0,0,124,123,1,0,0,0,125,126,1,0,0,0,126,127,5,0,0,1,127,1,1,0,0,0,128,
130,3,28,14,0,129,131,3,4,2,0,130,129,1,0,0,0,130,131,1,0,0,0,131,133,1,
0,0,0,132,134,3,30,15,0,133,132,1,0,0,0,133,134,1,0,0,0,134,136,1,0,0,0,
135,137,3,32,16,0,136,135,1,0,0,0,136,137,1,0,0,0,137,139,1,0,0,0,138,140,
3,34,17,0,139,138,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,141,142,3,36,18,
0,142,3,1,0,0,0,143,144,5,34,0,0,144,145,5,77,0,0,145,146,5,57,0,0,146,147,
5,83,0,0,147,148,5,57,0,0,148,149,5,83,0,0,149,150,5,58,0,0,150,153,5,83,
0,0,151,154,3,76,38,0,152,154,3,54,27,0,153,151,1,0,0,0,153,152,1,0,0,0,
154,155,1,0,0,0,155,156,5,83,0,0,156,157,3,6,3,0,157,158,5,78,0,0,158,5,
1,0,0,0,159,160,7,0,0,0,160,7,1,0,0,0,161,165,5,11,0,0,162,164,3,10,5,0,
163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,168,
1,0,0,0,167,165,1,0,0,0,168,169,3,76,38,0,169,9,1,0,0,0,170,173,7,1,0,0,
171,172,5,25,0,0,172,174,5,59,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,11,
1,0,0,0,175,179,5,17,0,0,176,180,3,14,7,0,177,180,3,16,8,0,178,180,3,18,
9,0,179,176,1,0,0,0,179,177,1,0,0,0,179,178,1,0,0,0,180,13,1,0,0,0,181,182,
5,24,0,0,182,187,3,20,10,0,183,184,5,83,0,0,184,186,3,20,10,0,185,183,1,
0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,15,1,0,0,0,189,
187,1,0,0,0,190,191,5,36,0,0,191,196,3,22,11,0,192,193,5,83,0,0,193,195,
3,22,11,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,
0,197,17,1,0,0,0,198,196,1,0,0,0,199,200,5,14,0,0,200,205,3,24,12,0,201,
202,5,83,0,0,202,204,3,24,12,0,203,201,1,0,0,0,204,207,1,0,0,0,205,203,1,
0,0,0,205,206,1,0,0,0,206,19,1,0,0,0,207,205,1,0,0,0,208,211,5,77,0,0,209,
212,3,88,44,0,210,212,5,52,0,0,211,209,1,0,0,0,211,210,1,0,0,0,212,213,1,
0,0,0,213,214,5,83,0,0,214,215,5,58,0,0,215,216,5,78,0,0,216,21,1,0,0,0,
217,218,5,77,0,0,218,219,3,76,38,0,219,220,5,83,0,0,220,221,5,58,0,0,221,
222,5,83,0,0,222,223,3,96,48,0,223,224,5,78,0,0,224,23,1,0,0,0,225,226,5,
77,0,0,226,227,3,76,38,0,227,228,5,83,0,0,228,229,3,76,38,0,229,230,5,83,
0,0,230,231,3,88,44,0,231,232,5,78,0,0,232,25,1,0,0,0,233,234,5,42,0,0,234,
239,3,38,19,0,235,236,5,83,0,0,236,238,3,38,19,0,237,235,1,0,0,0,238,241,
1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,27,1,0,0,0,241,239,1,0,0,0,242,
243,5,27,0,0,243,244,3,48,24,0,244,29,1,0,0,0,245,246,5,49,0,0,246,247,3,
98,49,0,247,31,1,0,0,0,248,249,5,22,0,0,249,250,5,8,0,0,250,255,3,46,23,
0,251,252,5,83,0,0,252,254,3,46,23,0,253,251,1,0,0,0,254,257,1,0,0,0,255,
253,1,0,0,0,255,256,1,0,0,0,256,33,1,0,0,0,257,255,1,0,0,0,258,259,5,31,
0,0,259,260,5,8,0,0,260,265,3,44,22,0,261,262,5,83,0,0,262,264,3,44,22,0,
263,261,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,35,1,
0,0,0,267,265,1,0,0,0,268,270,5,41,0,0,269,271,5,13,0,0,270,269,1,0,0,0,
270,271,1,0,0,0,271,272,1,0,0,0,272,277,3,40,20,0,273,274,5,83,0,0,274,276,
3,40,20,0,275,273,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,
0,278,282,1,0,0,0,279,277,1,0,0,0,280,281,5,25,0,0,281,283,5,59,0,0,282,
280,1,0,0,0,282,283,1,0,0,0,283,294,1,0,0,0,284,286,5,41,0,0,285,287,5,13,
0,0,286,285,1,0,0,0,286,287,1,0,0,0,287,288,1,0,0,0,288,291,5,72,0,0,289,
290,5,25,0,0,290,292,5,59,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,294,1,
0,0,0,293,268,1,0,0,0,293,284,1,0,0,0,294,37,1,0,0,0,295,296,5,57,0,0,296,
297,5,68,0,0,297,298,3,76,38,0,298,39,1,0,0,0,299,301,5,57,0,0,300,302,5,
54,0,0,301,300,1,0,0,0,301,302,1,0,0,0,302,325,1,0,0,0,303,304,3,42,21,0,
304,305,5,77,0,0,305,307,5,57,0,0,306,308,5,54,0,0,307,306,1,0,0,0,307,308,
1,0,0,0,308,309,1,0,0,0,309,310,5,78,0,0,310,325,1,0,0,0,311,312,5,10,0,
0,312,314,5,77,0,0,313,315,5,13,0,0,314,313,1,0,0,0,314,315,1,0,0,0,315,
321,1,0,0,0,316,318,5,57,0,0,317,319,5,54,0,0,318,317,1,0,0,0,318,319,1,
0,0,0,319,322,1,0,0,0,320,322,5,72,0,0,321,316,1,0,0,0,321,320,1,0,0,0,322,
323,1,0,0,0,323,325,5,78,0,0,324,299,1,0,0,0,324,303,1,0,0,0,324,311,1,0,
0,0,325,41,1,0,0,0,326,327,7,2,0,0,327,43,1,0,0,0,328,330,5,57,0,0,329,331,
5,54,0,0,330,329,1,0,0,0,330,331,1,0,0,0,331,333,1,0,0,0,332,334,7,3,0,0,
333,332,1,0,0,0,333,334,1,0,0,0,334,359,1,0,0,0,335,336,3,42,21,0,336,337,
5,77,0,0,337,339,5,57,0,0,338,340,5,54,0,0,339,338,1,0,0,0,339,340,1,0,0,
0,340,341,1,0,0,0,341,343,5,78,0,0,342,344,7,3,0,0,343,342,1,0,0,0,343,344,
1,0,0,0,344,359,1,0,0,0,345,346,5,10,0,0,346,348,5,77,0,0,347,349,5,13,0,
0,348,347,1,0,0,0,348,349,1,0,0,0,349,350,1,0,0,0,350,352,5,57,0,0,351,353,
5,54,0,0,352,351,1,0,0,0,352,353,1,0,0,0,353,354,1,0,0,0,354,356,5,78,0,
0,355,357,7,3,0,0,356,355,1,0,0,0,356,357,1,0,0,0,357,359,1,0,0,0,358,328,
1,0,0,0,358,335,1,0,0,0,358,345,1,0,0,0,359,45,1,0,0,0,360,362,5,57,0,0,
361,363,5,54,0,0,362,361,1,0,0,0,362,363,1,0,0,0,363,47,1,0,0,0,364,368,
3,56,28,0,365,367,3,50,25,0,366,365,1,0,0,0,367,370,1,0,0,0,368,366,1,0,
0,0,368,369,1,0,0,0,369,49,1,0,0,0,370,368,1,0,0,0,371,372,5,30,0,0,372,
373,5,79,0,0,373,374,3,48,24,0,374,375,5,80,0,0,375,51,1,0,0,0,376,377,5,
43,0,0,377,378,5,77,0,0,378,379,5,57,0,0,379,380,5,83,0,0,380,381,5,57,0,
0,381,382,5,83,0,0,382,383,5,58,0,0,383,386,5,83,0,0,384,387,3,76,38,0,385,
387,3,54,27,0,386,384,1,0,0,0,386,385,1,0,0,0,387,388,1,0,0,0,388,390,5,
83,0,0,389,391,7,4,0,0,390,389,1,0,0,0,390,391,1,0,0,0,391,392,1,0,0,0,392,
393,5,59,0,0,393,394,5,78,0,0,394,53,1,0,0,0,395,396,5,81,0,0,396,401,3,
92,46,0,397,398,5,83,0,0,398,400,3,92,46,0,399,397,1,0,0,0,400,403,1,0,0,
0,401,399,1,0,0,0,401,402,1,0,0,0,402,404,1,0,0,0,403,401,1,0,0,0,404,405,
5,82,0,0,405,55,1,0,0,0,406,411,3,58,29,0,407,408,5,83,0,0,408,410,3,58,
29,0,409,407,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,412,
57,1,0,0,0,413,411,1,0,0,0,414,423,3,72,36,0,415,418,3,78,39,0,416,418,3,
60,30,0,417,415,1,0,0,0,417,416,1,0,0,0,418,419,1,0,0,0,419,420,3,72,36,
0,420,422,1,0,0,0,421,417,1,0,0,0,422,425,1,0,0,0,423,421,1,0,0,0,423,424,
1,0,0,0,424,428,1,0,0,0,425,423,1,0,0,0,426,428,3,52,26,0,427,414,1,0,0,
0,427,426,1,0,0,0,428,59,1,0,0,0,429,430,5,62,0,0,430,432,5,81,0,0,431,433,
3,70,35,0,432,431,1,0,0,0,432,433,1,0,0,0,433,435,1,0,0,0,434,436,5,57,0,
0,435,434,1,0,0,0,435,436,1,0,0,0,436,437,1,0,0,0,437,438,3,62,31,0,438,
439,5,82,0,0,439,440,5,68,0,0,440,455,1,0,0,0,441,442,5,68,0,0,442,444,5,
81,0,0,443,445,3,70,35,0,444,443,1,0,0,0,444,445,1,0,0,0,445,447,1,0,0,0,
446,448,5,57,0,0,447,446,1,0,0,0,447,448,1,0,0,0,448,449,1,0,0,0,449,450,
3,62,31,0,450,451,5,82,0,0,451,452,5,68,0,0,452,453,5,67,0,0,453,455,1,0,
0,0,454,429,1,0,0,0,454,441,1,0,0,0,455,61,1,0,0,0,456,461,3,64,32,0,457,
458,5,70,0,0,458,460,3,64,32,0,459,457,1,0,0,0,460,463,1,0,0,0,461,459,1,
0,0,0,461,462,1,0,0,0,462,63,1,0,0,0,463,461,1,0,0,0,464,469,3,66,33,0,465,
466,5,69,0,0,466,468,3,66,33,0,467,465,1,0,0,0,468,471,1,0,0,0,469,467,1,
0,0,0,469,470,1,0,0,0,470,65,1,0,0,0,471,469,1,0,0,0,472,474,5,71,0,0,473,
472,1,0,0,0,473,474,1,0,0,0,474,475,1,0,0,0,475,477,5,55,0,0,476,478,3,68,
34,0,477,476,1,0,0,0,477,478,1,0,0,0,478,489,1,0,0,0,479,481,5,71,0,0,480,
479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,483,5,77,0,0,483,484,3,62,
31,0,484,486,5,78,0,0,485,487,3,68,34,0,486,485,1,0,0,0,486,487,1,0,0,0,
487,489,1,0,0,0,488,473,1,0,0,0,488,480,1,0,0,0,489,67,1,0,0,0,490,499,5,
72,0,0,491,499,5,75,0,0,492,499,5,74,0,0,493,494,5,79,0,0,494,495,5,59,0,
0,495,496,5,83,0,0,496,497,5,59,0,0,497,499,5,80,0,0,498,490,1,0,0,0,498,
491,1,0,0,0,498,492,1,0,0,0,498,493,1,0,0,0,499,69,1,0,0,0,500,502,7,5,0,
0,501,503,5,39,0,0,502,501,1,0,0,0,502,503,1,0,0,0,503,505,1,0,0,0,504,506,
7,6,0,0,505,504,1,0,0,0,505,506,1,0,0,0,506,71,1,0,0,0,507,510,3,74,37,0,
508,510,3,82,41,0,509,507,1,0,0,0,509,508,1,0,0,0,510,73,1,0,0,0,511,512,
5,77,0,0,512,513,3,76,38,0,513,514,5,78,0,0,514,75,1,0,0,0,515,520,3,88,
44,0,516,520,5,52,0,0,517,520,5,53,0,0,518,520,3,96,48,0,519,515,1,0,0,0,
519,516,1,0,0,0,519,517,1,0,0,0,519,518,1,0,0,0,520,77,1,0,0,0,521,524,5,
66,0,0,522,523,5,76,0,0,523,525,3,80,40,0,524,522,1,0,0,0,524,525,1,0,0,
0,525,526,1,0,0,0,526,535,5,76,0,0,527,531,5,76,0,0,528,529,3,80,40,0,529,
530,5,76,0,0,530,532,1,0,0,0,531,528,1,0,0,0,531,532,1,0,0,0,532,533,1,0,
0,0,533,535,5,67,0,0,534,521,1,0,0,0,534,527,1,0,0,0,535,79,1,0,0,0,536,
538,5,81,0,0,537,539,7,7,0,0,538,537,1,0,0,0,538,539,1,0,0,0,539,541,1,0,
0,0,540,542,7,8,0,0,541,540,1,0,0,0,541,542,1,0,0,0,542,544,1,0,0,0,543,
545,3,84,42,0,544,543,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,547,5,
82,0,0,547,81,1,0,0,0,548,550,5,77,0,0,549,551,5,57,0,0,550,549,1,0,0,0,
550,551,1,0,0,0,551,555,1,0,0,0,552,554,5,55,0,0,553,552,1,0,0,0,554,557,
1,0,0,0,555,553,1,0,0,0,555,556,1,0,0,0,556,559,1,0,0,0,557,555,1,0,0,0,
558,560,3,84,42,0,559,558,1,0,0,0,559,560,1,0,0,0,560,561,1,0,0,0,561,562,
5,78,0,0,562,83,1,0,0,0,563,564,5,79,0,0,564,569,3,86,43,0,565,566,5,83,
0,0,566,568,3,86,43,0,567,565,1,0,0,0,568,571,1,0,0,0,569,567,1,0,0,0,569,
570,1,0,0,0,570,572,1,0,0,0,571,569,1,0,0,0,572,573,5,80,0,0,573,85,1,0,
0,0,574,579,3,88,44,0,575,576,5,84,0,0,576,580,3,96,48,0,577,580,5,50,0,
0,578,580,5,51,0,0,579,575,1,0,0,0,579,577,1,0,0,0,579,578,1,0,0,0,580,588,
1,0,0,0,581,582,3,88,44,0,582,583,5,55,0,0,583,584,5,77,0,0,584,585,5,58,
0,0,585,586,5,78,0,0,586,588,1,0,0,0,587,574,1,0,0,0,587,581,1,0,0,0,588,
87,1,0,0,0,589,592,5,61,0,0,590,592,3,116,58,0,591,589,1,0,0,0,591,590,1,
0,0,0,592,89,1,0,0,0,593,594,7,9,0,0,594,91,1,0,0,0,595,597,7,4,0,0,596,
595,1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,599,7,10,0,0,599,93,1,0,
0,0,600,601,3,88,44,0,601,602,5,77,0,0,602,603,5,58,0,0,603,604,5,78,0,0,
604,95,1,0,0,0,605,610,3,92,46,0,606,610,5,58,0,0,607,610,3,90,45,0,608,
610,3,94,47,0,609,605,1,0,0,0,609,606,1,0,0,0,609,607,1,0,0,0,609,608,1,
0,0,0,610,97,1,0,0,0,611,616,3,100,50,0,612,613,5,32,0,0,613,615,3,100,50,
0,614,612,1,0,0,0,615,618,1,0,0,0,616,614,1,0,0,0,616,617,1,0,0,0,617,99,
1,0,0,0,618,616,1,0,0,0,619,624,3,102,51,0,620,621,5,2,0,0,621,623,3,102,
51,0,622,620,1,0,0,0,623,626,1,0,0,0,624,622,1,0,0,0,624,625,1,0,0,0,625,
101,1,0,0,0,626,624,1,0,0,0,627,630,3,104,52,0,628,629,7,11,0,0,629,631,
3,104,52,0,630,628,1,0,0,0,630,631,1,0,0,0,631,640,1,0,0,0,632,633,3,104,
52,0,633,635,5,19,0,0,634,636,5,37,0,0,635,634,1,0,0,0,635,636,1,0,0,0,636,
637,1,0,0,0,637,638,3,114,57,0,638,640,1,0,0,0,639,627,1,0,0,0,639,632,1,
0,0,0,640,103,1,0,0,0,641,646,3,106,53,0,642,643,7,4,0,0,643,645,3,106,53,
0,644,642,1,0,0,0,645,648,1,0,0,0,646,644,1,0,0,0,646,647,1,0,0,0,647,105,
1,0,0,0,648,646,1,0,0,0,649,654,3,108,54,0,650,651,7,12,0,0,651,653,3,108,
54,0,652,650,1,0,0,0,653,656,1,0,0,0,654,652,1,0,0,0,654,655,1,0,0,0,655,
107,1,0,0,0,656,654,1,0,0,0,657,658,5,37,0,0,658,665,3,108,54,0,659,660,
5,75,0,0,660,665,3,108,54,0,661,662,5,76,0,0,662,665,3,108,54,0,663,665,
3,110,55,0,664,657,1,0,0,0,664,659,1,0,0,0,664,661,1,0,0,0,664,663,1,0,0,
0,665,109,1,0,0,0,666,668,5,57,0,0,667,669,5,54,0,0,668,667,1,0,0,0,668,
669,1,0,0,0,669,676,1,0,0,0,670,676,3,112,56,0,671,672,5,77,0,0,672,673,
3,98,49,0,673,674,5,78,0,0,674,676,1,0,0,0,675,666,1,0,0,0,675,670,1,0,0,
0,675,671,1,0,0,0,676,111,1,0,0,0,677,683,5,59,0,0,678,683,5,60,0,0,679,
683,5,58,0,0,680,683,3,90,45,0,681,683,3,94,47,0,682,677,1,0,0,0,682,678,
1,0,0,0,682,679,1,0,0,0,682,680,1,0,0,0,682,681,1,0,0,0,683,113,1,0,0,0,
684,685,7,13,0,0,685,115,1,0,0,0,686,687,7,14,0,0,687,117,1,0,0,0,89,119,
124,130,133,136,139,153,165,173,179,187,196,205,211,239,255,265,270,277,
282,286,291,293,301,307,314,318,321,324,330,333,339,343,348,352,356,358,
362,368,386,390,401,411,417,423,427,432,435,444,447,454,461,469,473,477,
480,486,488,498,502,505,509,519,524,531,534,538,541,544,550,555,559,569,
579,587,591,596,609,616,624,630,635,639,646,654,664,668,675,682];


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
                            null, null, null, null, null, null, null, "'true'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "'<='", 
                            "'>='", "'=='", "'!='", "'<'", "'>'", "'='", 
                            "'/'", "'|'", "'^'", "'*'", "'%'", "'?'", "'+'", 
                            "'-'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
                            "','", "':'" ];
    static symbolicNames = [ null, "K_ACYCLIC", "K_AND", "K_ANGULAR", "K_ANY", 
                             "K_AVG", "K_ALL", "K_ASC", "K_BY", "K_BOOL", 
                             "K_COUNT", "K_DESCRIBE", "K_DESC", "K_DISTINCT", 
                             "K_EDGE", "K_EUCLIDEAN", "K_INCOMING", "K_INSERT", 
                             "K_INTEGER", "K_IS", "K_FALSE", "K_FLOAT", 
                             "K_GROUP", "K_LABELS", "K_LABEL", "K_LIMIT", 
                             "K_MANHATTAN", "K_MATCH", "K_MAX", "K_MIN", 
                             "K_OPTIONAL", "K_ORDER", "K_OR", "K_OUTGOING", 
                             "K_PROJECT_SIMILARITY", "K_PROPERTIES", "K_PROPERTY", 
                             "K_NOT", "K_NULL", "K_SHORTEST", "K_SIMPLE", 
                             "K_RETURN", "K_SET", "K_SIMILARITY_SEARCH", 
                             "K_SUM", "K_STRING", "K_TRUE", "K_TRAILS", 
                             "K_WALKS", "K_WHERE", "TRUE_PROP", "FALSE_PROP", 
                             "ANON_ID", "EDGE_ID", "KEY", "TYPE", "TYPE_VAR", 
                             "VARIABLE", "STRING", "UNSIGNED_INTEGER", "UNSIGNED_FLOAT", 
                             "NAME", "LEQ", "GEQ", "EQ", "NEQ", "LT", "GT", 
                             "SINGLE_EQ", "PATH_SEQUENCE", "PATH_ALTERNATIVE", 
                             "PATH_NEGATION", "STAR", "PERCENT", "QUESTION_MARK", 
                             "PLUS", "MINUS", "L_PAR", "R_PAR", "LCURLY_BRACKET", 
                             "RCURLY_BRACKET", "LSQUARE_BRACKET", "RSQUARE_BRACKET", 
                             "COMMA", "COLON", "WHITE_SPACE", "SINGLE_LINE_COMMENT", 
                             "UNRECOGNIZED" ];
    static ruleNames = [ "root", "matchQuery", "projectSimilarity", "metricType", 
                         "describeQuery", "describeFlag", "insertQuery", 
                         "insertLabelList", "insertPropertyList", "insertEdgeList", 
                         "insertLabelElement", "insertPropertyElement", 
                         "insertEdgeElement", "setStatement", "matchStatement", 
                         "whereStatement", "groupByStatement", "orderByStatement", 
                         "returnStatement", "setItem", "returnItem", "aggregateFunc", 
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
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 118;
	            this.setStatement();
	        }

	        this.state = 124;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.state = 121;
	            this.matchQuery();
	            break;
	        case 11:
	            this.state = 122;
	            this.describeQuery();
	            break;
	        case 17:
	            this.state = 123;
	            this.insertQuery();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 126;
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
	        this.state = 128;
	        this.matchStatement();
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 129;
	            this.projectSimilarity();
	        }

	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49) {
	            this.state = 132;
	            this.whereStatement();
	        }

	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 135;
	            this.groupByStatement();
	        }

	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 138;
	            this.orderByStatement();
	        }

	        this.state = 141;
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
	        this.state = 143;
	        this.match(MQLParser.K_PROJECT_SIMILARITY);
	        this.state = 144;
	        this.match(MQLParser.L_PAR);
	        this.state = 145;
	        this.match(MQLParser.VARIABLE);
	        this.state = 146;
	        this.match(MQLParser.COMMA);
	        this.state = 147;
	        this.match(MQLParser.VARIABLE);
	        this.state = 148;
	        this.match(MQLParser.COMMA);
	        this.state = 149;
	        this.match(MQLParser.STRING);
	        this.state = 150;
	        this.match(MQLParser.COMMA);
	        this.state = 153;
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
	        case 52:
	        case 53:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 75:
	        case 76:
	            this.state = 151;
	            this.fixedNodeInside();
	            break;
	        case 81:
	            this.state = 152;
	            this.tensor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 155;
	        this.match(MQLParser.COMMA);
	        this.state = 156;
	        this.metricType();
	        this.state = 157;
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
	        this.state = 159;
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
	        this.state = 161;
	        this.match(MQLParser.K_DESCRIBE);
	        this.state = 165;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 162;
	                this.describeFlag(); 
	            }
	            this.state = 167;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 168;
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
	        this.state = 170;
	        _la = this._input.LA(1);
	        if(!(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 655489) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 171;
	            this.match(MQLParser.K_LIMIT);
	            this.state = 172;
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
	        this.state = 175;
	        this.match(MQLParser.K_INSERT);
	        this.state = 179;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.state = 176;
	            this.insertLabelList();
	            break;
	        case 36:
	            this.state = 177;
	            this.insertPropertyList();
	            break;
	        case 14:
	            this.state = 178;
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
	        this.state = 181;
	        this.match(MQLParser.K_LABEL);
	        this.state = 182;
	        this.insertLabelElement();
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 183;
	            this.match(MQLParser.COMMA);
	            this.state = 184;
	            this.insertLabelElement();
	            this.state = 189;
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
	        this.state = 190;
	        this.match(MQLParser.K_PROPERTY);
	        this.state = 191;
	        this.insertPropertyElement();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 192;
	            this.match(MQLParser.COMMA);
	            this.state = 193;
	            this.insertPropertyElement();
	            this.state = 198;
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
	        this.state = 199;
	        this.match(MQLParser.K_EDGE);
	        this.state = 200;
	        this.insertEdgeElement();
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 201;
	            this.match(MQLParser.COMMA);
	            this.state = 202;
	            this.insertEdgeElement();
	            this.state = 207;
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
	        this.state = 208;
	        this.match(MQLParser.L_PAR);
	        this.state = 211;
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
	        case 47:
	        case 48:
	        case 49:
	        case 61:
	            this.state = 209;
	            this.identifier();
	            break;
	        case 52:
	            this.state = 210;
	            this.match(MQLParser.ANON_ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 213;
	        this.match(MQLParser.COMMA);
	        this.state = 214;
	        this.match(MQLParser.STRING);
	        this.state = 215;
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
	        this.state = 217;
	        this.match(MQLParser.L_PAR);
	        this.state = 218;
	        this.fixedNodeInside();
	        this.state = 219;
	        this.match(MQLParser.COMMA);
	        this.state = 220;
	        this.match(MQLParser.STRING);
	        this.state = 221;
	        this.match(MQLParser.COMMA);
	        this.state = 222;
	        this.value();
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



	insertEdgeElement() {
	    let localctx = new InsertEdgeElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MQLParser.RULE_insertEdgeElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(MQLParser.L_PAR);
	        this.state = 226;
	        this.fixedNodeInside();
	        this.state = 227;
	        this.match(MQLParser.COMMA);
	        this.state = 228;
	        this.fixedNodeInside();
	        this.state = 229;
	        this.match(MQLParser.COMMA);
	        this.state = 230;
	        this.identifier();
	        this.state = 231;
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
	        this.state = 233;
	        this.match(MQLParser.K_SET);
	        this.state = 234;
	        this.setItem();
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 235;
	            this.match(MQLParser.COMMA);
	            this.state = 236;
	            this.setItem();
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



	matchStatement() {
	    let localctx = new MatchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MQLParser.RULE_matchStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(MQLParser.K_MATCH);
	        this.state = 243;
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
	        this.state = 245;
	        this.match(MQLParser.K_WHERE);
	        this.state = 246;
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
	        this.state = 248;
	        this.match(MQLParser.K_GROUP);
	        this.state = 249;
	        this.match(MQLParser.K_BY);
	        this.state = 250;
	        this.groupByItem();
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 251;
	            this.match(MQLParser.COMMA);
	            this.state = 252;
	            this.groupByItem();
	            this.state = 257;
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
	        this.state = 258;
	        this.match(MQLParser.K_ORDER);
	        this.state = 259;
	        this.match(MQLParser.K_BY);
	        this.state = 260;
	        this.orderByItem();
	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 261;
	            this.match(MQLParser.COMMA);
	            this.state = 262;
	            this.orderByItem();
	            this.state = 267;
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
	        this.state = 293;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReturnListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 268;
	            this.match(MQLParser.K_RETURN);
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 269;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 272;
	            this.returnItem();
	            this.state = 277;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===83) {
	                this.state = 273;
	                this.match(MQLParser.COMMA);
	                this.state = 274;
	                this.returnItem();
	                this.state = 279;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 280;
	                this.match(MQLParser.K_LIMIT);
	                this.state = 281;
	                this.match(MQLParser.UNSIGNED_INTEGER);
	            }

	            break;

	        case 2:
	            localctx = new ReturnAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 284;
	            this.match(MQLParser.K_RETURN);
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 285;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 288;
	            this.match(MQLParser.STAR);
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 289;
	                this.match(MQLParser.K_LIMIT);
	                this.state = 290;
	                this.match(MQLParser.UNSIGNED_INTEGER);
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



	setItem() {
	    let localctx = new SetItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MQLParser.RULE_setItem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(MQLParser.VARIABLE);
	        this.state = 296;
	        this.match(MQLParser.SINGLE_EQ);
	        this.state = 297;
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
	    this.enterRule(localctx, 40, MQLParser.RULE_returnItem);
	    var _la = 0;
	    try {
	        this.state = 324;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            localctx = new ReturnItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 299;
	            this.match(MQLParser.VARIABLE);
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 300;
	                this.match(MQLParser.KEY);
	            }

	            break;
	        case 5:
	        case 28:
	        case 29:
	        case 44:
	            localctx = new ReturnItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 303;
	            this.aggregateFunc();
	            this.state = 304;
	            this.match(MQLParser.L_PAR);
	            this.state = 305;
	            this.match(MQLParser.VARIABLE);
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 306;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 309;
	            this.match(MQLParser.R_PAR);
	            break;
	        case 10:
	            localctx = new ReturnItemCountContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 311;
	            this.match(MQLParser.K_COUNT);
	            this.state = 312;
	            this.match(MQLParser.L_PAR);
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 313;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 321;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 57:
	                this.state = 316;
	                this.match(MQLParser.VARIABLE);
	                this.state = 318;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===54) {
	                    this.state = 317;
	                    this.match(MQLParser.KEY);
	                }

	                break;
	            case 72:
	                this.state = 320;
	                this.match(MQLParser.STAR);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 323;
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
	    this.enterRule(localctx, 42, MQLParser.RULE_aggregateFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 805306400) !== 0) || _la===44)) {
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
	    this.enterRule(localctx, 44, MQLParser.RULE_orderByItem);
	    var _la = 0;
	    try {
	        this.state = 358;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            localctx = new OrderByItemVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 328;
	            this.match(MQLParser.VARIABLE);
	            this.state = 330;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 329;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 333;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===12) {
	                this.state = 332;
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
	        case 44:
	            localctx = new OrderByItemAggContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            this.aggregateFunc();
	            this.state = 336;
	            this.match(MQLParser.L_PAR);
	            this.state = 337;
	            this.match(MQLParser.VARIABLE);
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 338;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 341;
	            this.match(MQLParser.R_PAR);
	            this.state = 343;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===12) {
	                this.state = 342;
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
	            this.state = 345;
	            this.match(MQLParser.K_COUNT);
	            this.state = 346;
	            this.match(MQLParser.L_PAR);
	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 347;
	                this.match(MQLParser.K_DISTINCT);
	            }

	            this.state = 350;
	            this.match(MQLParser.VARIABLE);
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 351;
	                this.match(MQLParser.KEY);
	            }

	            this.state = 354;
	            this.match(MQLParser.R_PAR);
	            this.state = 356;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===12) {
	                this.state = 355;
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
	    this.enterRule(localctx, 46, MQLParser.RULE_groupByItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(MQLParser.VARIABLE);
	        this.state = 362;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 361;
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
	    this.enterRule(localctx, 48, MQLParser.RULE_graphPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.basicPattern();
	        this.state = 368;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 365;
	            this.optionalPattern();
	            this.state = 370;
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
	    this.enterRule(localctx, 50, MQLParser.RULE_optionalPattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(MQLParser.K_OPTIONAL);
	        this.state = 372;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 373;
	        this.graphPattern();
	        this.state = 374;
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
	    this.enterRule(localctx, 52, MQLParser.RULE_similaritySearch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(MQLParser.K_SIMILARITY_SEARCH);
	        this.state = 377;
	        this.match(MQLParser.L_PAR);
	        this.state = 378;
	        this.match(MQLParser.VARIABLE);
	        this.state = 379;
	        this.match(MQLParser.COMMA);
	        this.state = 380;
	        this.match(MQLParser.VARIABLE);
	        this.state = 381;
	        this.match(MQLParser.COMMA);
	        this.state = 382;
	        this.match(MQLParser.STRING);
	        this.state = 383;
	        this.match(MQLParser.COMMA);
	        this.state = 386;
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
	        case 52:
	        case 53:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 75:
	        case 76:
	            this.state = 384;
	            this.fixedNodeInside();
	            break;
	        case 81:
	            this.state = 385;
	            this.tensor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 388;
	        this.match(MQLParser.COMMA);
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===75 || _la===76) {
	            this.state = 389;
	            _la = this._input.LA(1);
	            if(!(_la===75 || _la===76)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 392;
	        this.match(MQLParser.UNSIGNED_INTEGER);
	        this.state = 393;
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
	    this.enterRule(localctx, 54, MQLParser.RULE_tensor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 396;
	        this.numericValue();
	        this.state = 401;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 397;
	            this.match(MQLParser.COMMA);
	            this.state = 398;
	            this.numericValue();
	            this.state = 403;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 404;
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
	    this.enterRule(localctx, 56, MQLParser.RULE_basicPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.linearPattern();
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 407;
	            this.match(MQLParser.COMMA);
	            this.state = 408;
	            this.linearPattern();
	            this.state = 413;
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
	    this.enterRule(localctx, 58, MQLParser.RULE_linearPattern);
	    var _la = 0;
	    try {
	        this.state = 427;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 77:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 414;
	            this.node();
	            this.state = 423;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 16465) !== 0)) {
	                this.state = 417;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 66:
	                case 76:
	                    this.state = 415;
	                    this.edge();
	                    break;
	                case 62:
	                case 68:
	                    this.state = 416;
	                    this.path();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 419;
	                this.node();
	                this.state = 425;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 426;
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
	    this.enterRule(localctx, 60, MQLParser.RULE_path);
	    var _la = 0;
	    try {
	        this.state = 454;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 62:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 429;
	            this.match(MQLParser.LEQ);
	            this.state = 430;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 432;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6) {
	                this.state = 431;
	                this.pathType();
	            }

	            this.state = 435;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===57) {
	                this.state = 434;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 437;
	            this.pathAlternatives();
	            this.state = 438;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 439;
	            this.match(MQLParser.SINGLE_EQ);
	            break;
	        case 68:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 441;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 442;
	            this.match(MQLParser.LSQUARE_BRACKET);
	            this.state = 444;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6) {
	                this.state = 443;
	                this.pathType();
	            }

	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===57) {
	                this.state = 446;
	                this.match(MQLParser.VARIABLE);
	            }

	            this.state = 449;
	            this.pathAlternatives();
	            this.state = 450;
	            this.match(MQLParser.RSQUARE_BRACKET);
	            this.state = 451;
	            this.match(MQLParser.SINGLE_EQ);
	            this.state = 452;
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
	    this.enterRule(localctx, 62, MQLParser.RULE_pathAlternatives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this.pathSequence();
	        this.state = 461;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===70) {
	            this.state = 457;
	            this.match(MQLParser.PATH_ALTERNATIVE);
	            this.state = 458;
	            this.pathSequence();
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



	pathSequence() {
	    let localctx = new PathSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, MQLParser.RULE_pathSequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this.pathAtom();
	        this.state = 469;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===69) {
	            this.state = 465;
	            this.match(MQLParser.PATH_SEQUENCE);
	            this.state = 466;
	            this.pathAtom();
	            this.state = 471;
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
	    this.enterRule(localctx, 66, MQLParser.RULE_pathAtom);
	    var _la = 0;
	    try {
	        this.state = 488;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PathAtomSimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 473;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===71) {
	                this.state = 472;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 475;
	            this.match(MQLParser.TYPE);
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 141) !== 0)) {
	                this.state = 476;
	                this.pathSuffix();
	            }

	            break;

	        case 2:
	            localctx = new PathAtomAlternativesContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 480;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===71) {
	                this.state = 479;
	                this.match(MQLParser.PATH_NEGATION);
	            }

	            this.state = 482;
	            this.match(MQLParser.L_PAR);
	            this.state = 483;
	            this.pathAlternatives();
	            this.state = 484;
	            this.match(MQLParser.R_PAR);
	            this.state = 486;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 141) !== 0)) {
	                this.state = 485;
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
	    this.enterRule(localctx, 68, MQLParser.RULE_pathSuffix);
	    try {
	        this.state = 498;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 72:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 490;
	            localctx.op = this.match(MQLParser.STAR);
	            break;
	        case 75:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 491;
	            localctx.op = this.match(MQLParser.PLUS);
	            break;
	        case 74:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 492;
	            localctx.op = this.match(MQLParser.QUESTION_MARK);
	            break;
	        case 79:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 493;
	            this.match(MQLParser.LCURLY_BRACKET);
	            this.state = 494;
	            localctx.min = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 495;
	            this.match(MQLParser.COMMA);
	            this.state = 496;
	            localctx.max = this.match(MQLParser.UNSIGNED_INTEGER);
	            this.state = 497;
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
	    this.enterRule(localctx, 70, MQLParser.RULE_pathType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 500;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 502;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 501;
	            this.match(MQLParser.K_SHORTEST);
	        }

	        this.state = 505;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 385) !== 0)) {
	            this.state = 504;
	            _la = this._input.LA(1);
	            if(!(_la===1 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 385) !== 0))) {
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
	    this.enterRule(localctx, 72, MQLParser.RULE_node);
	    try {
	        this.state = 509;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 507;
	            this.fixedNode();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 508;
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
	    this.enterRule(localctx, 74, MQLParser.RULE_fixedNode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.match(MQLParser.L_PAR);
	        this.state = 512;
	        this.fixedNodeInside();
	        this.state = 513;
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
	    this.enterRule(localctx, 76, MQLParser.RULE_fixedNodeInside);
	    try {
	        this.state = 519;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 515;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 516;
	            this.match(MQLParser.ANON_ID);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 517;
	            this.match(MQLParser.EDGE_ID);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 518;
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
	    this.enterRule(localctx, 78, MQLParser.RULE_edge);
	    var _la = 0;
	    try {
	        this.state = 534;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 521;
	            this.match(MQLParser.LT);
	            this.state = 524;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	            if(la_===1) {
	                this.state = 522;
	                this.match(MQLParser.MINUS);
	                this.state = 523;
	                this.edgeInside();

	            }
	            this.state = 526;
	            this.match(MQLParser.MINUS);
	            break;
	        case 76:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 527;
	            this.match(MQLParser.MINUS);
	            this.state = 531;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===81) {
	                this.state = 528;
	                this.edgeInside();
	                this.state = 529;
	                this.match(MQLParser.MINUS);
	            }

	            this.state = 533;
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
	    this.enterRule(localctx, 80, MQLParser.RULE_edgeInside);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 536;
	        this.match(MQLParser.LSQUARE_BRACKET);
	        this.state = 538;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53 || _la===57) {
	            this.state = 537;
	            _la = this._input.LA(1);
	            if(!(_la===53 || _la===57)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 541;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55 || _la===56) {
	            this.state = 540;
	            _la = this._input.LA(1);
	            if(!(_la===55 || _la===56)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 544;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 543;
	            this.properties();
	        }

	        this.state = 546;
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
	    this.enterRule(localctx, 82, MQLParser.RULE_varNode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 548;
	        this.match(MQLParser.L_PAR);
	        this.state = 550;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 549;
	            this.match(MQLParser.VARIABLE);
	        }

	        this.state = 555;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 552;
	            this.match(MQLParser.TYPE);
	            this.state = 557;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 559;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 558;
	            this.properties();
	        }

	        this.state = 561;
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
	    this.enterRule(localctx, 84, MQLParser.RULE_properties);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this.match(MQLParser.LCURLY_BRACKET);
	        this.state = 564;
	        this.property();
	        this.state = 569;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 565;
	            this.match(MQLParser.COMMA);
	            this.state = 566;
	            this.property();
	            this.state = 571;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 572;
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
	    this.enterRule(localctx, 86, MQLParser.RULE_property);
	    try {
	        this.state = 587;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Property1Context(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 574;
	            this.identifier();
	            this.state = 579;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 84:
	                this.state = 575;
	                this.match(MQLParser.COLON);
	                this.state = 576;
	                this.value();
	                break;
	            case 50:
	                this.state = 577;
	                this.match(MQLParser.TRUE_PROP);
	                break;
	            case 51:
	                this.state = 578;
	                this.match(MQLParser.FALSE_PROP);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            localctx = new Property2Context(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 581;
	            this.identifier();
	            this.state = 582;
	            this.match(MQLParser.TYPE);
	            this.state = 583;
	            this.match(MQLParser.L_PAR);
	            this.state = 584;
	            this.match(MQLParser.STRING);
	            this.state = 585;
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
	    this.enterRule(localctx, 88, MQLParser.RULE_identifier);
	    try {
	        this.state = 591;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 61:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 589;
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
	        case 47:
	        case 48:
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 590;
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
	    this.enterRule(localctx, 90, MQLParser.RULE_boolValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 593;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===46)) {
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
	    this.enterRule(localctx, 92, MQLParser.RULE_numericValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 596;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===75 || _la===76) {
	            this.state = 595;
	            _la = this._input.LA(1);
	            if(!(_la===75 || _la===76)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 598;
	        _la = this._input.LA(1);
	        if(!(_la===59 || _la===60)) {
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
	    this.enterRule(localctx, 94, MQLParser.RULE_datatypeValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 600;
	        this.identifier();
	        this.state = 601;
	        this.match(MQLParser.L_PAR);
	        this.state = 602;
	        this.match(MQLParser.STRING);
	        this.state = 603;
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
	    this.enterRule(localctx, 96, MQLParser.RULE_value);
	    try {
	        this.state = 609;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	        case 60:
	        case 75:
	        case 76:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 605;
	            this.numericValue();
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 606;
	            this.match(MQLParser.STRING);
	            break;
	        case 20:
	        case 46:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 607;
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
	        case 47:
	        case 48:
	        case 49:
	        case 61:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 608;
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
	    this.enterRule(localctx, 98, MQLParser.RULE_conditionalOrExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 611;
	        this.conditionalAndExpr();
	        this.state = 616;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 612;
	            this.match(MQLParser.K_OR);
	            this.state = 613;
	            this.conditionalAndExpr();
	            this.state = 618;
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
	    this.enterRule(localctx, 100, MQLParser.RULE_conditionalAndExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 619;
	        this.comparisonExpr();
	        this.state = 624;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 620;
	            this.match(MQLParser.K_AND);
	            this.state = 621;
	            this.comparisonExpr();
	            this.state = 626;
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
	    this.enterRule(localctx, 102, MQLParser.RULE_comparisonExpr);
	    var _la = 0;
	    try {
	        this.state = 639;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ComparisonExprOpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 627;
	            this.additiveExpr();
	            this.state = 630;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 63) !== 0)) {
	                this.state = 628;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 63) !== 0))) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 629;
	                this.additiveExpr();
	            }

	            break;

	        case 2:
	            localctx = new ComparisonExprIsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 632;
	            this.additiveExpr();
	            this.state = 633;
	            this.match(MQLParser.K_IS);
	            this.state = 635;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 634;
	                this.match(MQLParser.K_NOT);
	            }

	            this.state = 637;
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
	    this.enterRule(localctx, 104, MQLParser.RULE_additiveExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 641;
	        this.multiplicativeExpr();
	        this.state = 646;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75 || _la===76) {
	            this.state = 642;
	            localctx._tset1201 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===75 || _la===76)) {
	                localctx._tset1201 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1201);
	            this.state = 643;
	            this.multiplicativeExpr();
	            this.state = 648;
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
	    this.enterRule(localctx, 106, MQLParser.RULE_multiplicativeExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 649;
	        this.unaryExpr();
	        this.state = 654;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 69)) & ~0x1f) === 0 && ((1 << (_la - 69)) & 25) !== 0)) {
	            this.state = 650;
	            localctx._tset1224 = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 69)) & ~0x1f) === 0 && ((1 << (_la - 69)) & 25) !== 0))) {
	                localctx._tset1224 = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            localctx.op.push(localctx._tset1224);
	            this.state = 651;
	            this.unaryExpr();
	            this.state = 656;
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
	    this.enterRule(localctx, 108, MQLParser.RULE_unaryExpr);
	    try {
	        this.state = 664;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,85,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 657;
	            this.match(MQLParser.K_NOT);
	            this.state = 658;
	            this.unaryExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 659;
	            this.match(MQLParser.PLUS);
	            this.state = 660;
	            this.unaryExpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 661;
	            this.match(MQLParser.MINUS);
	            this.state = 662;
	            this.unaryExpr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 663;
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
	    this.enterRule(localctx, 110, MQLParser.RULE_atomicExpr);
	    var _la = 0;
	    try {
	        this.state = 675;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            localctx = new ExprVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 666;
	            this.match(MQLParser.VARIABLE);
	            this.state = 668;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 667;
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
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	            localctx = new ExprValueExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 670;
	            this.valueExpr();
	            break;
	        case 77:
	            localctx = new ExprParenthesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 671;
	            this.match(MQLParser.L_PAR);
	            this.state = 672;
	            this.conditionalOrExpr();
	            this.state = 673;
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
	    this.enterRule(localctx, 112, MQLParser.RULE_valueExpr);
	    try {
	        this.state = 682;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 677;
	            this.match(MQLParser.UNSIGNED_INTEGER);
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 678;
	            this.match(MQLParser.UNSIGNED_FLOAT);
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 679;
	            this.match(MQLParser.STRING);
	            break;
	        case 20:
	        case 46:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 680;
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
	        case 47:
	        case 48:
	        case 49:
	        case 61:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 681;
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
	    this.enterRule(localctx, 114, MQLParser.RULE_exprTypename);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 684;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2359808) !== 0) || _la===38 || _la===45)) {
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
	    this.enterRule(localctx, 116, MQLParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 686;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293918718) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 245755) !== 0))) {
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
MQLParser.K_OPTIONAL = 30;
MQLParser.K_ORDER = 31;
MQLParser.K_OR = 32;
MQLParser.K_OUTGOING = 33;
MQLParser.K_PROJECT_SIMILARITY = 34;
MQLParser.K_PROPERTIES = 35;
MQLParser.K_PROPERTY = 36;
MQLParser.K_NOT = 37;
MQLParser.K_NULL = 38;
MQLParser.K_SHORTEST = 39;
MQLParser.K_SIMPLE = 40;
MQLParser.K_RETURN = 41;
MQLParser.K_SET = 42;
MQLParser.K_SIMILARITY_SEARCH = 43;
MQLParser.K_SUM = 44;
MQLParser.K_STRING = 45;
MQLParser.K_TRUE = 46;
MQLParser.K_TRAILS = 47;
MQLParser.K_WALKS = 48;
MQLParser.K_WHERE = 49;
MQLParser.TRUE_PROP = 50;
MQLParser.FALSE_PROP = 51;
MQLParser.ANON_ID = 52;
MQLParser.EDGE_ID = 53;
MQLParser.KEY = 54;
MQLParser.TYPE = 55;
MQLParser.TYPE_VAR = 56;
MQLParser.VARIABLE = 57;
MQLParser.STRING = 58;
MQLParser.UNSIGNED_INTEGER = 59;
MQLParser.UNSIGNED_FLOAT = 60;
MQLParser.NAME = 61;
MQLParser.LEQ = 62;
MQLParser.GEQ = 63;
MQLParser.EQ = 64;
MQLParser.NEQ = 65;
MQLParser.LT = 66;
MQLParser.GT = 67;
MQLParser.SINGLE_EQ = 68;
MQLParser.PATH_SEQUENCE = 69;
MQLParser.PATH_ALTERNATIVE = 70;
MQLParser.PATH_NEGATION = 71;
MQLParser.STAR = 72;
MQLParser.PERCENT = 73;
MQLParser.QUESTION_MARK = 74;
MQLParser.PLUS = 75;
MQLParser.MINUS = 76;
MQLParser.L_PAR = 77;
MQLParser.R_PAR = 78;
MQLParser.LCURLY_BRACKET = 79;
MQLParser.RCURLY_BRACKET = 80;
MQLParser.LSQUARE_BRACKET = 81;
MQLParser.RSQUARE_BRACKET = 82;
MQLParser.COMMA = 83;
MQLParser.COLON = 84;
MQLParser.WHITE_SPACE = 85;
MQLParser.SINGLE_LINE_COMMENT = 86;
MQLParser.UNRECOGNIZED = 87;

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
MQLParser.RULE_setItem = 19;
MQLParser.RULE_returnItem = 20;
MQLParser.RULE_aggregateFunc = 21;
MQLParser.RULE_orderByItem = 22;
MQLParser.RULE_groupByItem = 23;
MQLParser.RULE_graphPattern = 24;
MQLParser.RULE_optionalPattern = 25;
MQLParser.RULE_similaritySearch = 26;
MQLParser.RULE_tensor = 27;
MQLParser.RULE_basicPattern = 28;
MQLParser.RULE_linearPattern = 29;
MQLParser.RULE_path = 30;
MQLParser.RULE_pathAlternatives = 31;
MQLParser.RULE_pathSequence = 32;
MQLParser.RULE_pathAtom = 33;
MQLParser.RULE_pathSuffix = 34;
MQLParser.RULE_pathType = 35;
MQLParser.RULE_node = 36;
MQLParser.RULE_fixedNode = 37;
MQLParser.RULE_fixedNodeInside = 38;
MQLParser.RULE_edge = 39;
MQLParser.RULE_edgeInside = 40;
MQLParser.RULE_varNode = 41;
MQLParser.RULE_properties = 42;
MQLParser.RULE_property = 43;
MQLParser.RULE_identifier = 44;
MQLParser.RULE_boolValue = 45;
MQLParser.RULE_numericValue = 46;
MQLParser.RULE_datatypeValue = 47;
MQLParser.RULE_value = 48;
MQLParser.RULE_conditionalOrExpr = 49;
MQLParser.RULE_conditionalAndExpr = 50;
MQLParser.RULE_comparisonExpr = 51;
MQLParser.RULE_additiveExpr = 52;
MQLParser.RULE_multiplicativeExpr = 53;
MQLParser.RULE_unaryExpr = 54;
MQLParser.RULE_atomicExpr = 55;
MQLParser.RULE_valueExpr = 56;
MQLParser.RULE_exprTypename = 57;
MQLParser.RULE_keyword = 58;

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

	K_LIMIT() {
	    return this.getToken(MQLParser.K_LIMIT, 0);
	};

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
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


	K_LIMIT() {
	    return this.getToken(MQLParser.K_LIMIT, 0);
	};

	UNSIGNED_INTEGER() {
	    return this.getToken(MQLParser.UNSIGNED_INTEGER, 0);
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
        this.s75 = null;
        this.op = [];
        this.s76 = null;
        this._tset1201 = null;
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
        this.s72 = null;
        this.op = [];
        this.s69 = null;
        this.s73 = null;
        this._tset1224 = null;
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
