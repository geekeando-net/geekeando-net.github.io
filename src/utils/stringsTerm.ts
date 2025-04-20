const stringsServiceTerm = [
    {
        icon: "mdi:file-document-multiple",
        title: '1. Aceptación de los Términos',
        text: '<p class="text-neutral-400">Al acceder y utilizar <span class="text-amber-400 font-medium">Geekeando</span> (el "Servicio"), usted acepta cumplir con estos Términos de Servicio ("Términos"). Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.</p>',
    },
    {
        icon: "mdi:book-alphabet",
        title: '2. Definiciones Clave',
        text: '<ul class="text-neutral-400 space-y-3 list-disc pl-5"><li> <span class="font-medium text-neutral-300">"Servicio"</span> se refiere al sitio web Geekeando y todos sus contenidos, características y funcionalidades.</li><li><span class="font-medium text-neutral-300">"Usuario"</span> es cualquier persona que accede o utiliza el Servicio.</li><li><span class="font-medium text-neutral-300">"Contenido"</span> incluye texto, imágenes, videos y cualquier otro material disponible en el Servicio.</li></ul>',
    },
    {
        icon: "mdi:shield-check",
        title: '3. Uso Aceptable',
        text: '<p class="text-neutral-400 mb-3">Al utilizar Geekeando, usted acepta:</p><ul class="text-neutral-400 space-y-2 list-disc pl-5 mb-4"><li>Utilizar el Servicio solo para fines legales</li><li>No interferir con la seguridad del sitio</li><li>No realizar actividades de scraping o minería de datos</li><li>Respetar los derechos de propiedad intelectual</li></ul><div class="p-4 rounded-lg bg-neutral-800 border-l-4 border-red-500"><p class="text-sm text-neutral-300"><Icon name="mdi:alert-octagon" class="inline h-5 w-5 text-red-400 mr-2" /><strong>Prohibido:</strong> Cualquier uso que dañe, sobrecargue o perjudique el Servicio o a otros usuarios.</p></div>',
    },
    {
        icon: "mdi:account-key",
        title: '4. Cuentas de Usuario',
        text: '<p class="text-neutral-400 mb-3">Para acceder a ciertas funciones, deberá crear una cuenta. Usted es responsable de:</p><ul class="text-neutral-400 space-y-2 list-disc pl-5 mb-4"><li>Mantener la confidencialidad de sus credenciales</li><li>Toda actividad que ocurra bajo su cuenta</li><li>Proveer información precisa y actualizada</li></ul><p class="text-neutral-400">Al crear una cuenta, usted acepta recibir correos electrónicos de Geekeando para confirmar su cuenta y proporcionar actualizaciones importantes. Puede cancelar su suscripción en cualquier momento.</p>',
    },
    {
        icon: "mdi:comment-text-multiple",
        title: '5. Contenido Generado por Usuarios',
        text: '<p class="text-neutral-400 mb-3">Usted conserva los derechos de cualquier contenido que envíe, pero nos otorga una licencia global para:</p><ul class="text-neutral-400 space-y-2 list-disc pl-5 mb-4"><li>Mostrar, distribuir y modificar su contenido</li><li>Utilizarlo para mejorar nuestros servicios</li></ul><p class="text-neutral-400">No aceptamos contenido ilegal, ofensivo o que infrinja derechos de terceros.</p>',
    },
    {
        icon: "mdi:copyright",
        title: '6. Propiedad Intelectual',
        text: '<p class="text-neutral-400 mb-4">Todo el contenido de Geekeando (excepto el generado por usuarios) está protegido por derechos de autor, marcas registradas y otras leyes de propiedad intelectual.</p><div class="p-4 rounded-lg bg-neutral-800 border-l-4 border-amber-500"><p class="text-sm text-neutral-300"><Icon name="mdi:creative-commons" class="inline h-5 w-5 text-amber-400 mr-2" />Puede compartir nuestro contenido con atribución, pero no está permitida su reproducción comercial sin autorización.</p></div>',
    },
    {
        icon: "mdi:scale-balance",
        title: '7. Limitación de Responsabilidad',
        text: '<p class="text-neutral-400">Geekeando no garantiza la precisión, actualidad, completitud o validez de cualquier contenido. Usted asume el riesgo de utilizar el Servicio.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '8. Privacidad',
        text: '<p class="text-neutral-400">Nuestro <a href="/politica-privacidad" class="text-amber-400 hover:underline">Política de Privacidad</a> describe cómo recopilamos, utilizamos y protegemos su información personal.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '9. Cambios en los Términos',
        text: '<p class="text-neutral-400">Geekeando se reserva el derecho de actualizar o modificar estos Términos en cualquier momento. Le notificaremos de cambios importantes a través de correo electrónico o notificaciones en el Servicio.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '10. Contacto',
        text: '<p class="text-neutral-400">Para cualquier pregunta sobre estos Términos, por favor contáctanos a través de nuestro <a href="/contact" class="text-amber-400 hover:underline">formulario de contacto</a>.</p>',
    },
];

const stringPrivacyTerm = [
    {
        icon: "mdi:shield-check",
        title: '1. Introducción',
        text: '<p class="text-neutral-400">En Geekeando, valoramos y protegemos su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios relacionados.</p>',
    },
    {
        icon: "mdi:database-eye",
        title: '2. Información que Recopilamos',
        text: '<p class="text-neutral-400 mb-3">Recopilamos información personal que usted nos proporciona voluntariamente cuando utiliza nuestro sitio web o se comunica con nosotros.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '3. Uso de la Información',
        text: '<p class="text-neutral-400 mb-3">Utilizamos su información para mejorar nuestros servicios, personalizar su experiencia y comunicarnos con usted. No compartimos su información con terceros para marketing sin su consentimiento.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '4. Compartir Información',
        text: '<p class="text-neutral-400 mb-3">No compartimos su información personal con terceros para marketing sin su consentimiento. Sin embargo, podemos compartir información agregada o anónima con terceros para propósitos estadísticos o de análisis.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '5. Cookies y Tecnologías Similares',
        text: '<p class="text-neutral-400 mb-3">Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '6. Cambios en la Política',
        text: '<p class="text-neutral-400">Geekeando se reserva el derecho de actualizar o modificar esta Política en cualquier momento. Le notificaremos de cambios importantes a través de correo electrónico o notificaciones en el Servicio.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '7. Contacto',
        text: '<p class="text-neutral-400">Para cualquier pregunta sobre esta Política, por favor contáctanos a través de nuestro <a href="/contact" class="text-amber-400 hover:underline">formulario de contacto</a>.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '8. Uso de Cookies',
        text: '<p class="text-neutral-400 mb-3">Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '9. Cambios en la Política',
        text: '<p class="text-neutral-400">Geekeando se reserva el derecho de actualizar o modificar esta Política en cualquier momento. Le notificaremos de cambios importantes a través de correo electrónico o notificaciones en el Servicio.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '10. Contacto',
        text: '<p class="text-neutral-400">Para cualquier pregunta sobre esta Política, por favor contáctanos a través de nuestro <a href="/contact" class="text-amber-400 hover:underline">formulario de contacto</a>.</p>',
    },
];

const stringsConditionsTerm = [
    {
        icon: "mdi:shield-check",
        title: '1. Introducción',
        text: '<p class="text-neutral-400">Bienvenido/a a Geekeando. Al acceder y utilizar nuestro sitio web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestro sitio.</p>',
    },
    {
        icon: "mdi:database-eye",
        title: '2. Información que Recopilamos',
        text: '<p class="text-neutral-400 mb-4">Geekeando es una plataforma dedicada a contenido sobre tecnología, gaming y cultura geek. Al utilizar nuestro sitio, aceptas:</p><ul class="text-neutral-400 space-y-2 list-disc pl-5"><li>No utilizar el sitio para fines ilegales o no autorizados</li><li>No violar ninguna ley local o internacional</li><li>No infringir nuestros derechos de propiedad intelectual</li><li>No enviar contenido malicioso o spam</li></ul>',
    },
    {
        icon: "mdi:shield-check",
        title: '3. Uso de la Información',
        text: '<p class="text-neutral-400">Al crear una cuenta en Geekeando, eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Aceptas notificarnos inmediatamente de cualquier uso no autorizado de tu cuenta.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '4. Compartir Información',
        text: '<p class="text-neutral-400 mb-4">Todo el contenido publicado en Geekeando (artículos, imágenes, logos, diseño) es propiedad de Geekeando o de sus respectivos licenciantes y está protegido por leyes de derechos de autor.</p><div class="p-4 rounded-lg bg-neutral-800 border-l-4 border-amber-400"><p class="text-sm text-neutral-300"><Icon name="mdi:alert-circle" class="inline h-5 w-5 text-amber-400 mr-2" />reproducción total sin autorización.</p></div>',
    },
    {
        icon: "mdi:shield-check",
        title: '5. Cookies y Tecnologías Similares',
        text: '<p class="text-neutral-400">Geekeando no será responsable por ningún daño directo, indirecto, incidental o consecuencial que resulte del uso o la imposibilidad de usar nuestro sitio o su contenido.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '6. Cambios en la Política',
        text: '<p class="text-neutral-400">Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.</p>',
    },
    {
        icon: "mdi:shield-check",
        title: '7. Contacto',
        text: '<p class="text-neutral-400">Estos términos se regirán e interpretarán de acuerdo con las leyes de [país/estado], sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>',
    },
];

const stringsCookiesTerm = [
    {
        icon: "mdi:cookie",
        title: '1. ¿Qué son las cookies?',
        text: '<p class="text-neutral-400">Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo para almacenar información sobre su preferencias y actividad. En <span class="text-amber-400 font-medium">Geekeando</span> utilizamos cookies y tecnologías similares para mejorar su experiencia.</p>',
    },
    {
        icon: "mdi:cookie-settings",
        title: '2. Tipos de cookies que utilizamos',
        text: '<CookieTable /><div class="mt-4 p-4 rounded-lg bg-neutral-800 border-l-4 border-amber-500"><p class="text-sm text-neutral-300"><Icon name="mdi:shield-alert" class="inline h-5 w-5 text-amber-400 mr-2" /><strong>Cookies esenciales:</strong> No puede desactivarlas ya que son necesarias para el funcionamiento básico del sitio.</p></div>',
    },
    {
        icon: "mdi:cog",
        title: '3. Cómo gestionar cookies',
        text: '<p class="text-neutral-400 mb-3">Puede controlar y/o eliminar las cookies como desee:</p><ul class="text-neutral-400 space-y-2 list-disc pl-5 mb-4"><li><strong>Configuración del navegador:</strong> La mayoría de navegadores permiten bloquear o eliminar cookies. Consulte <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">aboutcookies.org</a> para instrucciones.</li><li><strong>Herramienta de consentimiento:</strong> Utilice nuestro banner de cookies para personalizar sus preferencias.</li><li><strong>Herramientas de terceros:</strong> Extensiones como Ghostery o Privacy Badger.</li></ul><p class="text-neutral-400">Tenga en cuenta que deshabilitar cookies puede afectar la funcionalidad de nuestro sitio y otros que visite.</p>',
    },
    {
        icon: "mdi:account-group",
        title: '4. Cookies de terceros',
        text: '<p class="text-neutral-400 mb-3">Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas:</p><ul class="text-neutral-400 space-y-2 list-disc pl-5 mb-4"><li><strong>Google Analytics:</strong> Para analizar el uso del sitio (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">Política de Privacidad</a>)</li><li><strong>YouTube:</strong> Para incrustar videos (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">Política de Privacidad</a>)</li><li><strong>Redes sociales:</strong> Para compartir contenido (<a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">Ejemplo Facebook</a>)</li></ul>',
    },
    {
        icon: "mdi:update",
        title: '<p class="text-neutral-400">Podemos actualizar esta Política de Cookies periódicamente. Le recomendamos revisar esta página para estar informado sobre cómo usamos las cookies.</p>',
    },
];


export default {
    stringsServiceTerm,
    stringPrivacyTerm,
    stringsConditionsTerm,
    stringsCookiesTerm
};