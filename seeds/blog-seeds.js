const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet lacus sed ante fringilla sollicitudin nec non nisl. Suspendisse justo lacus, semper vel.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_content: 'Nulla cursus bibendum neque, vitae ornare neque mattis sagittis. Phasellus viverra magna nec aliquam efficitur. Morbi in massa sed felis interdum dapibus. Suspendisse et aliquam neque. Vivamus imperdiet eleifend turpis at dapibus. Maecenas et interdum augue, sit amet tempor tellus.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    blog_content: 'Sed quis erat ante. Nam finibus urna consectetur turpis hendrerit elementum. Fusce commodo sollicitudin nibh, vitae luctus eros fringilla eget. Cras ut lorem ac purus mattis luctus sed sit amet elit. Ut accumsan, lectus eu pellentesque placerat, velit magna porta nulla, ut interdum dui mi ut erat. Cras mollis ligula eget turpis accumsan tristique. Nullam cursus, quam in ornare pretium, massa nisl pulvinar felis, at porta purus quam non mauris. Duis risus nisi, sollicitudin ornare sapien sit amet, posuere placerat urna. Maecenas et turpis congue, fermentum magna sit amet, euismod sapien. Nunc tristique cursus ipsum, malesuada aliquet lectus vehicula a. Praesent eget velit in leo dictum blandit a at arcu. Sed sit amet nisi quis nisi porta hendrerit et ut urna.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    blog_content: ' Aliquam eleifend erat vitae elit sodales luctus. Nam tempor, sem vitae scelerisque mattis, mi eros porttitor libero, nec elementum justo tellus eu nibh. Aliquam luctus placerat eros nec elementum. Integer id arcu lectus. Nulla cursus bibendum neque, vitae ornare neque mattis sagittis. Phasellus viverra magna nec aliquam efficitur. Morbi in massa sed felis interdum dapibus. Suspendisse et aliquam neque. Vivamus imperdiet eleifend turpis at dapibus. Maecenas et interdum augue, sit amet tempor tellus. Pellentesque vitae elementum nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis erat ante. Nam finibus urna consectetur turpis hendrerit elementum. ',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    blog_content: 'Aliquam varius, est eu mollis pulvinar, leo neque viverra augue, non hendrerit est augue blandit orci. Nam pretium, mi vel faucibus finibus, risus dui faucibus diam, sed sollicitudin mauris nisl ut arcu. Aenean ut laoreet nulla. Aenean nec pretium enim, sit amet dapibus mi. Aenean lacus tortor, fringilla eu tempus ut, tempor et tortor. Vestibulum lacinia, risus sed facilisis convallis, leo eros iaculis turpis, at auctor sapien eros eget sem. Mauris non bibendum est. Donec egestas tincidunt lorem, nec ornare eros interdum eget.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog_content: 'Vestibulum in blandit quam. Aenean tempor ut massa vitae ullamcorper. Praesent efficitur urna sit amet risus auctor, eget elementum metus porta. Morbi vitae neque sit amet velit rhoncus vulputate vel et ipsum. Vivamus commodo, elit ultricies laoreet suscipit, orci mi rutrum felis, in blandit urna nulla a erat. Morbi commodo, lectus pharetra eleifend iaculis, arcu elit consectetur diam, et rhoncus ante augue vitae orci. Duis malesuada fermentum elit id aliquet. Duis est est, aliquam ut dui in, euismod vulputate dui. Fusce sodales metus ac condimentum pulvinar. Nullam sollicitudin felis ipsum, a mattis purus faucibus ut. Morbi faucibus neque in sapien elementum, in ornare magna posuere. Duis nisl magna, viverra eu tortor non, mattis tempor sem. In in sem eget ipsum euismod pellentesque.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_content: 'Maecenas rutrum maximus hendrerit. Vivamus libero nulla, pellentesque non luctus vel, faucibus quis arcu. Aliquam varius, est eu mollis pulvinar, leo neque viverra augue, non hendrerit est augue blandit orci. Nam pretium, mi vel faucibus finibus, risus dui faucibus diam, sed sollicitudin mauris nisl ut arcu. Aenean ut laoreet nulla. Aenean nec pretium enim, sit amet dapibus mi. Aenean lacus tortor, fringilla eu tempus ut, tempor et tortor. Vestibulum lacinia, risus sed facilisis convallis, leo eros iaculis turpis, at auctor sapien eros eget sem. Mauris non bibendum est. Donec egestas tincidunt lorem, nec ornare eros interdum eget.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_content: 'Aliquam sed sapien finibus, varius augue et, fringilla diam. Morbi semper arcu vitae tellus tempor, ut tristique nisl auctor. Aliquam efficitur lorem eget placerat tempus. Maecenas semper lectus est, sed condimentum ligula sollicitudin vel. Donec imperdiet mi nec dui sodales porta. Quisque quis est non diam suscipit semper vel in massa. Praesent dapibus viverra cursus',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    blog_content: 'Vestibulum in blandit quam. Aenean tempor ut massa vitae ullamcorper. Praesent efficitur urna sit amet risus auctor, eget elementum metus porta. Morbi vitae neque sit amet velit rhoncus vulputate vel et ipsum. Vivamus commodo, elit ultricies laoreet suscipit, orci mi rutrum felis, in blandit urna nulla a erat. Morbi commodo, lectus pharetra eleifend iaculis, arcu elit consectetur diam, et rhoncus ante augue vitae orci. Duis malesuada fermentum elit id aliquet. Duis est est, aliquam ut dui in, euismod vulputate dui. Fusce sodales metus ac condimentum pulvinar. Nullam sollicitudin felis ipsum, a mattis purus faucibus ut. Morbi faucibus neque in sapien elementum, in ornare magna posuere. Duis nisl magna, viverra eu tortor non, mattis tempor sem. In in sem eget ipsum euismod pellentesque.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    blog_content: 'Sed non tortor consectetur, porta nunc sit amet, congue felis. Donec pellentesque neque scelerisque lectus lobortis, in auctor risus tempus. Suspendisse dolor dolor, vulputate sit amet pretium vitae, interdum a enim. Cras odio sapien, tempor vel ultricies vitae, venenatis id dui. Suspendisse potenti. Pellentesque auctor, lectus sed mattis porttitor, est eros dignissim magna, nec ultricies risus nibh in urna. Ut et est leo. Suspendisse lobortis nisi a vulputate ultrices. Cras rhoncus diam est, nec scelerisque nunc egestas et. Vestibulum efficitur fringilla nulla, et blandit mauris volutpat sit amet. Integer non fringilla massa. Nullam libero dui, viverra vitae vehicula vel, varius et lectus.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_content: 'Fusce sed turpis in elit iaculis auctor sed ut massa. Phasellus nisl metus, efficitur vel ligula at, feugiat elementum neque. Duis volutpat eu nisl ac vulputate. Phasellus sem diam, auctor id mollis eu, cursus vitae arcu. Morbi id sapien nec mauris elementum tincidunt. Suspendisse neque eros, maximus id scelerisque et, commodo ut eros. Fusce pretium eleifend gravida. In ligula ligula, viverra non ullamcorper at, venenatis ut nunc.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    blog_content: 'Integer quis tortor auctor, interdum lectus sit amet, tincidunt nulla. Aenean tempor neque rhoncus, posuere ante sed, hendrerit velit. Curabitur ut feugiat mi, eget facilisis orci. Proin id metus sed turpis varius volutpat sit amet vitae risus. Nam sit amet tortor eros. Proin maximus sit amet lorem vel tempor. Suspendisse a quam eu neque posuere sodales. Sed vestibulum eleifend efficitur. Nulla pharetra finibus tellus, non viverra quam tempor at. Pellentesque nec tortor dolor. Aenean non auctor ipsum.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    blog_content: 'Maecenas eget ultricies est, sagittis finibus velit. Integer nunc urna, blandit quis odio a, finibus pellentesque dolor. Nullam aliquet scelerisque sem et vestibulum. Donec sit amet cursus magna. Praesent id finibus ipsum. Fusce sed volutpat ipsum, vitae faucibus mi. Nunc sit amet risus sit amet diam elementum congue ac a urna. Proin sem felis, fringilla at augue et, laoreet ultricies ligula. Cras vitae pulvinar magna, eu tincidunt quam. Morbi tincidunt iaculis nulla eu porta. Ut pellentesque vitae justo ut condimentum. Integer in varius mauris, sed porta tellus.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    blog_content: 'Etiam bibendum metus nec eleifend tristique. Nam pretium commodo urna, nec gravida turpis luctus eu. Ut euismod commodo dui et scelerisque. Nunc aliquam massa nec urna commodo placerat. Suspendisse elit nisl, eleifend sit amet orci ut, pretium sodales diam. Aenean id suscipit leo. Fusce eget condimentum nibh, a ornare dolor. Vivamus sed ex nec magna rhoncus rutrum.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    blog_content: 'Duis feugiat, lorem vel maximus sollicitudin, quam lectus maximus sapien, vel imperdiet ex quam eu lacus. Proin rhoncus enim quis purus ullamcorper finibus. Sed ipsum lectus, ultricies non felis sit amet, sodales dapibus turpis. Pellentesque interdum in nisl et maximus. Nulla ex quam, fermentum eget mauris et, ultrices tristique tortor. Duis non diam sodales, eleifend sapien eu, lobortis mi. Donec tristique orci in mi placerat, eget pulvinar ex dictum.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    blog_content: 'Aliquam eleifend nunc sit amet mollis gravida. Sed vel tortor elementum, maximus orci eget, sodales purus. Aenean luctus eget nunc non rutrum. Suspendisse a molestie ante. Suspendisse volutpat nulla vel nisl feugiat suscipit. Ut commodo congue aliquet. Donec imperdiet, tortor sed fermentum euismod, lectus libero mattis orci, a pellentesque diam arcu at massa. Proin ullamcorper vulputate nibh et porttitor. Nunc ullamcorper lectus vel diam finibus, congue commodo enim blandit.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_content: 'Curabitur ut mollis urna, vel posuere augue. Nunc ullamcorper, arcu eu viverra dapibus, velit eros mattis velit, a dignissim nibh urna ultrices augue. Sed eu euismod nisi, ultricies accumsan ex. Duis eu laoreet enim, a dictum ligula. Cras cursus scelerisque leo in iaculis. Proin volutpat urna orci, non ullamcorper lorem efficitur sed. Proin tempus nisl et gravida scelerisque. Nullam auctor eget massa eget condimentum. Integer faucibus at velit sed molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et ligula risus. Nam tincidunt consectetur vehicula. Curabitur vehicula id turpis id bibendum.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    blog_content: 'Nam pretium ac nulla vel vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec nunc condimentum, rhoncus arcu nec, scelerisque turpis. Duis tempus quis eros in ornare. Cras sit amet risus nec tellus aliquet elementum. Donec finibus tincidunt ligula, sit amet tempus nibh laoreet eget. Proin et posuere ex, dignissim volutpat orci. Donec finibus nisi ac ligula euismod pharetra. Praesent quis massa aliquam, convallis lacus eu, sollicitudin metus. Fusce pulvinar hendrerit efficitur. Nunc in magna ut metus sollicitudin ultricies ut ut arcu. Vestibulum ac leo nec neque iaculis molestie. Maecenas augue felis, vulputate sit amet finibus at, tempus nec dolor. Sed blandit semper risus, porttitor ultricies odio fringilla quis. Aliquam tempus dui quis metus dignissim, at varius est lobortis.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    blog_content: 'Ut a tincidunt augue, vel lacinia massa. Proin a felis suscipit, rutrum felis vel, maximus neque. Praesent purus metus, interdum vitae congue ac, sollicitudin sed orci. Sed consequat iaculis pulvinar. Fusce semper neque nulla, at congue magna fringilla vel. Phasellus consectetur massa nec nisi mattis, et congue nisl mattis. Ut venenatis auctor purus sed sollicitudin. Duis at nunc imperdiet, ultrices nisi eget, elementum orci.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    blog_content: 'Nam pretium ac nulla vel vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut nec nunc condimentum, rhoncus arcu nec, scelerisque turpis. Duis tempus quis eros in ornare. Cras sit amet risus nec tellus aliquet elementum. Donec finibus tincidunt ligula, sit amet tempus nibh laoreet eget. Proin et posuere ex, dignissim volutpat orci. Donec finibus nisi ac ligula euismod pharetra. Praesent quis massa aliquam, convallis lacus eu, sollicitudin metus. Fusce pulvinar hendrerit efficitur. Nunc in magna ut metus sollicitudin ultricies ut ut arcu. Vestibulum ac leo nec neque iaculis molestie. Maecenas augue felis, vulputate sit amet finibus at, tempus nec dolor. Sed blandit semper risus, porttitor ultricies odio fringilla quis. Aliquam tempus dui quis metus dignissim, at varius est lobortis.',
    user_id: 7
  }
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
