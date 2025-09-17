'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAppStore } from '@/store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency, formatDate } from '@/lib/utils'
import { ArrowLeft, Edit, Trash2, Package, Tag, Palette, Ruler, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { ProductCategory, Season } from '@/types'

const CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: 'abbigliamento', label: 'Abbigliamento' },
  { value: 'accessori', label: 'Accessori' },
  { value: 'calzature', label: 'Calzature' },
  { value: 'intimo', label: 'Intimo' },
]

const SEASONS: { value: Season; label: string }[] = [
  { value: 'primavera-estate', label: 'Primavera-Estate' },
  { value: 'autunno-inverno', label: 'Autunno-Inverno' },
  { value: 'cruise', label: 'Cruise' },
  { value: 'pre-fall', label: 'Pre-Fall' },
]

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { products, orders, deleteProduct, loadData } = useAppStore()
  const [product, setProduct] = useState(products.find(p => p.id === params.id))

  useEffect(() => {
    loadData()
  }, [loadData])

  useEffect(() => {
    const foundProduct = products.find(p => p.id === params.id)
    setProduct(foundProduct)
  }, [products, params.id])

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Prodotto non trovato</h1>
        <p className="text-gray-600 mt-2">Il prodotto richiesto non esiste o è stato eliminato.</p>
        <Link href="/products" className="mt-4 inline-block">
          <Button>Torna ai Prodotti</Button>
        </Link>
      </div>
    )
  }

  const productOrders = orders.filter(order =>
    order.items.some(item => item.productId === product.id)
  )

  const totalQuantityOrdered = productOrders.reduce((sum, order) =>
    sum + order.items
      .filter(item => item.productId === product.id)
      .reduce((itemSum, item) => itemSum + item.quantity, 0), 0
  )

  const totalRevenue = productOrders.reduce((sum, order) =>
    sum + order.items
      .filter(item => item.productId === product.id)
      .reduce((itemSum, item) => itemSum + item.totalPrice, 0), 0
  )

  const minPrice = Math.min(...product.variants.map(v => v.price))
  const maxPrice = Math.max(...product.variants.map(v => v.price))
  const avgMargin = product.variants.length > 0
    ? product.variants.reduce((sum, v) =>
        sum + (v.price > 0 ? ((v.price - v.costPrice) / v.price) * 100 : 0), 0
      ) / product.variants.length
    : 0

  const uniqueColors = Array.from(new Set(product.variants.map(v => v.color)))
  const uniqueSizes = Array.from(new Set(product.variants.map(v => v.size)))

  const handleDeleteProduct = () => {
    const productInOrders = orders.some(order =>
      order.items.some(item => item.productId === product.id)
    )

    if (productInOrders) {
      alert('Impossibile eliminare il prodotto: è utilizzato in uno o più ordini')
      return
    }

    if (confirm('Sei sicuro di voler eliminare questo prodotto?')) {
      deleteProduct(product.id)
      router.push('/products')
    }
  }

  const categoryInfo = CATEGORIES.find(c => c.value === product.category)
  const seasonInfo = SEASONS.find(s => s.value === product.season)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/products">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center">
              <Package className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="font-medium">{product.code}</span>
                <span>•</span>
                <span>{categoryInfo?.label}</span>
                <span>•</span>
                <span>{product.subcategory}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <Link href={`/products/${product.id}/edit`}>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Modifica
            </Button>
          </Link>
          <Button
            variant="destructive"
            onClick={handleDeleteProduct}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Elimina
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informazioni Prodotto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Descrizione</h4>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Dettagli</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Categoria:</span>
                        <span className="font-medium">{categoryInfo?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sottocategoria:</span>
                        <span className="font-medium">{product.subcategory}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stagione:</span>
                        <span className="font-medium">{seasonInfo?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Collezione:</span>
                        <span className="font-medium">{product.collection}</span>
                      </div>
                      {product.targetPrice > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Prezzo Target:</span>
                          <span className="font-medium">{formatCurrency(product.targetPrice)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Creazione</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Creato:</span>
                        <span className="font-medium">{formatDate(product.createdAt)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Aggiornato:</span>
                        <span className="font-medium">{formatDate(product.updatedAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Materials & Care */}
          <Card>
            <CardHeader>
              <CardTitle>Materiali e Cura</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Materiali</h4>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {product.careInstructions.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Istruzioni di Cura</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.careInstructions.map((instruction, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                      >
                        {instruction}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Varianti Prodotto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {product.variants.map((variant) => (
                  <div
                    key={variant.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-900">{variant.sku}</h5>
                        <p className="text-sm text-gray-600">SKU</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{variant.color}</h5>
                        <p className="text-sm text-gray-600">Colore</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{variant.size}</h5>
                        <p className="text-sm text-gray-600">Taglia</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{formatCurrency(variant.price)}</h5>
                        <p className="text-sm text-gray-600">Prezzo vendita</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">
                          {variant.price > 0 && variant.costPrice > 0
                            ? `${(((variant.price - variant.costPrice) / variant.price) * 100).toFixed(1)}%`
                            : '-'
                          }
                        </h5>
                        <p className="text-sm text-gray-600">Margine</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t flex justify-between text-sm text-gray-600">
                      <span>Costo: {formatCurrency(variant.costPrice)}</span>
                      <span>MOQ: {variant.minimumOrderQuantity}</span>
                      {variant.material && <span>Materiale: {variant.material}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Ordini Recenti</CardTitle>
              <Link href={`/orders?product=${product.id}`}>
                <Button variant="ghost" size="sm">
                  Vedi tutti
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {productOrders.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <p>Nessun ordine per questo prodotto</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {productOrders.slice(0, 5).map((order) => {
                    const orderItems = order.items.filter(item => item.productId === product.id)
                    const totalQuantity = orderItems.reduce((sum, item) => sum + item.quantity, 0)
                    const totalValue = orderItems.reduce((sum, item) => sum + item.totalPrice, 0)

                    return (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <Link
                            href={`/orders/${order.id}`}
                            className="font-medium text-blue-600 hover:text-blue-800"
                          >
                            {order.orderNumber}
                          </Link>
                          <p className="text-sm text-gray-600">
                            {formatDate(order.orderDate)} • {totalQuantity} pezzi
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatCurrency(totalValue)}</p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'completato'
                              ? 'bg-green-100 text-green-800'
                              : order.status === 'in-produzione'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Statistiche Vendite</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{productOrders.length}</div>
                <div className="text-sm text-blue-600">Ordini</div>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{totalQuantityOrdered}</div>
                <div className="text-sm text-green-600">Pezzi Ordinati</div>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {formatCurrency(totalRevenue).replace('€', '').trim()}€
                </div>
                <div className="text-sm text-purple-600">Fatturato</div>
              </div>
            </CardContent>
          </Card>

          {/* Product Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Informazioni Prodotto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Varianti Totali</span>
                <span className="font-medium">{product.variants.length}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Colori Disponibili</span>
                <span className="font-medium">{uniqueColors.length}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Taglie Disponibili</span>
                <span className="font-medium">{uniqueSizes.length}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Range Prezzi</span>
                <span className="font-medium">
                  {minPrice === maxPrice
                    ? formatCurrency(minPrice)
                    : `${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}`
                  }
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Margine Medio</span>
                <span className="font-medium">{avgMargin.toFixed(1)}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Variants Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Colori e Taglie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Colori</h4>
                <div className="flex flex-wrap gap-1">
                  {uniqueColors.map((color, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Taglie</h4>
                <div className="flex flex-wrap gap-1">
                  {uniqueSizes.map((size, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Azioni Rapide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href={`/orders/new?product=${product.id}`} className="block">
                <Button className="w-full">
                  <Package className="h-4 w-4 mr-2" />
                  Crea Ordine
                </Button>
              </Link>

              <Link href={`/products/${product.id}/edit`} className="block">
                <Button variant="outline" className="w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Modifica Prodotto
                </Button>
              </Link>

              <Link href={`/orders?product=${product.id}`} className="block">
                <Button variant="outline" className="w-full">
                  Vedi Tutti gli Ordini
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}