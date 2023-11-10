import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://www.recetasdesbieta.com/wp-content/uploads/2018/04/hamburguesas-caseras-1.jpg",
        productos: [{
          nombre:"Hamburguesa con queso",
          precio: 1000,
          descripcion: "",
          imagen: "https://img.cocinarico.es/2020-07/hamburguesa-con-queso-1.jpg"
        },
        {
          nombre:"Hamburguesa especial",
          precio: 1500,
          descripcion: "",
          imagen: "https://media.istockphoto.com/id/617364554/es/foto/hamburguesa-con-papas-fritas.jpg?s=612x612&w=0&k=20&c=40L60qp1Tnkzscd9q6IS3dBmghSiJ8GbVCmkbJvBtRY="
        },
        {
          nombre:"Hamburguesa vegana",
          precio: 1300,
          descripcion: "",
          imagen: "https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/05/hamburguesa-vegetariana.png"
        },
        {
          nombre:"Hamburguesa celíaca",
          precio: 1250,
          descripcion: "",
          imagen: "https://celiplatos.com/wp-content/uploads/2019/10/DSC0374_Celiplatos-7.jpg"
        },
        {
          nombre:"Hamburguesa americana",
          precio: 3500,
          descripcion: "",
          imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TKMWLRYWQFDMJLPYHNIYBVTKDM.jpg"
        },
        {
          nombre:"Medallón platero",
          precio: 2000,
          descripcion: "",
          imagen: "https://cdn0.recetasgratis.net/es/posts/6/9/1/hamburguesas_caseras_con_avena_34196_orig.jpg"
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://www.elespectador.com/resizer/zGywOSIEHqfbrj_yVF-Upui3iMk=/arc-anglerfish-arc2-prod-elespectador/public/D2KL4RRCRJA7RJC5TNULFZEKR4.jpg",
        productos: [
          {
            nombre: 'Pizza común',
            precio: 1000,
            descripcion: "Pizza.",
            imagen:
              'https://www.infobae.com/new-resizer/B5GMrOAfrX4ZocPOavNfyNNHNNw=/420x420/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/08130809/semana-de-la-pizza-1920-3.jpg',
          },
          {
            nombre: 'Pizza especial',
            precio: 1200,
            descripcion: "Típica pizza estilo porteño, con muchos morrones.",
            imagen:
              'https://latabapizzas.com.ar/wp-content/uploads/2021/07/ESPECIAL.jpg',
          },
          {
            nombre: 'Pizza 3 quesos',
            precio: 1300,
            descripcion: "Pizza que combina los mejores quesos: provolone, muzarella y roquefort.",
            imagen:
              'https://us.123rf.com/450wm/015earth/015earth2309/015earth230900093/212372395-una-rebanada-caliente-de-pizza-de-queso-generada-ai.jpg?ver=6',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://i.blogs.es/948245/mousse_yogur/1366_2000.jpg",
        productos: [
          {
            nombre: 'Tiramisú',
            precio: 800,
            descripcion: "Clasico tiramisú al estilo italiano.",
            imagen: 'https://hips.hearstapps.com/hmg-prod/images/tiramisu-1559811943.jpg?crop=1.00xw:0.335xh;0,0.451xh&resize=1200:*',
          },
          {
            nombre: 'Chocotorta',
            precio: 800,
            descripcion: "Porción de chocotorta.",
            imagen:
              'https://www.goya.com/media/7765/argentinean-chocotorta.jpg?quality=80',
          },
          {
            nombre: 'Turrón de Quaker',
            precio: 800,
            descripcion: "Turrón con avena, chocolate y manteca",
            imagen:
              'https://www.paulinacocina.net/wp-content/uploads/2015/04/bizcocho.jpg',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://c8.alamy.com/compes/2j0t957/coca-cola-coca-cola-fanta-sprite-limonada-bebidas-gaseosas-en-botellas-de-plastico-exentas-aisladas-2j0t957.jpg",
        productos: [{
          nombre: 'Agua',
          precio: 100,
          descripcion: "Agua mineral 500cc",
          imagen:
            'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040731_f.jpg',
        },
        {
          nombre: 'Agua Saborizada Naranja',
          precio: 100,
          descripcion: "Agua saborizada marca X 500cc sabor naranja",
          imagen:
            'https://jumboargentina.vtexassets.com/arquivos/ids/620165-800-600?v=637466226210230000&width=800&height=600&aspect=true',
        },
        {
          nombre: 'Fanta Uva',
          precio: 100,
          descripcion: "Fanta 500cc sabor uva",
          imagen:
            'https://latorremx.vtexassets.com/arquivos/ids/184770-800-450?v=638243667366870000&width=800&height=450&aspect=true',
        },]
    }
]
