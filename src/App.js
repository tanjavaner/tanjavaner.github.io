import "./App.css";
import { IntlProvider } from "react-intl";
import enMessages from "./locales/en.json";
import trMessages from "./locales/tr.json";
import Layout from "./layout/Layout";

function App() {
  const locale = "tr";

  const messages = {
    en: enMessages,
    tr: trMessages,
  };

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale] || messages.tr}
      defaultLocale="tr"
    >
      <Layout>
        <div>Test</div>
      </Layout>
    </IntlProvider>
  );
}

export default App;
