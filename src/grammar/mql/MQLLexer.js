// Generated from src/grammar/mql/MQLLexer.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,99,924,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,
2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,
56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,
7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,91,2,92,
7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,98,7,98,2,99,7,
99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,2,104,7,104,2,105,7,105,
2,106,7,106,2,107,7,107,2,108,7,108,2,109,7,109,2,110,7,110,2,111,7,111,
2,112,7,112,2,113,7,113,2,114,7,114,2,115,7,115,2,116,7,116,2,117,7,117,
2,118,7,118,2,119,7,119,2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,
2,124,7,124,2,125,7,125,2,126,7,126,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,
1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,
17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,
1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,
21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,
1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,
26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,
31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,
1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,
35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,
40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,
43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,
47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,
1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,51,1,
51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,
1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,56,1,
56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,
1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,
60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,5,62,
663,8,62,10,62,12,62,666,9,62,1,63,1,63,1,63,1,63,1,63,5,63,673,8,63,10,
63,12,63,676,9,63,1,64,1,64,1,64,5,64,681,8,64,10,64,12,64,684,9,64,1,65,
1,65,1,65,5,65,689,8,65,10,65,12,65,692,9,65,1,66,1,66,1,66,1,66,5,66,698,
8,66,10,66,12,66,701,9,66,1,67,1,67,1,67,5,67,706,8,67,10,67,12,67,709,9,
67,1,68,1,68,1,68,1,68,5,68,715,8,68,10,68,12,68,718,9,68,1,68,1,68,1,69,
4,69,723,8,69,11,69,12,69,724,1,70,4,70,728,8,70,11,70,12,70,729,1,70,1,
70,5,70,734,8,70,10,70,12,70,737,9,70,1,70,1,70,4,70,741,8,70,11,70,12,70,
742,3,70,745,8,70,1,71,4,71,748,8,71,11,71,12,71,749,1,71,1,71,5,71,754,
8,71,10,71,12,71,757,9,71,1,71,1,71,1,71,1,71,4,71,763,8,71,11,71,12,71,
764,1,71,1,71,1,71,4,71,770,8,71,11,71,12,71,771,1,71,1,71,3,71,776,8,71,
1,72,1,72,5,72,780,8,72,10,72,12,72,783,9,72,1,73,1,73,1,73,1,74,1,74,1,
74,1,75,1,75,1,75,1,76,1,76,1,76,1,77,1,77,1,78,1,78,1,79,1,79,1,80,1,80,
1,81,1,81,1,82,1,82,1,83,1,83,1,84,1,84,1,85,1,85,1,86,1,86,1,87,1,87,1,
88,1,88,1,89,1,89,1,90,1,90,1,91,1,91,1,92,1,92,1,93,1,93,1,94,1,94,1,95,
1,95,1,96,4,96,836,8,96,11,96,12,96,837,1,96,1,96,1,97,1,97,1,97,1,97,5,
97,846,8,97,10,97,12,97,849,9,97,1,97,3,97,852,8,97,1,97,1,97,3,97,856,8,
97,1,97,1,97,1,98,1,98,1,99,1,99,1,100,1,100,3,100,866,8,100,1,100,4,100,
869,8,100,11,100,12,100,870,1,101,1,101,1,102,1,102,1,103,1,103,1,104,1,
104,1,105,1,105,1,106,1,106,1,107,1,107,1,108,1,108,1,109,1,109,1,110,1,
110,1,111,1,111,1,112,1,112,1,113,1,113,1,114,1,114,1,115,1,115,1,116,1,
116,1,117,1,117,1,118,1,118,1,119,1,119,1,120,1,120,1,121,1,121,1,122,1,
122,1,123,1,123,1,124,1,124,1,125,1,125,1,126,1,126,0,0,127,1,1,3,2,5,3,
7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,
17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,
29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,
41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,
53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,
127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,
74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,167,84,
169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,187,94,189,
95,191,96,193,97,195,98,197,99,199,0,201,0,203,0,205,0,207,0,209,0,211,0,
213,0,215,0,217,0,219,0,221,0,223,0,225,0,227,0,229,0,231,0,233,0,235,0,
237,0,239,0,241,0,243,0,245,0,247,0,249,0,251,0,253,0,1,0,34,1,0,49,57,1,
0,48,57,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,1,0,34,34,3,0,9,10,
13,13,32,32,2,0,10,10,13,13,2,0,69,69,101,101,2,0,43,43,45,45,2,0,65,65,
97,97,2,0,66,66,98,98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,70,70,102,102,
2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,105,105,2,0,74,74,106,106,
2,0,75,75,107,107,2,0,76,76,108,108,2,0,77,77,109,109,2,0,78,78,110,110,
2,0,79,79,111,111,2,0,80,80,112,112,2,0,81,81,113,113,2,0,82,82,114,114,
2,0,83,83,115,115,2,0,84,84,116,116,2,0,85,85,117,117,2,0,86,86,118,118,
2,0,87,87,119,119,2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,122,122,
921,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,
0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,
0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,
57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,
0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,
1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,
0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,
0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,
0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,
0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,
0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,
143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,
1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,
0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,
0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,
0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,
0,195,1,0,0,0,0,197,1,0,0,0,1,255,1,0,0,0,3,263,1,0,0,0,5,267,1,0,0,0,7,
275,1,0,0,0,9,279,1,0,0,0,11,282,1,0,0,0,13,286,1,0,0,0,15,290,1,0,0,0,17,
294,1,0,0,0,19,297,1,0,0,0,21,302,1,0,0,0,23,308,1,0,0,0,25,315,1,0,0,0,
27,322,1,0,0,0,29,331,1,0,0,0,31,336,1,0,0,0,33,347,1,0,0,0,35,356,1,0,0,
0,37,361,1,0,0,0,39,371,1,0,0,0,41,376,1,0,0,0,43,385,1,0,0,0,45,392,1,0,
0,0,47,400,1,0,0,0,49,405,1,0,0,0,51,408,1,0,0,0,53,414,1,0,0,0,55,420,1,
0,0,0,57,426,1,0,0,0,59,433,1,0,0,0,61,439,1,0,0,0,63,445,1,0,0,0,65,455,
1,0,0,0,67,461,1,0,0,0,69,465,1,0,0,0,71,469,1,0,0,0,73,477,1,0,0,0,75,484,
1,0,0,0,77,493,1,0,0,0,79,499,1,0,0,0,81,502,1,0,0,0,83,511,1,0,0,0,85,522,
1,0,0,0,87,531,1,0,0,0,89,535,1,0,0,0,91,540,1,0,0,0,93,549,1,0,0,0,95,556,
1,0,0,0,97,572,1,0,0,0,99,578,1,0,0,0,101,585,1,0,0,0,103,589,1,0,0,0,105,
593,1,0,0,0,107,600,1,0,0,0,109,606,1,0,0,0,111,613,1,0,0,0,113,618,1,0,
0,0,115,625,1,0,0,0,117,632,1,0,0,0,119,638,1,0,0,0,121,644,1,0,0,0,123,
650,1,0,0,0,125,657,1,0,0,0,127,667,1,0,0,0,129,677,1,0,0,0,131,685,1,0,
0,0,133,693,1,0,0,0,135,702,1,0,0,0,137,710,1,0,0,0,139,722,1,0,0,0,141,
744,1,0,0,0,143,775,1,0,0,0,145,777,1,0,0,0,147,784,1,0,0,0,149,787,1,0,
0,0,151,790,1,0,0,0,153,793,1,0,0,0,155,796,1,0,0,0,157,798,1,0,0,0,159,
800,1,0,0,0,161,802,1,0,0,0,163,804,1,0,0,0,165,806,1,0,0,0,167,808,1,0,
0,0,169,810,1,0,0,0,171,812,1,0,0,0,173,814,1,0,0,0,175,816,1,0,0,0,177,
818,1,0,0,0,179,820,1,0,0,0,181,822,1,0,0,0,183,824,1,0,0,0,185,826,1,0,
0,0,187,828,1,0,0,0,189,830,1,0,0,0,191,832,1,0,0,0,193,835,1,0,0,0,195,
841,1,0,0,0,197,859,1,0,0,0,199,861,1,0,0,0,201,863,1,0,0,0,203,872,1,0,
0,0,205,874,1,0,0,0,207,876,1,0,0,0,209,878,1,0,0,0,211,880,1,0,0,0,213,
882,1,0,0,0,215,884,1,0,0,0,217,886,1,0,0,0,219,888,1,0,0,0,221,890,1,0,
0,0,223,892,1,0,0,0,225,894,1,0,0,0,227,896,1,0,0,0,229,898,1,0,0,0,231,
900,1,0,0,0,233,902,1,0,0,0,235,904,1,0,0,0,237,906,1,0,0,0,239,908,1,0,
0,0,241,910,1,0,0,0,243,912,1,0,0,0,245,914,1,0,0,0,247,916,1,0,0,0,249,
918,1,0,0,0,251,920,1,0,0,0,253,922,1,0,0,0,255,256,3,203,101,0,256,257,
3,207,103,0,257,258,3,251,125,0,258,259,3,207,103,0,259,260,3,225,112,0,
260,261,3,219,109,0,261,262,3,207,103,0,262,2,1,0,0,0,263,264,3,203,101,
0,264,265,3,229,114,0,265,266,3,209,104,0,266,4,1,0,0,0,267,268,3,203,101,
0,268,269,3,229,114,0,269,270,3,215,107,0,270,271,3,243,121,0,271,272,3,
225,112,0,272,273,3,203,101,0,273,274,3,237,118,0,274,6,1,0,0,0,275,276,
3,203,101,0,276,277,3,229,114,0,277,278,3,251,125,0,278,8,1,0,0,0,279,280,
3,203,101,0,280,281,3,239,119,0,281,10,1,0,0,0,282,283,3,203,101,0,283,284,
3,245,122,0,284,285,3,215,107,0,285,12,1,0,0,0,286,287,3,203,101,0,287,288,
3,225,112,0,288,289,3,225,112,0,289,14,1,0,0,0,290,291,3,203,101,0,291,292,
3,239,119,0,292,293,3,207,103,0,293,16,1,0,0,0,294,295,3,205,102,0,295,296,
3,251,125,0,296,18,1,0,0,0,297,298,3,205,102,0,298,299,3,231,115,0,299,300,
3,231,115,0,300,301,3,225,112,0,301,20,1,0,0,0,302,303,3,207,103,0,303,304,
3,231,115,0,304,305,3,243,121,0,305,306,3,229,114,0,306,307,3,241,120,0,
307,22,1,0,0,0,308,309,3,207,103,0,309,310,3,237,118,0,310,311,3,211,105,
0,311,312,3,203,101,0,312,313,3,241,120,0,313,314,3,211,105,0,314,24,1,0,
0,0,315,316,3,209,104,0,316,317,3,211,105,0,317,318,3,225,112,0,318,319,
3,211,105,0,319,320,3,241,120,0,320,321,3,211,105,0,321,26,1,0,0,0,322,323,
3,209,104,0,323,324,3,211,105,0,324,325,3,239,119,0,325,326,3,207,103,0,
326,327,3,237,118,0,327,328,3,219,109,0,328,329,3,205,102,0,329,330,3,211,
105,0,330,28,1,0,0,0,331,332,3,209,104,0,332,333,3,211,105,0,333,334,3,239,
119,0,334,335,3,207,103,0,335,30,1,0,0,0,336,337,3,209,104,0,337,338,3,219,
109,0,338,339,3,227,113,0,339,340,3,211,105,0,340,341,3,229,114,0,341,342,
3,239,119,0,342,343,3,219,109,0,343,344,3,231,115,0,344,345,3,229,114,0,
345,346,3,239,119,0,346,32,1,0,0,0,347,348,3,209,104,0,348,349,3,219,109,
0,349,350,3,239,119,0,350,351,3,241,120,0,351,352,3,219,109,0,352,353,3,
229,114,0,353,354,3,207,103,0,354,355,3,241,120,0,355,34,1,0,0,0,356,357,
3,211,105,0,357,358,3,209,104,0,358,359,3,215,107,0,359,360,3,211,105,0,
360,36,1,0,0,0,361,362,3,211,105,0,362,363,3,243,121,0,363,364,3,207,103,
0,364,365,3,225,112,0,365,366,3,219,109,0,366,367,3,209,104,0,367,368,3,
211,105,0,368,369,3,203,101,0,369,370,3,229,114,0,370,38,1,0,0,0,371,372,
3,213,106,0,372,373,3,237,118,0,373,374,3,231,115,0,374,375,3,227,113,0,
375,40,1,0,0,0,376,377,3,219,109,0,377,378,3,229,114,0,378,379,3,207,103,
0,379,380,3,231,115,0,380,381,3,227,113,0,381,382,3,219,109,0,382,383,3,
229,114,0,383,384,3,215,107,0,384,42,1,0,0,0,385,386,3,219,109,0,386,387,
3,229,114,0,387,388,3,239,119,0,388,389,3,211,105,0,389,390,3,237,118,0,
390,391,3,241,120,0,391,44,1,0,0,0,392,393,3,219,109,0,393,394,3,229,114,
0,394,395,3,241,120,0,395,396,3,211,105,0,396,397,3,215,107,0,397,398,3,
211,105,0,398,399,3,237,118,0,399,46,1,0,0,0,400,401,3,219,109,0,401,402,
3,229,114,0,402,403,3,241,120,0,403,404,3,231,115,0,404,48,1,0,0,0,405,406,
3,219,109,0,406,407,3,239,119,0,407,50,1,0,0,0,408,409,5,102,0,0,409,410,
5,97,0,0,410,411,5,108,0,0,411,412,5,115,0,0,412,413,5,101,0,0,413,52,1,
0,0,0,414,415,3,213,106,0,415,416,3,225,112,0,416,417,3,231,115,0,417,418,
3,203,101,0,418,419,3,241,120,0,419,54,1,0,0,0,420,421,3,215,107,0,421,422,
3,237,118,0,422,423,3,231,115,0,423,424,3,243,121,0,424,425,3,233,116,0,
425,56,1,0,0,0,426,427,3,225,112,0,427,428,3,203,101,0,428,429,3,205,102,
0,429,430,3,211,105,0,430,431,3,225,112,0,431,432,3,239,119,0,432,58,1,0,
0,0,433,434,3,225,112,0,434,435,3,203,101,0,435,436,3,205,102,0,436,437,
3,211,105,0,437,438,3,225,112,0,438,60,1,0,0,0,439,440,3,225,112,0,440,441,
3,219,109,0,441,442,3,227,113,0,442,443,3,219,109,0,443,444,3,241,120,0,
444,62,1,0,0,0,445,446,3,227,113,0,446,447,3,203,101,0,447,448,3,229,114,
0,448,449,3,217,108,0,449,450,3,203,101,0,450,451,3,241,120,0,451,452,3,
241,120,0,452,453,3,203,101,0,453,454,3,229,114,0,454,64,1,0,0,0,455,456,
3,227,113,0,456,457,3,203,101,0,457,458,3,241,120,0,458,459,3,207,103,0,
459,460,3,217,108,0,460,66,1,0,0,0,461,462,3,227,113,0,462,463,3,203,101,
0,463,464,3,249,124,0,464,68,1,0,0,0,465,466,3,227,113,0,466,467,3,219,109,
0,467,468,3,229,114,0,468,70,1,0,0,0,469,470,3,231,115,0,470,471,3,205,102,
0,471,472,3,221,110,0,472,473,3,211,105,0,473,474,3,207,103,0,474,475,3,
241,120,0,475,476,3,239,119,0,476,72,1,0,0,0,477,478,3,231,115,0,478,479,
3,213,106,0,479,480,3,213,106,0,480,481,3,239,119,0,481,482,3,211,105,0,
482,483,3,241,120,0,483,74,1,0,0,0,484,485,3,231,115,0,485,486,3,233,116,
0,486,487,3,241,120,0,487,488,3,219,109,0,488,489,3,231,115,0,489,490,3,
229,114,0,490,491,3,203,101,0,491,492,3,225,112,0,492,76,1,0,0,0,493,494,
3,231,115,0,494,495,3,237,118,0,495,496,3,209,104,0,496,497,3,211,105,0,
497,498,3,237,118,0,498,78,1,0,0,0,499,500,3,231,115,0,500,501,3,237,118,
0,501,80,1,0,0,0,502,503,3,231,115,0,503,504,3,243,121,0,504,505,3,241,120,
0,505,506,3,215,107,0,506,507,3,231,115,0,507,508,3,219,109,0,508,509,3,
229,114,0,509,510,3,215,107,0,510,82,1,0,0,0,511,512,3,233,116,0,512,513,
3,237,118,0,513,514,3,231,115,0,514,515,3,233,116,0,515,516,3,211,105,0,
516,517,3,237,118,0,517,518,3,241,120,0,518,519,3,219,109,0,519,520,3,211,
105,0,520,521,3,239,119,0,521,84,1,0,0,0,522,523,3,233,116,0,523,524,3,237,
118,0,524,525,3,231,115,0,525,526,3,233,116,0,526,527,3,211,105,0,527,528,
3,237,118,0,528,529,3,241,120,0,529,530,3,251,125,0,530,86,1,0,0,0,531,532,
3,229,114,0,532,533,3,231,115,0,533,534,3,241,120,0,534,88,1,0,0,0,535,536,
3,229,114,0,536,537,3,243,121,0,537,538,3,225,112,0,538,539,3,225,112,0,
539,90,1,0,0,0,540,541,3,239,119,0,541,542,3,217,108,0,542,543,3,231,115,
0,543,544,3,237,118,0,544,545,3,241,120,0,545,546,3,211,105,0,546,547,3,
239,119,0,547,548,3,241,120,0,548,92,1,0,0,0,549,550,3,239,119,0,550,551,
3,219,109,0,551,552,3,227,113,0,552,553,3,233,116,0,553,554,3,225,112,0,
554,555,3,211,105,0,555,94,1,0,0,0,556,557,3,241,120,0,557,558,3,211,105,
0,558,559,3,229,114,0,559,560,3,239,119,0,560,561,3,231,115,0,561,562,3,
237,118,0,562,563,5,95,0,0,563,564,3,209,104,0,564,565,3,219,109,0,565,566,
3,239,119,0,566,567,3,241,120,0,567,568,3,203,101,0,568,569,3,229,114,0,
569,570,3,207,103,0,570,571,3,211,105,0,571,96,1,0,0,0,572,573,3,237,118,
0,573,574,3,211,105,0,574,575,3,215,107,0,575,576,3,211,105,0,576,577,3,
249,124,0,577,98,1,0,0,0,578,579,3,237,118,0,579,580,3,211,105,0,580,581,
3,241,120,0,581,582,3,243,121,0,582,583,3,237,118,0,583,584,3,229,114,0,
584,100,1,0,0,0,585,586,3,239,119,0,586,587,3,211,105,0,587,588,3,241,120,
0,588,102,1,0,0,0,589,590,3,239,119,0,590,591,3,243,121,0,591,592,3,227,
113,0,592,104,1,0,0,0,593,594,3,239,119,0,594,595,3,241,120,0,595,596,3,
237,118,0,596,597,3,219,109,0,597,598,3,229,114,0,598,599,3,215,107,0,599,
106,1,0,0,0,600,601,3,239,119,0,601,602,3,241,120,0,602,603,3,231,115,0,
603,604,3,237,118,0,604,605,3,211,105,0,605,108,1,0,0,0,606,607,3,241,120,
0,607,608,3,211,105,0,608,609,3,229,114,0,609,610,3,239,119,0,610,611,3,
231,115,0,611,612,3,237,118,0,612,110,1,0,0,0,613,614,5,116,0,0,614,615,
5,114,0,0,615,616,5,117,0,0,616,617,5,101,0,0,617,112,1,0,0,0,618,619,3,
241,120,0,619,620,3,237,118,0,620,621,3,203,101,0,621,622,3,219,109,0,622,
623,3,225,112,0,623,624,3,239,119,0,624,114,1,0,0,0,625,626,3,245,122,0,
626,627,3,203,101,0,627,628,3,225,112,0,628,629,3,243,121,0,629,630,3,211,
105,0,630,631,3,239,119,0,631,116,1,0,0,0,632,633,3,247,123,0,633,634,3,
203,101,0,634,635,3,225,112,0,635,636,3,223,111,0,636,637,3,239,119,0,637,
118,1,0,0,0,638,639,3,247,123,0,639,640,3,217,108,0,640,641,3,211,105,0,
641,642,3,237,118,0,642,643,3,211,105,0,643,120,1,0,0,0,644,645,5,58,0,0,
645,646,5,116,0,0,646,647,5,114,0,0,647,648,5,117,0,0,648,649,5,101,0,0,
649,122,1,0,0,0,650,651,5,58,0,0,651,652,5,102,0,0,652,653,5,97,0,0,653,
654,5,108,0,0,654,655,5,115,0,0,655,656,5,101,0,0,656,124,1,0,0,0,657,658,
5,95,0,0,658,659,5,97,0,0,659,660,1,0,0,0,660,664,7,0,0,0,661,663,7,1,0,
0,662,661,1,0,0,0,663,666,1,0,0,0,664,662,1,0,0,0,664,665,1,0,0,0,665,126,
1,0,0,0,666,664,1,0,0,0,667,668,5,95,0,0,668,669,5,101,0,0,669,670,1,0,0,
0,670,674,7,0,0,0,671,673,7,1,0,0,672,671,1,0,0,0,673,676,1,0,0,0,674,672,
1,0,0,0,674,675,1,0,0,0,675,128,1,0,0,0,676,674,1,0,0,0,677,678,5,46,0,0,
678,682,7,2,0,0,679,681,7,3,0,0,680,679,1,0,0,0,681,684,1,0,0,0,682,680,
1,0,0,0,682,683,1,0,0,0,683,130,1,0,0,0,684,682,1,0,0,0,685,686,5,58,0,0,
686,690,7,2,0,0,687,689,7,3,0,0,688,687,1,0,0,0,689,692,1,0,0,0,690,688,
1,0,0,0,690,691,1,0,0,0,691,132,1,0,0,0,692,690,1,0,0,0,693,694,5,58,0,0,
694,695,5,63,0,0,695,699,7,2,0,0,696,698,7,3,0,0,697,696,1,0,0,0,698,701,
1,0,0,0,699,697,1,0,0,0,699,700,1,0,0,0,700,134,1,0,0,0,701,699,1,0,0,0,
702,703,5,63,0,0,703,707,7,2,0,0,704,706,7,3,0,0,705,704,1,0,0,0,706,709,
1,0,0,0,707,705,1,0,0,0,707,708,1,0,0,0,708,136,1,0,0,0,709,707,1,0,0,0,
710,716,5,34,0,0,711,715,8,4,0,0,712,713,5,92,0,0,713,715,5,34,0,0,714,711,
1,0,0,0,714,712,1,0,0,0,715,718,1,0,0,0,716,714,1,0,0,0,716,717,1,0,0,0,
717,719,1,0,0,0,718,716,1,0,0,0,719,720,5,34,0,0,720,138,1,0,0,0,721,723,
3,199,99,0,722,721,1,0,0,0,723,724,1,0,0,0,724,722,1,0,0,0,724,725,1,0,0,
0,725,140,1,0,0,0,726,728,3,199,99,0,727,726,1,0,0,0,728,729,1,0,0,0,729,
727,1,0,0,0,729,730,1,0,0,0,730,731,1,0,0,0,731,735,5,46,0,0,732,734,3,199,
99,0,733,732,1,0,0,0,734,737,1,0,0,0,735,733,1,0,0,0,735,736,1,0,0,0,736,
745,1,0,0,0,737,735,1,0,0,0,738,740,5,46,0,0,739,741,3,199,99,0,740,739,
1,0,0,0,741,742,1,0,0,0,742,740,1,0,0,0,742,743,1,0,0,0,743,745,1,0,0,0,
744,727,1,0,0,0,744,738,1,0,0,0,745,142,1,0,0,0,746,748,3,199,99,0,747,746,
1,0,0,0,748,749,1,0,0,0,749,747,1,0,0,0,749,750,1,0,0,0,750,751,1,0,0,0,
751,755,5,46,0,0,752,754,3,199,99,0,753,752,1,0,0,0,754,757,1,0,0,0,755,
753,1,0,0,0,755,756,1,0,0,0,756,758,1,0,0,0,757,755,1,0,0,0,758,759,3,201,
100,0,759,776,1,0,0,0,760,762,5,46,0,0,761,763,3,199,99,0,762,761,1,0,0,
0,763,764,1,0,0,0,764,762,1,0,0,0,764,765,1,0,0,0,765,766,1,0,0,0,766,767,
3,201,100,0,767,776,1,0,0,0,768,770,3,199,99,0,769,768,1,0,0,0,770,771,1,
0,0,0,771,769,1,0,0,0,771,772,1,0,0,0,772,773,1,0,0,0,773,774,3,201,100,
0,774,776,1,0,0,0,775,747,1,0,0,0,775,760,1,0,0,0,775,769,1,0,0,0,776,144,
1,0,0,0,777,781,7,2,0,0,778,780,7,3,0,0,779,778,1,0,0,0,780,783,1,0,0,0,
781,779,1,0,0,0,781,782,1,0,0,0,782,146,1,0,0,0,783,781,1,0,0,0,784,785,
5,60,0,0,785,786,5,61,0,0,786,148,1,0,0,0,787,788,5,62,0,0,788,789,5,61,
0,0,789,150,1,0,0,0,790,791,5,61,0,0,791,792,5,61,0,0,792,152,1,0,0,0,793,
794,5,33,0,0,794,795,5,61,0,0,795,154,1,0,0,0,796,797,5,60,0,0,797,156,1,
0,0,0,798,799,5,62,0,0,799,158,1,0,0,0,800,801,5,61,0,0,801,160,1,0,0,0,
802,803,5,47,0,0,803,162,1,0,0,0,804,805,5,124,0,0,805,164,1,0,0,0,806,807,
5,94,0,0,807,166,1,0,0,0,808,809,5,42,0,0,809,168,1,0,0,0,810,811,5,37,0,
0,811,170,1,0,0,0,812,813,5,63,0,0,813,172,1,0,0,0,814,815,5,43,0,0,815,
174,1,0,0,0,816,817,5,45,0,0,817,176,1,0,0,0,818,819,5,40,0,0,819,178,1,
0,0,0,820,821,5,41,0,0,821,180,1,0,0,0,822,823,5,123,0,0,823,182,1,0,0,0,
824,825,5,125,0,0,825,184,1,0,0,0,826,827,5,91,0,0,827,186,1,0,0,0,828,829,
5,93,0,0,829,188,1,0,0,0,830,831,5,44,0,0,831,190,1,0,0,0,832,833,5,58,0,
0,833,192,1,0,0,0,834,836,7,5,0,0,835,834,1,0,0,0,836,837,1,0,0,0,837,835,
1,0,0,0,837,838,1,0,0,0,838,839,1,0,0,0,839,840,6,96,0,0,840,194,1,0,0,0,
841,842,5,47,0,0,842,843,5,47,0,0,843,847,1,0,0,0,844,846,8,6,0,0,845,844,
1,0,0,0,846,849,1,0,0,0,847,845,1,0,0,0,847,848,1,0,0,0,848,855,1,0,0,0,
849,847,1,0,0,0,850,852,5,13,0,0,851,850,1,0,0,0,851,852,1,0,0,0,852,853,
1,0,0,0,853,856,5,10,0,0,854,856,5,0,0,1,855,851,1,0,0,0,855,854,1,0,0,0,
856,857,1,0,0,0,857,858,6,97,1,0,858,196,1,0,0,0,859,860,9,0,0,0,860,198,
1,0,0,0,861,862,7,1,0,0,862,200,1,0,0,0,863,865,7,7,0,0,864,866,7,8,0,0,
865,864,1,0,0,0,865,866,1,0,0,0,866,868,1,0,0,0,867,869,3,199,99,0,868,867,
1,0,0,0,869,870,1,0,0,0,870,868,1,0,0,0,870,871,1,0,0,0,871,202,1,0,0,0,
872,873,7,9,0,0,873,204,1,0,0,0,874,875,7,10,0,0,875,206,1,0,0,0,876,877,
7,11,0,0,877,208,1,0,0,0,878,879,7,12,0,0,879,210,1,0,0,0,880,881,7,7,0,
0,881,212,1,0,0,0,882,883,7,13,0,0,883,214,1,0,0,0,884,885,7,14,0,0,885,
216,1,0,0,0,886,887,7,15,0,0,887,218,1,0,0,0,888,889,7,16,0,0,889,220,1,
0,0,0,890,891,7,17,0,0,891,222,1,0,0,0,892,893,7,18,0,0,893,224,1,0,0,0,
894,895,7,19,0,0,895,226,1,0,0,0,896,897,7,20,0,0,897,228,1,0,0,0,898,899,
7,21,0,0,899,230,1,0,0,0,900,901,7,22,0,0,901,232,1,0,0,0,902,903,7,23,0,
0,903,234,1,0,0,0,904,905,7,24,0,0,905,236,1,0,0,0,906,907,7,25,0,0,907,
238,1,0,0,0,908,909,7,26,0,0,909,240,1,0,0,0,910,911,7,27,0,0,911,242,1,
0,0,0,912,913,7,28,0,0,913,244,1,0,0,0,914,915,7,29,0,0,915,246,1,0,0,0,
916,917,7,30,0,0,917,248,1,0,0,0,918,919,7,31,0,0,919,250,1,0,0,0,920,921,
7,32,0,0,921,252,1,0,0,0,922,923,7,33,0,0,923,254,1,0,0,0,26,0,664,674,682,
690,699,707,714,716,724,729,735,742,744,749,755,764,771,775,781,837,847,
851,855,865,870,2,0,2,0,0,1,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MQLLexer extends antlr4.Lexer {

    static grammarFileName = "MQLLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "WS_CHANNEL" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, "'false'", null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, "'true'", null, null, null, null, null, null, 
                         null, null, null, null, null, null, null, null, 
                         null, null, null, "'<='", "'>='", "'=='", "'!='", 
                         "'<'", "'>'", "'='", "'/'", "'|'", "'^'", "'*'", 
                         "'%'", "'?'", "'+'", "'-'", "'('", "')'", "'{'", 
                         "'}'", "'['", "']'", "','", "':'" ];
	static symbolicNames = [ null, "K_ACYCLIC", "K_AND", "K_ANGULAR", "K_ANY", 
                          "K_AS", "K_AVG", "K_ALL", "K_ASC", "K_BY", "K_BOOL", 
                          "K_COUNT", "K_CREATE", "K_DELETE", "K_DESCRIBE", 
                          "K_DESC", "K_DIMENSIONS", "K_DISTINCT", "K_EDGE", 
                          "K_EUCLIDEAN", "K_FROM", "K_INCOMING", "K_INSERT", 
                          "K_INTEGER", "K_INTO", "K_IS", "K_FALSE", "K_FLOAT", 
                          "K_GROUP", "K_LABELS", "K_LABEL", "K_LIMIT", "K_MANHATTAN", 
                          "K_MATCH", "K_MAX", "K_MIN", "K_OBJECTS", "K_OFFSET", 
                          "K_OPTIONAL", "K_ORDER", "K_OR", "K_OUTGOING", 
                          "K_PROPERTIES", "K_PROPERTY", "K_NOT", "K_NULL", 
                          "K_SHORTEST", "K_SIMPLE", "K_TENSOR_DISTANCE", 
                          "K_REGEX", "K_RETURN", "K_SET", "K_SUM", "K_STRING", 
                          "K_STORE", "K_TENSOR", "K_TRUE", "K_TRAILS", "K_VALUES", 
                          "K_WALKS", "K_WHERE", "TRUE_PROP", "FALSE_PROP", 
                          "ANON_ID", "EDGE_ID", "KEY", "TYPE", "TYPE_VAR", 
                          "VARIABLE", "STRING", "UNSIGNED_INTEGER", "UNSIGNED_FLOAT", 
                          "UNSIGNED_SCIENTIFIC_NOTATION", "NAME", "LEQ", 
                          "GEQ", "EQ", "NEQ", "LT", "GT", "SINGLE_EQ", "PATH_SEQUENCE", 
                          "PATH_ALTERNATIVE", "PATH_NEGATION", "STAR", "PERCENT", 
                          "QUESTION_MARK", "PLUS", "MINUS", "L_PAR", "R_PAR", 
                          "LCURLY_BRACKET", "RCURLY_BRACKET", "LSQUARE_BRACKET", 
                          "RSQUARE_BRACKET", "COMMA", "COLON", "WHITE_SPACE", 
                          "SINGLE_LINE_COMMENT", "UNRECOGNIZED" ];
	static ruleNames = [ "K_ACYCLIC", "K_AND", "K_ANGULAR", "K_ANY", "K_AS", 
                      "K_AVG", "K_ALL", "K_ASC", "K_BY", "K_BOOL", "K_COUNT", 
                      "K_CREATE", "K_DELETE", "K_DESCRIBE", "K_DESC", "K_DIMENSIONS", 
                      "K_DISTINCT", "K_EDGE", "K_EUCLIDEAN", "K_FROM", "K_INCOMING", 
                      "K_INSERT", "K_INTEGER", "K_INTO", "K_IS", "K_FALSE", 
                      "K_FLOAT", "K_GROUP", "K_LABELS", "K_LABEL", "K_LIMIT", 
                      "K_MANHATTAN", "K_MATCH", "K_MAX", "K_MIN", "K_OBJECTS", 
                      "K_OFFSET", "K_OPTIONAL", "K_ORDER", "K_OR", "K_OUTGOING", 
                      "K_PROPERTIES", "K_PROPERTY", "K_NOT", "K_NULL", "K_SHORTEST", 
                      "K_SIMPLE", "K_TENSOR_DISTANCE", "K_REGEX", "K_RETURN", 
                      "K_SET", "K_SUM", "K_STRING", "K_STORE", "K_TENSOR", 
                      "K_TRUE", "K_TRAILS", "K_VALUES", "K_WALKS", "K_WHERE", 
                      "TRUE_PROP", "FALSE_PROP", "ANON_ID", "EDGE_ID", "KEY", 
                      "TYPE", "TYPE_VAR", "VARIABLE", "STRING", "UNSIGNED_INTEGER", 
                      "UNSIGNED_FLOAT", "UNSIGNED_SCIENTIFIC_NOTATION", 
                      "NAME", "LEQ", "GEQ", "EQ", "NEQ", "LT", "GT", "SINGLE_EQ", 
                      "PATH_SEQUENCE", "PATH_ALTERNATIVE", "PATH_NEGATION", 
                      "STAR", "PERCENT", "QUESTION_MARK", "PLUS", "MINUS", 
                      "L_PAR", "R_PAR", "LCURLY_BRACKET", "RCURLY_BRACKET", 
                      "LSQUARE_BRACKET", "RSQUARE_BRACKET", "COMMA", "COLON", 
                      "WHITE_SPACE", "SINGLE_LINE_COMMENT", "UNRECOGNIZED", 
                      "DIGIT", "EXPONENT", "A", "B", "C", "D", "E", "F", 
                      "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
                      "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MQLLexer.EOF = antlr4.Token.EOF;
MQLLexer.K_ACYCLIC = 1;
MQLLexer.K_AND = 2;
MQLLexer.K_ANGULAR = 3;
MQLLexer.K_ANY = 4;
MQLLexer.K_AS = 5;
MQLLexer.K_AVG = 6;
MQLLexer.K_ALL = 7;
MQLLexer.K_ASC = 8;
MQLLexer.K_BY = 9;
MQLLexer.K_BOOL = 10;
MQLLexer.K_COUNT = 11;
MQLLexer.K_CREATE = 12;
MQLLexer.K_DELETE = 13;
MQLLexer.K_DESCRIBE = 14;
MQLLexer.K_DESC = 15;
MQLLexer.K_DIMENSIONS = 16;
MQLLexer.K_DISTINCT = 17;
MQLLexer.K_EDGE = 18;
MQLLexer.K_EUCLIDEAN = 19;
MQLLexer.K_FROM = 20;
MQLLexer.K_INCOMING = 21;
MQLLexer.K_INSERT = 22;
MQLLexer.K_INTEGER = 23;
MQLLexer.K_INTO = 24;
MQLLexer.K_IS = 25;
MQLLexer.K_FALSE = 26;
MQLLexer.K_FLOAT = 27;
MQLLexer.K_GROUP = 28;
MQLLexer.K_LABELS = 29;
MQLLexer.K_LABEL = 30;
MQLLexer.K_LIMIT = 31;
MQLLexer.K_MANHATTAN = 32;
MQLLexer.K_MATCH = 33;
MQLLexer.K_MAX = 34;
MQLLexer.K_MIN = 35;
MQLLexer.K_OBJECTS = 36;
MQLLexer.K_OFFSET = 37;
MQLLexer.K_OPTIONAL = 38;
MQLLexer.K_ORDER = 39;
MQLLexer.K_OR = 40;
MQLLexer.K_OUTGOING = 41;
MQLLexer.K_PROPERTIES = 42;
MQLLexer.K_PROPERTY = 43;
MQLLexer.K_NOT = 44;
MQLLexer.K_NULL = 45;
MQLLexer.K_SHORTEST = 46;
MQLLexer.K_SIMPLE = 47;
MQLLexer.K_TENSOR_DISTANCE = 48;
MQLLexer.K_REGEX = 49;
MQLLexer.K_RETURN = 50;
MQLLexer.K_SET = 51;
MQLLexer.K_SUM = 52;
MQLLexer.K_STRING = 53;
MQLLexer.K_STORE = 54;
MQLLexer.K_TENSOR = 55;
MQLLexer.K_TRUE = 56;
MQLLexer.K_TRAILS = 57;
MQLLexer.K_VALUES = 58;
MQLLexer.K_WALKS = 59;
MQLLexer.K_WHERE = 60;
MQLLexer.TRUE_PROP = 61;
MQLLexer.FALSE_PROP = 62;
MQLLexer.ANON_ID = 63;
MQLLexer.EDGE_ID = 64;
MQLLexer.KEY = 65;
MQLLexer.TYPE = 66;
MQLLexer.TYPE_VAR = 67;
MQLLexer.VARIABLE = 68;
MQLLexer.STRING = 69;
MQLLexer.UNSIGNED_INTEGER = 70;
MQLLexer.UNSIGNED_FLOAT = 71;
MQLLexer.UNSIGNED_SCIENTIFIC_NOTATION = 72;
MQLLexer.NAME = 73;
MQLLexer.LEQ = 74;
MQLLexer.GEQ = 75;
MQLLexer.EQ = 76;
MQLLexer.NEQ = 77;
MQLLexer.LT = 78;
MQLLexer.GT = 79;
MQLLexer.SINGLE_EQ = 80;
MQLLexer.PATH_SEQUENCE = 81;
MQLLexer.PATH_ALTERNATIVE = 82;
MQLLexer.PATH_NEGATION = 83;
MQLLexer.STAR = 84;
MQLLexer.PERCENT = 85;
MQLLexer.QUESTION_MARK = 86;
MQLLexer.PLUS = 87;
MQLLexer.MINUS = 88;
MQLLexer.L_PAR = 89;
MQLLexer.R_PAR = 90;
MQLLexer.LCURLY_BRACKET = 91;
MQLLexer.RCURLY_BRACKET = 92;
MQLLexer.LSQUARE_BRACKET = 93;
MQLLexer.RSQUARE_BRACKET = 94;
MQLLexer.COMMA = 95;
MQLLexer.COLON = 96;
MQLLexer.WHITE_SPACE = 97;
MQLLexer.SINGLE_LINE_COMMENT = 98;
MQLLexer.UNRECOGNIZED = 99;

MQLLexer.WS_CHANNEL = 2;



