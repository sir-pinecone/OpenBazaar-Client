var Backbone = require('backbone');

/* use BCP 47 language tags as the key for each language http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry */

module.exports = Backbone.Model.extend({
  defaults: {
    languages: [
      {
        langName: "English",
        langCode: "en",
       /* Use capitalized keys for widely reused text that must be capitalized */
        Next: "Next",
        IAgree: "I Agree",
        Back: "Back",
        Skip: "Skip",
        Done: "Done",
        Cancel: "Cancel",
        Yes: "Yes",
        No: "No",
        of: "of",
        Sell: "Sell",
        New: "New",
        Excellent: "Excellent",
        Good: "Good",
        Poor: "Poor",
        SKU: "SKU",
        Refurbished: "Refurbished",
        Physical: "Physical",
        Digital: "Digital",
        Service: "Service",
        Visit: "View Page",
        Item: "Item",
        Items: "Items",
        Stores: "Stores",
        Follow: "Follow",
        Feed: "Feed",
        FeedPlaceholder: "A feed of updates from all the pages you follow",
        Unfollow: "Unfollow",
        About: "About",
        NoDescriptionAdded: "No description added",
        AboutEmpty: "About is blank...",
        Followers: "Followers",
        Following: "Following",
        Message: 'Message',
        Store: "Store",
        Edit: "Edit",
        Used: "Used",
        Delete: "Delete",
        ConfirmDelete: "Confirm Delete",
        Website: "Website",
        Guid: "OpenBazaar ID (GUID)",
        Welcome: "Welcome",
        CreateStore: "Become a Store",
        GoToMyPage: "Go to my page",
        SearchForItemsPlaceholder: "Search by name or keyword",
        SearchForPagesPlaceholder: "Search by name or keyword",
        SearchFeedPlaceholder: "Search by handle or GUID",
        SearchForFollowersPlaceholder: "Search by handle or GUID",
        SearchForUsersPlaceholder: "Search by handle or GUID",
        EstDeliveryDomesticPlaceholder: "3-5 Business Days",
        EstDeliveryInternationalPlaceholder: "7-15 Business Days",
        OrderProcessingTimePlaceholder: "1-2 Business Days",
        TermsAndConditionsPlaceholder: "Enter terms and conditions...",
        TitlePlaceholder: "Enter title",
        DescriptionPlaceholder: "Enter description...",
        ReturnPolicyPlaceholder: "Enter return policy...",
        CategoryPlaceholder: "Enter category",
        CategoryHelperText: "Categories are used to group and organize items within your store.",
        KeywordsHelperText: "Setting keywords helps your item to be discovered in the market.",
        ExpirationDateHelperText: "Set a date for the item to automatically be pulled from your store.",
        ClearExpirationDate: "Clear Expiration Date",
        ReturnPolicy: "Return Policy",
        TermsAndConditions: "Terms and Conditions",
        Photos: "Photos",
        Added: "Added",
        Categorization: "Categorization",
        Expiration: "Expiration",
        Search: "Search",
        Email: "Email",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Twitter: "Twitter",
        Snapchat: "Snapchat",
        BUYNOW: "BUY NOW",
        Description: "Description",
        Reviews: "Reviews",
        Shipping: "Addresses",
        Returns: "Returns",
        ReturnsPolicy: "Returns Policy",
        Ampersand: "&",
        ShipsFrom: "Ships From",
        ShipsTo: "Ships To",
        Optional: "Optional",
        Customize: "Customize",
        Save: "Save",
        Changes: "Changes",
        SaveChanges: "Save Changes",
        YourName: "Your name",
        BitcoinReturnAddress: "Bitcoin return address",
        LocalCurrency: "Local currency",
        TimeZone: "Time zone",
        ShipToName: "Name",
        ShipToStreet: "Street",
        ShipToCity: "City",
        ShipToState: "State",
        ShipToPostalCode: "Postal code",
        PostalCode: "Postal code",
        ShipToCountry: "Country",
        EnableNotifications: "Enable notifications",
        EnableSSL: "Enable SSL",
        LibbitcoinServerAddress: "Libbitcoin server address",
        ServerIPPort: "Server IP:Port",
        All: "All",
        Name: "Name",
        Price: "Price",
        Available: "Available",
        Keywords: "Keywords",
        Type: "Type",
        Condition: "Condition",
        NSFW: "NSFW",
        Local: "Local",
        Domestic: "Domestic",
        Location: "Location",
        International: "International",
        Time: "Time",
        Free: "Free",
        Category: "Category",
        ProcessingTime: "Processing Time",
        UploadPhotos: "Upload photos",
        DragOrUploadPhotos: "Drag or upload photos",
        ExpirationDate: "Expires On",
        UploadCoverPhoto: "Upload a cover photo",
        ShortDescription: "Short Description",
        UpTo140Characters: "Up to 140 Characters",
        PrimaryColor: "Primary Color",
        SecondaryColor: "Secondary Color",
        TextColor: "Text Color",
        BackgroundColor: "Background Color",
        NotificationFollow: "is now following you",
        NoNotifications: "No notifications",
        WelcomeToYourPage: "Welcome to your page!",
        SearchForCategory: "Search for category",
        Moderators: "Moderators",
        Categories: "Categories",
        UpTo3: "Up to 3",
        AboutYourStore: "A description of your store",
        AllListings: "All Listings",
        ComingSoon: "Coming Soon",
        LoadingImage: "Loading Image...",
        UploadAvatar: "Upload Avatar",
        SaveAvatar: "Save Avatar",
        errorMessages: {
          saveError: "Data could not be saved.",
          getError: "Data could not be retrieved.",
          missingError: "Some fields are missing or incorrect.",
          serverError: "An incorrect reply was received from the server.",
          userError: "Information for this ID could not be found",
          userNotFoundError: "This person's information is not available. They may have gone offline.",
          notFoundError: "Data could not be loaded for:",
          socketError: "URL for WebSocket failed. Connecting to socket with default address of ws://localhost:18466"
        },
        filters: {
          pagesAllTypes: "All types",
          pagesStores: "Stores",
          pagesMods: "Moderator services",
          pagesBasic: "Basic users",
          listingsCurated: "From stores I follow",
          listingsAll: "From all stores"
        },
        nav: {
          searchPlaceholder: "Enter handle or search",
          myPage: "My Page",
          customizePage:"Customize Page",
          sellItem:"New",
          createListing:"New Listing",
          purchases:"Purchases",
          sales:"Sales",
          cases:"Cases",
          notifications:"Notifications",
          settings:"Settings",
          about:"About OpenBazaar",
          support:"Support OpenBazaar"
        },
        onboarding: {
          intro: "OpenBazaar Configuration",
          theme: "Select a Theme for your Page",
          chooseLanguage: "Select Your Language",
          contributors: "%{smart_count} Contributor |||| %{smart_count} Contributors",
          configure: "Configure your experience",
          disclaimer_title: "Disclaimer",
          disclaimer_body: "OpenBazaar is a network for trading goods and services directly between people - using Bitcoin - without any central organization controlling the platform. This means you are responsible for your own activity on the network.<br /><br />OpenBazaar users are not anonymous by default. Most communications between parties are encrypted, but IP addresses are public and can be associated with activity on the network. Malicious parties could use this information against you; protecting your privacy is your own responsibility.<br /><br />OpenBazaar users must ahdere to the laws in their own legal jurisdiction as well as their conscience. The OpenBazaar developers do not condone - and are not responsible for - any use of the platform for illegal activity.<br /><br />The OpenBazaar community of developers has worked hard to deliver a free platform for trade to the world. But as with any software, bugs will be found. The developers are not responsible for any monetary loss associated with problems in the software.<br /><br />By using OpenBazaar you're responsible for your own actions on the OpenBazaar network.",
          yourCountry: "Select Your Country",
          localCurrency: "Select Your Currency",
          LanguagePlaceholder: "Search for language",
          CountryPlaceholder: "Search for country",
          CurrencyPlaceholder: "Search for currency",
          TimezonePlaceholder: "Search for time zone",
          timeZone: "Select Your Time Zone",
          yourDetails: "Set Your Information",
          handle: "Handle",
          knownAs: "You're currently known as:",
          wouldYou: "Would you like to register an easy to remember handle?",
          registerNew: "Register New",
          recommended: "Recommended Pages to Follow",
          connectExisting: "Connect Existing",
          avatar: "Set an Avatar",
          chooseAvatar: "Select Avatar"
        },
      },
      {
        langName: "Espanol",
        langCode: "sp",
        /* this is just for reference. It was created by Google translate, and is probably very inaccurate. */
        Next: "en Siguiente",
        IAgree: "Estoy de acuerdo",
        Back: "Atr&aacute;s",
        Skip: "Omitir",
        Done: "Hecho",
        Cancel: "Cancelar",
        Yes: "S&iacute;",
        No: "No",
        of: "de",
        Sell: "vendor",
        New: "Nuevo",
        Excellent: "Excelente",
        Good: "Bueno",
        Poor: "Deteriorado",
        SKU: "SKU",
        Refurbished: "Reformado",
        Physical: "F&iacute;sico",
        Digital: "Digital",
        Service: "Servicio",
        Visit: "Ver pagina",
        Item: "Art&iacute;culo",
        Items: "Art&iacute;culos",
        Stores: "Tiendas",
        Follow: "Seguir",
        Feed: "Alimentaci�n",
        FeedPlaceholder: "RSS pr�ximamente",
        Unfollow: "Dejar de seguir",
        About: "Acerca de",
        NoDescriptionAdded: "No hay descripci�n a�adida",
        AboutEmpty: "Acerca de la secci&oacute;n est&aacute; en blanco ...",
        Followers: "Seguidores",
        Following: "Despu�s",
        Message: 'Mensaje',
        Store: "Tienda",
        Edit: "Editar",
        Used: "",
        Delete: "Borrar",
        ConfirmDelete: "Confirmar eliminaci&oacute;n",
        Website: "Sitio Web",
        Guid: "OpenBazaar ID (GUID)",
        Welcome: "Bienvenida",
        CreateStore: "Crear Tienda",
        GoToMyPage: "",
        SearchForItemsPlaceholder: "B�squeda de art�culos",
        SearchForPagesPlaceholder: "B�squeda por palabra clave",
        SearchFeedPlaceholder: "B�squeda por nombre o mango",
        SearchForFollowersPlaceholder: "",
        SearchForUsersPlaceholder: "",
        EstDeliveryDomestic: "",
        EstDeliveryInternational: "",
        TermsAndConditionsPlaceholder: "",
        TitlePlaceholder: "",
        DescriptionPlaceholder: "",
        ReturnPolicyPlaceholder: "",
        CategoryPlaceholder: "",
        CategoryHelperText: "",
        KeywordsHelperText: "",
        ExpirationDateHelperText : "Establecer una fecha para que el art&iacute;culo autom&aacute;ticamente ser&aacute; retirado de su tienda.",
        ClearExpirationDate : "Fecha de Vencimiento Claro",
        ReturnPolicy: "Refund policy",
        TermsAndConditions: "Terms and Conditione",
        Photos: "",
        Added: "",
        Search: "",
        Expiration: "",
        Email: "Correo electr&oacute;nico",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Twitter: "Twitter",
        Snapchat: "Snapchat",
        BUYNOW: "COMPRA AHORA",
        Description: "Descripci&oacute;n",
        Reviews: "Cr&iacute;ticas",
        Shipping: "Direcciones",
        Returns: "Devoluciones",
        ReturnsPolicy: "Pol&iacute;tica de devoluciones",
        Ampersand: "y",
        ShipsFrom: "Ships From",
        ShipsTo: "Realiza env&iacute;os a",
        Optional: "",
        Customize: "Personaliza",
        Save: "Guardar",
        Changes: "Cambios",
        All: "Todo",
        Name: "Nombre",
        Price: "Precio",
        Available: "Disponible",
        Keywords: "Palabras claves",
        Type: "Tipo",
        Condition: "Condici&oacute;n",
        NSFW: "NSFW",
        Local: "Local",
        Domestic: "Interno",
        Location: "Localizaci&oacute;n",
        International: "Internacional",
        Time: "Hora",
        Free: "Gratis",
        Category: "Categor&iacute;a",
        ProcessingTime: "Tiempo de procesamiento",
        UploadPhotos: "Subir fotos",
        DragOrUploadPhotos: "Arrastre o subir fotos",
        UploadCoverPhoto: "Sube una foto de portada",
        ExpirationDate: "Fecha de caducidad",
        ShortDescription: "Breve descripcion",
        UpTo140Characters: "Hasta 140 caracteres",
        PrimaryColor : "Color primario",
        SecondaryColor : "Color secundario",
        TextColor : "Color del texto",
        BackgroundColor : "Color de fondo",
        WelcomeToYourPage: "La bienvenida a su p�gina",
        SearchForCategory: "B&uacute;squeda de categor&iacute;a",
        Moderators: "Moderadores",
        Categories: "Categor&iacute;as",
        UpTo3: "Hasta 3",
        AboutYourStore: "Una descripci&oacute;n de su tienda",
        AllListings: "Todas las listas",
        ComingSoon: "Pr�ximamente",
        SaveChanges: "Guardar Cambios",
        SuNombre: "Tu nombre",
        BitcoinReturnAddress: "Bitcoin remite",
        LocalCurrency: "moneda local",
        TimeZone: "Zona horaria",
        ShipToName: "Buque de nombre",
        ShipToStreet: "Barco a la calle",
        ShipToCity: "Barco a la ciudad",
        ShipToState: "Barco a estado",
        ShipToPostalCode: "Buque de c�digo postal",
        PostalCode: "C�digo postal",
        ShipToCountry: "Barco a otro",
        EnableNotifications: "Activar notificaciones",
        EnableSSL: "Habilitar SSL",
        LibbitcoinServerAddress: "Direcci�n del servidor Libbitcoin",
        ServerIPPort: "Server IP : Puerto",
        LoadingImage: "Cargando Imagen ... ",
        UploadAvatar: "Subir Avatar ",
        SaveAvatar: "Guardar Avatar ",
        errorMessages: {
          saveError: "Los datos no pudo ser salvado.",
          getError: "Los datos no se pudo recuperar.",
          missingError: "Algunos campos se echa en falta o incorrecta.",
          serverError: "Una respuesta incorrecta se recibi&oacute; desde el servidor.",
          userError: "La informaci&oacute;n para este ID no se pudo encontrar",
          userNotFoundError: "La informaci&oacute;n de esta persona no est&aacute; disponible Es posible que hayan ido fuera de l&iacute;nea.",
          notFoundError: "Los datos no pudo ser cargado para:",
          socketError: "URL para WebSocket fall&oacute; Conexi&oacute;n a la toma con la direcci&oacute;n por defecto de ws://localhost:18466 "
        },
        filters: {
          pagesAllTypes: "Todos los tipos",
          pagesStores: "Tiendas",
          pagesMods: "Servicios moderador",
          pagesBasic: "Usuarios b�sicos",
          listingsCurated: "Tiendas sigo",
          listingsAll: "Todas las tiendas"
        },
        nav: {
          searchPlaceholder: "Introduzca un mango o una palabra clave",
          myPage: "Mi p&aacute;gina",
          customizePage:"Personalizar P&aacute;gina",
          sellItem:"Venta de art&iacute;culos",
          purchases:"Las compras",
          sales:"Ventas",
          cases:"Casos",
          notifications:"Notificaciones",
          settings:"Ajustes",
          about:"Acerca OpenBazaar",
          support:"Soporte OpenBazaar"
        },
        onboarding: {
          intro: "Personalice Su OpenBazaar",
          theme: "El tema de la p&aacute;gina",
          chooseLanguage: "Elige tu idioma",
          contributors: "%{smart_count} Colaboradores |||| %{smart_count} Colaboradores",
          configure: "Configure su Experiencia",
          disclaimer_title: "Nota Legal",
          disclaimer_body: "disclaimer text",
          yourCountry: "Tu pa&iacute;s",
          localCurrency: "Moneda Local",
          LanguagePlaceholder: "",
          CountryPlaceholder: "",
          CurrencyPlaceholder: "",
          TimezonePlaceholder: "Seleccione su zona horaria",
          timeZone: "Zona Horaria",
          yourDetails: "Introduzca Sus Domesticatos",
          handle: "Apodo",
          knownAs: "Est&aacute;s conocido como:",
          wouldYou: "&iquest;Quieres registrar una f&aacute;cil de recordar manejar?",
          registerNew: "Registrar Nuevo",
          recommended: "P�ginas Recomienda Seguir",
          connectExisting: "Conecte Existente",
          avatar: "Establecer un Avatar",
          chooseAvatar: "Seleccione avatar"
        }
      }
    ]
  }
});
