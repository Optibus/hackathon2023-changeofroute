import MapContainer from "./components/MapContainer";

const MapExample = () => (
  <MapContainer
    stops={[
      {
        name: "foo",
        id: "foo",
        color: "#007cbf",
        geometry: {
          type: "Point",
          coordinates: [34.788821, 32.070659],
        },
      },
    ]}
    cancelledStops={[
      {
        name: "foo",
        id: "foo",
        color: "#007cbf",
        geometry: {
          type: "Point",
          coordinates: [34.792059484307686, 32.076675838114674],
        },
      },
    ]}
    routes={[
      {
        name: "foo",
        color: "#A7FFDA",
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [34.746882796560442, 32.00234535986602],
              [34.747218801341297, 32.002849355569928],
              [34.747676807014336, 32.00353035101454],
              [34.748008812025752, 32.003985347202978],
              [34.748334816279524, 32.004539343785538],
              [34.748753825030768, 32.00539933812329],
              [34.749026829349326, 32.0059193349392],
              [34.749747842005839, 32.007340325334233],
              [34.751545874543893, 32.010873302993573],
              [34.752638894209461, 32.013014289667751],
              [34.752977900082477, 32.013691284736637],
              [34.753070902455718, 32.013927283308213],
              [34.753152904576758, 32.014175282556877],
              [34.753196907593185, 32.014501280954207],
              [34.753211909081074, 32.014754280281061],
              [34.753167910849825, 32.014923280110388],
              [34.753089911472266, 32.015051279560311],
              [34.752962912051942, 32.015171280544507],
              [34.752290913218971, 32.015448283061673],
              [34.75186191460061, 32.015617285369949],
              [34.750872916383834, 32.016010290275119],
              [34.750594916181541, 32.016113291831225],
              [34.750336917281196, 32.016200292571511],
              [34.750102916777095, 32.016245293713546],
              [34.749814916575794, 32.016299295577035],
              [34.749074917145137, 32.01640729926568],
              [34.748411916750541, 32.016456303143883],
              [34.747797915254118, 32.016502307469729],
              [34.7474229158111, 32.016564308773276],
              [34.746949915355131, 32.016671311328764],
              [34.746048916700616, 32.016964316039491],
              [34.745667917514247, 32.017096317632543],
              [34.745424917714075, 32.017196318690679],
              [34.745273918498597, 32.017270319960133],
              [34.745122919046423, 32.017344320144936],
              [34.744746920322385, 32.017547321942473],
              [34.744430920893265, 32.017758323660047],
              [34.744205922128394, 32.017915324347364],
              [34.744069923125949, 32.018010324615645],
              [34.74398692290012, 32.018068325302004],
              [34.743855923810898, 32.018171325286133],
              [34.743791924703039, 32.018258325367107],
              [34.743772925251257, 32.018357324955637],
              [34.743786926366226, 32.018448324644154],
              [34.743845927103308, 32.018572323968506],
              [34.743957929953964, 32.01883232259064],
              [34.74399693122156, 32.01898132185049],
              [34.743996931496184, 32.019084321372539],
              [34.743971932605568, 32.019212320790494],
              [34.743667937284386, 32.019844320572005],
              [34.74343594262259, 32.020555319786901],
              [34.743372944815881, 32.020836319331309],
              [34.74335294746021, 32.02110431889048],
              [34.743303953533342, 32.021803316335912],
              [34.743249959286686, 32.022539314195853],
              [34.743205964438445, 32.023130312580562],
              [34.743181966794495, 32.023439312009614],
              [34.743176968250218, 32.023687310958898],
              [34.743225971010745, 32.024001309412242],
              [34.743274974421524, 32.024365307865502],
              [34.743288976813211, 32.024617307712255],
              [34.743283979823246, 32.024960306224507],
              [34.743259982888183, 32.0253443051636],
              [34.743195991665516, 32.026418302209464],
              [34.743190992241161, 32.026509301271851],
              [34.743229992555527, 32.026584301119307],
              [34.74328399335046, 32.026650300588472],
              [34.743366993802056, 32.026691299520046],
              [34.743512994177529, 32.026716298723102],
              [34.743868994758671, 32.026737296525894],
              [34.744443996004577, 32.026770292794957],
              [34.745208998224733, 32.026798288009083],
              [34.745520998356632, 32.026819286842382],
              [34.746069000077718, 32.026903282745913],
              [34.747071003181702, 32.02707527598826],
              [34.747734005022821, 32.027191272050359],
              [34.747904005706658, 32.027237270685497],
              [34.748055005792793, 32.027294269337553],
              [34.748261007698531, 32.027397267866469],
              [34.748417008291632, 32.027496266241172],
              [34.748573009394235, 32.027633265163288],
              [34.748753011433585, 32.02784326387723],
              [34.749036015601725, 32.02822826038966],
              [34.749363019445042, 32.028703257299775],
              [34.749650023478196, 32.029108254154728],
              [34.749933027458312, 32.029468250880498],
              [34.750514033822498, 32.03017624542737],
              [34.750795036982716, 32.030538242241711],
              [34.750868038509331, 32.030658240998996],
              [34.751020040451969, 32.030890239275479],
              [34.751107042180273, 32.031055238811099],
              [34.751185044198103, 32.031241237765343],
              [34.751239045093115, 32.03141423628017],
              [34.751414053170677, 32.032286232372115],
              [34.751511056893513, 32.032769230128451],
              [34.751570059837206, 32.033038228819706],
              [34.751638061853363, 32.033382227577427],
              [34.751731066151393, 32.033828225524708],
              [34.751760066842415, 32.033948225322256],
              [34.751833068349036, 32.034117224273565],
              [34.751921069842837, 32.034291223060094],
              [34.75201307151162, 32.034477221803577],
              [34.752083072836037, 32.034610221094923],
              [34.752218074660021, 32.034819219152503],
              [34.752355077020475, 32.035006217715001],
              [34.752515078891875, 32.035167216424405],
              [34.752725080297914, 32.035349214609795],
              [34.752866081434107, 32.035452213021799],
              [34.753022082486204, 32.035559211839526],
              [34.753305084739743, 32.03570820990479],
              [34.753524085282159, 32.035803208449046],
              [34.754197088362325, 32.036022203134202],
              [34.754431089204004, 32.036134201704925],
              [34.754592090109071, 32.036233200295854],
              [34.754714092053142, 32.036332199223324],
              [34.754855092818232, 32.03646419802503],
              [34.754987094866699, 32.036634196126926],
              [34.755099096590406, 32.036824195334603],
              [34.75545510434921, 32.037754189877738],
              [34.755664109147702, 32.038295186491965],
              [34.755869114455606, 32.038808184113932],
              [34.756042117561591, 32.039238181622906],
              [34.757137144373409, 32.042234164959922],
              [34.75732714995798, 32.042837161951866],
              [34.757503154232012, 32.043353159253236],
              [34.757678158003877, 32.043816156173719],
              [34.758146169222002, 32.044994149657086],
              [34.758249171066609, 32.045225147622155],
              [34.758317172593664, 32.045399147141481],
              [34.758370174667213, 32.045659145625017],
              [34.758424178899872, 32.046101143834655],
              [34.758707195870038, 32.048126135591218],
              [34.758838205121315, 32.04913813148697],
              [34.759014214609287, 32.050337126697514],
              [34.759550249714273, 32.054387109579423],
              [34.759736261374961, 32.055747104204464],
              [34.759853268061917, 32.056561100193747],
              [34.759906273663397, 32.057185098533971],
              [34.759931275369539, 32.057457097061985],
              [34.759941276472077, 32.057544096386486],
              [34.760009277818625, 32.057643096352393],
              [34.760082278610632, 32.057717095414262],
              [34.760160278710146, 32.057775094342631],
              [34.7602772796808, 32.057821093608482],
              [34.760462280364393, 32.057858092153161],
              [34.760989281838079, 32.057941089478753],
              [34.761598283295747, 32.058036085445863],
              [34.762057284042562, 32.058106082161942],
              [34.763061289214995, 32.058474074302424],
              [34.763865293233124, 32.058788068406365],
              [34.764450295554639, 32.059015064373966],
              [34.764908297714236, 32.05925506114886],
              [34.765235300731156, 32.059441058477297],
              [34.765951305351216, 32.059916052218192],
              [34.766585310227349, 32.060329047247755],
              [34.76705831298591, 32.06058104314387],
              [34.767331313545242, 32.060689041227839],
              [34.767633315189101, 32.060793039147889],
              [34.767863316538048, 32.060859037540695],
              [34.768077316596013, 32.060908035762047],
              [34.768297317388935, 32.06095403507809],
              [34.76854531840285, 32.060983033266389],
              [34.768838318941114, 32.061016030895424],
              [34.769174319812834, 32.061036029234927],
              [34.769428320324593, 32.061065027366439],
              [34.769832321151064, 32.061094024583781],
              [34.770247321626506, 32.061123022130786],
              [34.770666322236501, 32.061156019733971],
              [34.770998323026411, 32.061181018019276],
              [34.771217323858124, 32.061210016400437],
              [34.771505324475683, 32.061259013808659],
              [34.77171932591208, 32.061309013198517],
              [34.771905325748655, 32.061363011691476],
              [34.772065327249713, 32.061408010609725],
              [34.772300327929671, 32.061507008262048],
              [34.77254432871316, 32.061598006603027],
              [34.772768330665428, 32.061693005236258],
              [34.773285332266006, 32.06189600094627],
              [34.773992336516301, 32.062192996239325],
              [34.774265338355846, 32.062324994138351],
              [34.774513339695808, 32.06245699230525],
              [34.775159343695393, 32.062833986676971],
              [34.775694346961124, 32.063142982329026],
              [34.776020349170672, 32.063345979753052],
              [34.776191350077987, 32.063431978143043],
              [34.776361351175822, 32.063498977592474],
              [34.776561351889043, 32.063564976124582],
              [34.77675635222667, 32.063605974238087],
              [34.776903352366453, 32.063630973756943],
              [34.777059352916595, 32.063655972800177],
              [34.777249353460185, 32.06366797152323],
              [34.777410353337814, 32.063667970393944],
              [34.777580353640204, 32.063659969828144],
              [34.777775354393647, 32.063646968011163],
              [34.777970354748348, 32.063626967089355],
              [34.778224354208994, 32.063601965493348],
              [34.778443355089252, 32.063584964565401],
              [34.778736355297887, 32.063560962372094],
              [34.778892354848104, 32.063551961619716],
              [34.779048355546969, 32.063539961320537],
              [34.779185355387192, 32.063531960538803],
              [34.779370355331857, 32.0635279586539],
              [34.779570355858702, 32.063531957889722],
              [34.779726356139477, 32.063539956686107],
              [34.779857356599322, 32.063559955536093],
              [34.780062357582814, 32.063605954556316],
              [34.780267357990986, 32.063667952828951],
              [34.780467358897134, 32.063741951317667],
              [34.780725359830654, 32.063849949801401],
              [34.780949361588505, 32.063985947492256],
              [34.781086362008899, 32.064051946574153],
              [34.781305364226327, 32.064187944969625],
              [34.781568365677451, 32.064336943058713],
              [34.781910367840482, 32.06454793979163],
              [34.78224636996373, 32.064803937551069],
              [34.782500372002836, 32.06499793468037],
              [34.782861375997406, 32.065311931611248],
              [34.784002385291444, 32.066249921648705],
              [34.784684390718596, 32.066827916058891],
              [34.785508398447497, 32.067513908649765],
              [34.785718399952955, 32.067695907007483],
              [34.786098403243734, 32.068013902815132],
              [34.786405405809923, 32.068265900753893],
              [34.786761408502535, 32.068559897178126],
              [34.787108410980309, 32.068848894088092],
              [34.787356413266934, 32.069054892505925],
              [34.787678416921267, 32.06934888895691],
              [34.78844842504504, 32.070203881499751],
              [34.788872429631866, 32.070670877467869],
              [34.789184432965826, 32.071029874433599],
              [34.789365434446466, 32.071248872257804],
              [34.789496436943203, 32.071417871318694],
              [34.789608438591749, 32.071595870130096],
              [34.789740440502229, 32.071822868179609],
              [34.789843442446617, 32.072025867426277],
              [34.789945444670018, 32.07226486550848],
              [34.790077446873468, 32.07256286388521],
              [34.790164448411375, 32.072781862401264],
              [34.791175470029501, 32.075139848552496],
              [34.791349473019515, 32.075467846197512],
              [34.791510475927524, 32.075748844096196],
              [34.791690478288466, 32.076038842228009],
              [34.79205948414431, 32.076675838503604],
              [34.792237487606144, 32.076976835677478],
              [34.792451490923092, 32.077360833204615],
              [34.792656493799896, 32.077716831178606],
              [34.79277849542143, 32.077926829848593],
              [34.792919497773127, 32.0781628283071],
              [34.79304149943458, 32.078368826374486],
              [34.793188502586375, 32.078620824632189],
              [34.793373504952072, 32.078930822900531],
              [34.793480507029152, 32.079112821219169],
              [34.793651509743739, 32.079406819184861],
              [34.793777511041263, 32.079616818105919],
              [34.793904513847203, 32.079835816399324],
              [34.79400751486962, 32.080001815262186],
              [34.794109516895105, 32.080174814103287],
              [34.794197517375672, 32.080290813176461],
              [34.794260518546366, 32.080377812649424],
              [34.794382519867234, 32.080513811553629],
              [34.79448452053839, 32.080637810428875],
              [34.794616521989624, 32.080765809224538],
              [34.794753523811814, 32.080876807279346],
              [34.794865524466729, 32.080951806971299],
              [34.794977524641261, 32.081029805915556],
              [34.795128526413343, 32.081112804955445],
              [34.795279526378614, 32.081190803385454],
              [34.795430527928985, 32.081257802510862],
              [34.79556752827272, 32.081319800932832],
              [34.795723529452836, 32.081372800229481],
              [34.796547532606276, 32.081607794088356],
              [34.79847453992349, 32.082162780934311],
              [34.799649544904007, 32.082513772455869],
              [34.800005546293669, 32.082612769954338],
              [34.800219546468128, 32.082662768270083],
              [34.800536547759442, 32.082736766660744],
              [34.800775548547783, 32.082769764751575],
              [34.801029548771687, 32.082810763043973],
              [34.801317550013906, 32.08284376104011],
              [34.80156055063587, 32.082864759441627],
              [34.801848550717253, 32.082893757692233],
              [34.802379552153759, 32.08294275474401],
              [34.802745552482328, 32.08297575264897],
              [34.803228553956245, 32.083013749003946],
              [34.803457553899463, 32.083033748038886],
              [34.80369155545835, 32.083062746114599],
              [34.804038555551926, 32.083095744206055],
              [34.804330556670358, 32.083116742474353],
              [34.804569556680185, 32.083149740629587],
              [34.804818557955024, 32.083182739224625],
              [34.805037558400791, 32.083223737211192],
              [34.805379559519025, 32.083310734896706],
              [34.805686560983617, 32.083393732975232],
              [34.805940562199176, 32.083463731122549],
              [34.806305563346029, 32.083566728785499],
              [34.806529563922702, 32.083628727271801],
              [34.806778564712907, 32.083699725254618],
              [34.807032565865306, 32.083765723582196],
              [34.80731556744491, 32.083847721699705],
              [34.80767156862963, 32.083946719344986],
              [34.807939569810358, 32.084025717528377],
              [34.808383571710579, 32.08416571433262],
              [34.808704572806299, 32.084269711894521],
              [34.808914573690153, 32.084347709790272],
              [34.809119574989303, 32.084446708854081],
              [34.809329576230454, 32.084562706593275],
              [34.809612577877935, 32.084748704834723],
              [34.809792578716163, 32.084864702983573],
              [34.809934580315485, 32.084992701694439],
              [34.810114582014961, 32.085145699830029],
              [34.810295583279888, 32.085315698657773],
              [34.810480585946081, 32.085505696942086],
              [34.81069458723011, 32.085715694814205],
              [34.810880589528388, 32.085901693474106],
              [34.811065590913167, 32.086079691678314],
              [34.811260592917797, 32.086244689789474],
              [34.811470594570366, 32.086410688227701],
              [34.812880604675016, 32.087327675905364],
              [34.813733610569209, 32.087865669092594],
              [34.814104612438243, 32.088104666268841],
              [34.814328614665122, 32.088245664016675],
              [34.814572615374573, 32.088410662735193],
              [34.814757616884343, 32.088505661126504],
              [34.814948617507419, 32.088592658981405],
              [34.815143619378858, 32.088679658025058],
              [34.81530461989977, 32.088736657085946],
              [34.815494620501262, 32.088807655101604],
              [34.815757621673463, 32.088885653812994],
              [34.816835624855464, 32.089141645880638],
              [34.817873628904053, 32.089389638610079],
              [34.818122629794722, 32.089459636809849],
              [34.818347631323036, 32.089546635855349],
              [34.818790632561885, 32.089716632735517],
              [34.819254635430376, 32.08992662859724],
              [34.819580637587208, 32.090063626588176],
              [34.81987363920279, 32.090195624127233],
              [34.820049639068252, 32.090261622892825],
              [34.820229639740027, 32.090319621149028],
              [34.820458640764386, 32.090381620152968],
              [34.820692641763884, 32.090439618222938],
              [34.821068643259302, 32.090517615480778],
              [34.821395644114183, 32.090592613791742],
              [34.821843645511287, 32.090687610584006],
              [34.823619651177509, 32.0910675987625],
              [34.825043656401512, 32.091373588562845],
              [34.826633661498711, 32.091716578336168],
              [34.826872661997477, 32.091745576561962],
              [34.8271166626105, 32.091774574804631],
              [34.827306663203061, 32.091782574142826],
              [34.827648662935538, 32.091776571579729],
              [34.827881664004565, 32.091766570190515],
              [34.828052663984103, 32.091737569196198],
              [34.828925663532694, 32.091609564162226],
              [34.82936966429574, 32.091551561816679],
              [34.829627664623636, 32.091522560185808],
              [34.829939664606023, 32.091509558547941],
              [34.830193664832763, 32.091514556747896],
              [34.83068166607449, 32.091559554200622],
              [34.831037666645912, 32.091621551710219],
              [34.831500669110127, 32.091745548471899],
              [34.831934670799797, 32.091898545491567],
              [34.832159672070993, 32.091977543726927],
              [34.832378673249551, 32.092059542229087],
              [34.832612674090349, 32.092126540728252],
              [34.832793674943943, 32.092196538653027],
              [34.833051675898446, 32.09226653758131],
              [34.833359676512934, 32.092338534762064],
              [34.834510679706568, 32.092530527392881],
              [34.835163682133967, 32.092638523155593],
              [34.835900683870392, 32.09274951858113],
              [34.836383685134791, 32.092799515148435],
              [34.836695685113398, 32.092803513667683],
              [34.837553686587796, 32.092791508412056],
              [34.838451687950176, 32.092766502710639],
              [34.838885688497612, 32.092758500103322],
            ],
          ],
        },
      },
    ]}
  />
);

export default MapExample;
