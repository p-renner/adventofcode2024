// Day 1

function part1(list1: number[], list2: number[]): number {
	list1.sort((a, b) => a - b);
	list2.sort((a, b) => a - b);

	return list1
		.map((_, i) => Math.abs(list1[i] - list2[i]))
		.reduce((acc, curr) => acc + curr, 0);
}

function part2(list1: number[], list2: number[]): number {
	const map = new Map<number, number>();

	list2.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

	return list1
		.map((num) => num * (map.get(num) || 0))
		.reduce((acc, curr) => acc + curr, 0);
}

const list1 = [
	39472, 41795, 66901, 49097, 56143, 95316, 12479, 44746, 75154, 11303, 34369,
	19787, 57355, 17649, 78041, 42025, 83962, 58852, 10900, 81682, 73646, 69559,
	11792, 16986, 64640, 72905, 49132, 60004, 83058, 56218, 42752, 53210, 97525,
	85200, 93134, 92436, 43282, 56561, 38517, 21394, 22870, 91081, 58106, 31335,
	32992, 38454, 33694, 18307, 34138, 30210, 25191, 47869, 51431, 59221, 67820,
	25286, 49630, 49512, 75253, 91755, 84331, 10777, 44531, 44387, 22092, 62647,
	73962, 70872, 41669, 36394, 86666, 94564, 86975, 80625, 60822, 70000, 22902,
	14424, 49549, 98327, 16200, 75176, 87545, 52574, 89909, 59362, 31396, 23097,
	16639, 88531, 96093, 66284, 66985, 49619, 15828, 64988, 21667, 74847, 80596,
	63472, 38623, 38050, 57186, 32231, 53056, 99616, 44092, 28177, 43152, 63504,
	82199, 16827, 12662, 15202, 11297, 75181, 82671, 27416, 32617, 32093, 43092,
	98048, 33815, 49197, 72360, 12218, 79339, 55769, 24748, 73771, 33005, 53234,
	35799, 67715, 39385, 80517, 23083, 35643, 20015, 54047, 90892, 83304, 52334,
	22737, 44841, 54440, 59337, 86226, 79865, 92432, 16492, 77422, 93057, 27428,
	91111, 16734, 92704, 71080, 79064, 21521, 14447, 88341, 13881, 98689, 96688,
	83204, 30155, 79383, 66777, 79365, 38302, 59476, 12235, 79638, 12734, 26482,
	53709, 78983, 56875, 34652, 47807, 20838, 77644, 91040, 19857, 37257, 84323,
	45765, 80010, 50993, 87739, 21074, 21486, 85062, 64425, 46875, 77011, 16732,
	63302, 96936, 54563, 32946, 57558, 77371, 70922, 34893, 20064, 42298, 50286,
	37070, 25648, 72425, 70118, 43832, 40026, 20922, 85906, 62704, 14096, 27162,
	93880, 61173, 73917, 95980, 89429, 95730, 99893, 87309, 74425, 96310, 76188,
	50165, 80206, 64022, 65510, 71848, 79418, 52569, 89371, 68344, 19148, 83338,
	15292, 50026, 46923, 65318, 84727, 12709, 49025, 45423, 71561, 70652, 49677,
	87744, 68616, 56750, 27368, 96635, 82682, 49305, 57058, 71872, 37337, 49141,
	58652, 68121, 15655, 62826, 21376, 90582, 15256, 75807, 25162, 20898, 92171,
	32584, 68026, 89047, 77634, 76187, 34375, 17970, 73342, 88262, 85191, 13235,
	84522, 24204, 50892, 73708, 20453, 17601, 72728, 53568, 51327, 32562, 57528,
	65476, 87452, 27996, 20039, 46643, 52888, 78679, 40854, 83512, 40653, 15653,
	24606, 31608, 15608, 44105, 51928, 33215, 13283, 99082, 52093, 61555, 42163,
	70384, 68901, 45947, 43211, 49277, 34180, 92846, 79167, 20193, 20458, 32126,
	66236, 12738, 44729, 69671, 83285, 56016, 99469, 93215, 25585, 53706, 87427,
	46185, 36420, 75640, 62041, 29681, 52824, 89079, 99760, 96415, 63171, 29436,
	83447, 75739, 82453, 84569, 21534, 12101, 77859, 52861, 35871, 42076, 27769,
	42055, 15647, 71930, 64803, 57132, 86112, 32257, 65077, 26467, 16903, 90305,
	40337, 88470, 25305, 96579, 79525, 41786, 67337, 18437, 24149, 90518, 61117,
	47404, 70455, 42695, 32127, 71650, 25690, 99806, 46357, 74131, 47895, 26468,
	41393, 70792, 64983, 14730, 67663, 79374, 69026, 22680, 71431, 77808, 22211,
	98616, 92938, 89127, 51477, 90677, 59730, 98858, 30238, 75429, 27930, 14348,
	16626, 71073, 41699, 97130, 17234, 19638, 32507, 70053, 74550, 32214, 58219,
	94952, 33006, 47639, 40240, 25466, 91357, 34918, 36904, 82039, 83050, 33904,
	49071, 29378, 31555, 10652, 38017, 61056, 14038, 23926, 87700, 27680, 17606,
	71665, 73591, 75931, 45829, 11852, 82002, 18278, 76392, 12128, 39019, 29212,
	70049, 97782, 93518, 24972, 79331, 53946, 29692, 90018, 80392, 36656, 71114,
	58048, 41279, 52537, 33546, 70780, 36455, 87797, 21614, 87965, 84530, 31327,
	18367, 64436, 20247, 33510, 38591, 26569, 95619, 75902, 13377, 67381, 33665,
	49639, 41023, 25245, 88275, 86587, 77709, 49679, 84751, 89970, 35926, 29813,
	37865, 16156, 27868, 77973, 22695, 58595, 95239, 71032, 91716, 78993, 99915,
	97751, 85502, 50198, 63219, 65281, 59926, 90344, 84508, 11497, 23204, 23323,
	59901, 40780, 86228, 15570, 30888, 13324, 69364, 95308, 60190, 99873, 14117,
	93167, 31214, 63953, 16764, 53411, 23762, 62056, 72495, 77818, 87870, 38763,
	95817, 73572, 86836, 67571, 84424, 38842, 25252, 52969, 75457, 15405, 85810,
	52562, 26458, 57049, 92406, 71405, 13004, 26183, 57431, 49655, 61580, 50127,
	22900, 82172, 64722, 20817, 29505, 83118, 11609, 91300, 12871, 76642, 59612,
	22493, 97865, 38509, 62726, 97473, 11612, 22478, 78811, 57737, 96232, 97572,
	82900, 19759, 72856, 96772, 23639, 51369, 57419, 26364, 75781, 18008, 90125,
	28428, 33799, 81411, 32078, 79975, 52755, 57264, 64517, 73224, 35194, 56603,
	19967, 77598, 48288, 59468, 47471, 92962, 33647, 40482, 54705, 68436, 83774,
	50181, 46534, 73109, 14691, 45203, 93717, 90942, 93639, 43230, 35162, 99850,
	86446, 83395, 34567, 38120, 43847, 18314, 35219, 57034, 65653, 63354, 57162,
	82266, 12486, 95955, 84375, 86891, 30860, 39153, 60323, 54199, 56072, 93245,
	76450, 59767, 68416, 37507, 95599, 26535, 24134, 44403, 98864, 65407, 79131,
	13530, 65218, 25382, 92220, 85985, 70302, 64121, 67721, 23443, 84136, 63440,
	53644, 55702, 38805, 85325, 23500, 69804, 84397, 27004, 37093, 96090, 94277,
	75959, 14695, 21277, 25052, 62281, 28206, 61780, 43950, 77501, 73366, 24723,
	18309, 88351, 32451, 27961, 15868, 83064, 68951, 97293, 56831, 80363, 33684,
	10701, 42064, 69486, 47015, 29202, 82115, 95165, 57418, 67506, 58868, 74165,
	30214, 83623, 17331, 30459, 67434, 40727, 61581, 33819, 49763, 97486, 26812,
	12336, 18378, 84937, 35224, 49694, 49529, 18201, 74497, 68037, 36953, 85485,
	88430, 71498, 60128, 96672, 64061, 59825, 74366, 41534, 87667, 10150, 44315,
	14678, 72111, 58956, 69294, 20619, 37843, 29529, 19702, 32072, 50568, 51287,
	94333, 18585, 23789, 46594, 79106, 41356, 10594, 11595, 98318, 13672, 13257,
	72928, 93735, 53663, 58872, 65915, 75718, 38451, 35425, 12378, 91509, 56599,
	44971, 21719, 20336, 18110, 99088, 85957, 32492, 43009, 70212, 34312, 61916,
	51817, 72892, 32753, 54502, 39127, 13434, 44413, 32900, 65505, 83501, 50906,
	61014, 95454, 77008, 58087, 69905, 37788, 31700, 78758, 60428, 82953, 57964,
	11094, 64195, 52961, 36007, 75733, 25387, 11537, 60140, 45111, 99999, 63747,
	20625, 92339, 24864, 26017, 57414, 63707, 88020, 37973, 30076, 52584, 49038,
	61582, 21115, 67207, 74877, 44094, 41244, 84493, 61793, 28185, 18529, 53238,
	56830, 42491, 44708, 54024, 81496, 23812, 86480, 68399, 35185, 37233, 75966,
	54671, 39056, 55159, 70822, 43695, 46035, 44197, 72777, 36610, 69757, 87912,
	34679, 34931, 93254, 64175, 87296, 94232, 93856, 44368, 93430, 51742, 37653,
	83663, 28522, 94057, 64826, 42079, 79925, 74592, 20675, 65728, 92462, 23381,
	44104, 48953, 37678, 63422, 49735, 85048, 19402, 86874, 73564, 74511, 17917,
	53604, 13699, 42901, 64254, 42770, 96114, 93782, 57646, 46334, 63175, 98847,
	15551, 91269, 42322, 99400, 29079, 51358, 57109, 75643, 50779, 68902, 91483,
	72751, 22226, 30515, 44941, 60907, 96158, 58058, 20085, 78405, 47918, 76270,
	60874, 74798, 89867, 21013, 50155, 96922, 73275, 85392, 69178, 26665, 41944,
	48235, 74950, 60869, 19317, 28433, 27814, 62468, 71778, 19383, 74225, 45257,
	37807, 66601, 32475, 65861, 65154, 32341, 43126, 81648, 93016, 37226, 24429,
	35226, 95560, 77626, 16841, 94072, 49716, 69498, 77092, 51658, 99436, 56787,
	53173, 42871, 39206, 52384, 19944, 74914, 65918, 38226, 86853, 18560,
];

const list2 = [
	15292, 28867, 41393, 61173, 52888, 12022, 41393, 54563, 45829, 70489, 42303,
	10318, 54563, 78041, 90912, 70838, 27416, 60140, 78041, 86361, 59340, 52888,
	37020, 60140, 99547, 79616, 68436, 25440, 36384, 51713, 85502, 25564, 46775,
	81707, 17917, 29703, 26102, 17917, 60140, 11537, 56891, 75176, 60279, 96310,
	60140, 54563, 74901, 90620, 37678, 35783, 15227, 11537, 99893, 57034, 46594,
	65918, 64107, 23996, 19155, 44731, 14322, 45829, 31325, 44368, 78828, 74552,
	61652, 38663, 17917, 39664, 32126, 71364, 65813, 26674, 44368, 88293, 68436,
	12070, 76372, 15292, 41393, 59283, 56534, 42041, 82203, 25776, 65918, 67302,
	73771, 61423, 57034, 27416, 80547, 82916, 96310, 54786, 65918, 53532, 74328,
	77634, 37355, 77634, 77092, 96310, 85502, 27723, 39113, 73886, 71052, 85873,
	13631, 95980, 94593, 19317, 44368, 23789, 11537, 28613, 17917, 56597, 81496,
	38603, 94399, 75323, 38805, 57034, 25820, 11065, 33341, 85800, 51346, 37678,
	99893, 72495, 60140, 67721, 27416, 34652, 85084, 68436, 27416, 45829, 42025,
	48971, 85502, 88682, 44466, 44368, 23789, 25313, 46594, 38673, 23789, 87965,
	85502, 96310, 91204, 32126, 38805, 98343, 42025, 78869, 64574, 57609, 20324,
	66011, 78041, 57771, 42501, 29078, 85502, 41393, 97187, 13709, 77092, 96310,
	38414, 68436, 32126, 79445, 44368, 37678, 42695, 34471, 38805, 19299, 45829,
	27807, 17917, 17917, 17917, 83774, 65838, 65414, 60832, 72398, 94090, 14509,
	48158, 81496, 77092, 37678, 40189, 20945, 27416, 44368, 61173, 26409, 87965,
	28219, 15174, 49204, 23789, 54563, 23789, 60128, 96310, 75007, 81496, 56750,
	67721, 16445, 75176, 77092, 38668, 32268, 54563, 76137, 11641, 90444, 96310,
	37678, 36550, 73771, 95980, 87965, 95980, 85502, 99893, 73771, 81496, 34652,
	64493, 85502, 42025, 36031, 65918, 19317, 13484, 65918, 56750, 95980, 67721,
	15824, 77092, 98610, 15292, 72495, 86884, 22888, 76493, 15292, 99893, 27416,
	59221, 59924, 27416, 52888, 13478, 73415, 83645, 77837, 67721, 69247, 40775,
	57034, 65918, 81496, 16657, 67862, 68115, 36680, 11537, 68436, 41393, 74763,
	26546, 83774, 44388, 45829, 35352, 54563, 31817, 77092, 87796, 45829, 73771,
	62414, 38805, 67569, 42216, 62818, 37678, 89549, 47456, 83774, 19984, 87965,
	28934, 43847, 87965, 78041, 21069, 11537, 56032, 34188, 96310, 22523, 59313,
	21347, 14849, 68914, 17917, 42695, 83406, 50278, 38805, 77092, 44368, 81496,
	83382, 28293, 99893, 86850, 58736, 96747, 68436, 19776, 44206, 83774, 59088,
	56750, 42025, 12667, 58764, 37678, 41716, 32126, 84744, 38301, 23789, 16140,
	73771, 11537, 65918, 65918, 77172, 74770, 42695, 85502, 21725, 39498, 65918,
	60140, 46042, 43847, 48360, 72709, 88764, 35904, 15267, 43122, 22211, 42025,
	91440, 45958, 98303, 89051, 73920, 95980, 20284, 60448, 18786, 60165, 68317,
	89642, 43847, 30003, 63953, 35205, 60128, 68436, 39579, 46594, 47800, 43847,
	15292, 96310, 72495, 75176, 97315, 31240, 83411, 23789, 27416, 21074, 70174,
	17996, 38805, 85502, 87965, 99208, 77092, 84528, 83774, 87965, 37678, 52888,
	68436, 65918, 44368, 26865, 64748, 73771, 38805, 43714, 11537, 89987, 74181,
	15292, 61173, 45559, 72346, 73771, 54563, 44368, 57034, 60128, 27542, 36886,
	77634, 68436, 17917, 44368, 98107, 61173, 22737, 14836, 17917, 67320, 20744,
	38805, 90610, 23789, 13721, 62648, 43847, 11819, 78041, 92298, 24002, 78830,
	96310, 75559, 42025, 68164, 82197, 63209, 36006, 47044, 94377, 49166, 96458,
	34652, 38805, 41393, 39103, 60140, 62146, 11284, 83774, 65918, 87965, 60140,
	73575, 15292, 99322, 34652, 60472, 34652, 32751, 15292, 27416, 85502, 27308,
	27416, 11537, 21668, 89008, 90992, 68436, 89471, 42695, 60140, 60128, 42025,
	72495, 60194, 76472, 75176, 79830, 56952, 96639, 95980, 75176, 43847, 98469,
	11537, 60039, 68602, 28654, 95499, 63079, 17917, 68436, 53277, 60128, 44368,
	82429, 54563, 77092, 92416, 63270, 60221, 15292, 87722, 92919, 76986, 75176,
	42025, 26740, 75176, 87965, 18481, 20430, 95980, 72495, 55142, 41393, 72435,
	27379, 71492, 15292, 55135, 68436, 33961, 99893, 60128, 98187, 56750, 34652,
	40472, 87835, 12947, 43679, 15292, 24537, 19467, 44368, 87965, 52775, 68060,
	37678, 73771, 44368, 27416, 94508, 42025, 73771, 50758, 69985, 85502, 45829,
	21789, 28573, 42695, 22786, 60140, 72495, 94640, 58753, 91274, 94576, 81557,
	32111, 70364, 63532, 39170, 34568, 85502, 77634, 26509, 74064, 75570, 23030,
	38805, 68436, 99893, 27808, 83566, 69516, 49914, 17917, 32126, 46594, 22108,
	84231, 41393, 85502, 85296, 60128, 87965, 54992, 83774, 45831, 40140, 16001,
	56750, 37678, 83774, 72139, 18499, 41393, 61173, 96310, 81496, 81496, 74025,
	27902, 77092, 42695, 75176, 15292, 93498, 43847, 68631, 31365, 20793, 43136,
	44368, 98890, 63953, 34652, 38805, 34652, 72495, 23789, 15292, 56750, 57078,
	43847, 54737, 85814, 52294, 37678, 82789, 75314, 73771, 37678, 46261, 19317,
	17917, 14610, 22670, 75176, 59377, 24147, 64263, 96310, 43847, 34307, 59221,
	63953, 45127, 68295, 50302, 28669, 52427, 22809, 85502, 29693, 45829, 65918,
	20621, 69851, 99893, 65918, 23789, 11537, 38805, 43399, 40253, 47747, 53159,
	29185, 87965, 87965, 82138, 23052, 81496, 11537, 50439, 57301, 47574, 60128,
	20752, 36397, 96133, 99893, 42695, 23789, 52036, 47142, 38805, 87965, 44368,
	83774, 17917, 68436, 14907, 65918, 90836, 93472, 63953, 86280, 67721, 33295,
	43847, 73771, 99191, 65918, 27416, 78672, 35773, 46594, 34652, 68436, 92527,
	99893, 83659, 23848, 27416, 79790, 54563, 68436, 11537, 21591, 75176, 45829,
	42695, 96310, 23680, 42025, 57034, 27416, 27615, 83774, 14710, 11537, 85502,
	32126, 34938, 61804, 77092, 26759, 96103, 81496, 59026, 49115, 15783, 42025,
	26741, 52496, 34203, 52888, 99893, 58779, 39438, 27416, 93586, 97927, 27778,
	57034, 65918, 93128, 46594, 60128, 97300, 42695, 96238, 31422, 11537, 42723,
	11537, 90401, 99893, 62779, 48368, 51199, 20326, 68436, 83774, 87965, 36556,
	44368, 75176, 41393, 75176, 93067, 59221, 42326, 15292, 95980, 34652, 63113,
	96310, 19317, 80659, 54563, 54563, 76167, 65918, 17917, 15292, 67189, 11537,
	43214, 10979, 38805, 79424, 95980, 17917, 54563, 29335, 87838, 65918, 25377,
	83162, 86682, 68436, 15341, 99893, 26837, 97732, 97981, 67721, 23789, 80962,
	34020, 37938, 77092, 23873, 20953, 37678, 44368, 47559, 75176, 33363, 83774,
	15292, 21920, 60140, 21845, 56792, 37430, 81496, 99476, 97933, 15287, 83774,
	83581, 15292, 71634, 45693, 75176, 17596, 68436, 15292, 11537, 31698, 85502,
	94306, 93651, 22959, 94855, 99893, 26385, 25770, 72495, 50739, 59954, 77025,
	65121, 81496, 46594, 89239, 35632, 71538, 81496, 45829, 45829, 64584, 29104,
	13639, 12819, 71544, 65918, 45829, 44368, 56750, 90086, 49872, 54563, 47091,
	22124, 83774, 96310, 32126, 65918, 42025, 22211, 19675, 42100, 61940, 15861,
	95639, 75719, 37678, 94189, 78041, 41829, 99893, 37678, 88266, 87965, 42402,
	87102, 23789, 43847, 95168, 73771, 60329, 54563, 98615, 91775, 49635, 41525,
	82994, 61557, 73771, 15074, 68991, 90764, 41393, 92876, 57314, 72460, 55015,
	73771, 11537, 68436, 35241, 35982, 11537, 99893, 91534, 63953, 43847, 17917,
	99893, 75176, 32126, 37678, 18811, 15715, 94453, 88716, 41708, 76299, 27416,
	83774, 37678, 43847, 37678, 42936, 19845, 67721, 56750, 74909, 15292,
];

console.log(part1(list1, list2));
console.log(part2(list1, list2));
