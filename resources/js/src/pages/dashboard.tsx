import DashboardComponent from "../components/cards/dasboard";
import Transaction from "../components/tables/transaction";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <DashboardComponent.BotRunningCountCard />
        <DashboardComponent.BotRunningCountCard />
        <DashboardComponent.BotRunningCountCard />
      </div>
      <Transaction />
    </div>
  )
}
