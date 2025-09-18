import { TaskManager } from "@/components/TaskManager";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Welcome to TaskFlow
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A modern React application showcasing component architecture, state management, 
            API integration, and beautiful design with Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              React 18
            </div>
            <div className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              TypeScript
            </div>
            <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Tailwind CSS
            </div>
            <div className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
              Vite
            </div>
          </div>
        </div>

        {/* Task Manager */}
        <TaskManager />
      </div>
    </main>
  );
};

export default Index;
