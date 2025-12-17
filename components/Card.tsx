// Card Component

export function Card({item}: {item: any}){
    return (
         <div key={item.id} className="flex flex-col justify-between rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-md">
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="whitespace-pre-wrap text-gray-600">{item.content}</p>
                    <p className="mt-4 text-xs text-gray-400">
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
    )
}