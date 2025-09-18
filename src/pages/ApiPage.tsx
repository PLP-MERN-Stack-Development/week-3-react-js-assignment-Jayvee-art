import { ApiExplorer } from "@/components/ApiExplorer";

const ApiPage = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">API Explorer</h1>
          <p className="text-muted-foreground">
            Explore data from JSONPlaceholder API with search, pagination, and real-time updates.
          </p>
        </div>
        <ApiExplorer />
      </div>
    </main>
  );
};

export default ApiPage;