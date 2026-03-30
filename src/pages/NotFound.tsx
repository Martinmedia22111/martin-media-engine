import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const NotFound = () => (
  <>
    <SEO title="Страница не найдена" description="Запрашиваемая страница не найдена" path="/404" noIndex />
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Страница не найдена</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
          Вернуться на главную
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
