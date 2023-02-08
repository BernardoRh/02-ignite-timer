import { useContext } from 'react'
import { CyclesContex } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

export function History() {
  const { cycles } = useContext(CyclesContex)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interuptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.interuptedDate && !cycle.finishedDate && (
                      <Status statusColor="yellow">Em Andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Bernardo R. Horbach</td>
            </tr>
          </tfoot>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
