
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CastingSubmission } from "@/types/casting"
import { Badge } from "./ui/badge"
import Image from "next/image"

interface CastingDetailsProps {
    submission: CastingSubmission | null;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export function CastingDetailsDialog({ submission, isOpen, onOpenChange }: CastingDetailsProps) {
  if (!submission) return null;

  const renderArray = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return (
        <div className="flex flex-wrap gap-2">
          {value.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
        </div>
      )
    }
    return <p className="text-muted-foreground">{value}</p>;
  }
  
  const renderPhoto = (url: string, alt: string) => (
    url ? <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={url} alt={alt} width={200} height={200} className="rounded-lg object-cover" />
    </a> : <p className="text-muted-foreground">Not provided</p>
  )

  const additionalPhotos = Array.isArray(submission.data.additionalPhotos) 
    ? submission.data.additionalPhotos 
    : submission.data.additionalPhotos ? [submission.data.additionalPhotos] : [];


  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">{submission.fullName}</DialogTitle>
          <DialogDescription>
            Submitted on {new Date(submission.submittedAt).toLocaleString()}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 py-4">
            {/* Column 1 */}
            <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary border-b pb-2">Basic Info</h3>
                <div><span className="font-medium text-foreground">Email:</span> <a href={`mailto:${submission.email}`} className="text-primary hover:underline">{submission.email}</a></div>
                <div><span className="font-medium text-foreground">Phone:</span> {submission.phone}</div>
                <div><span className="font-medium text-foreground">Age:</span> {submission.age}</div>
                <div><span className="font-medium text-foreground">Location:</span> {submission.data.city}</div>
                <div><span className="font-medium text-foreground">Nationality:</span> {submission.data.nationality}</div>
                <div><span className="font-medium text-foreground">Social:</span> <a href={submission.data.socialLinks} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{submission.data.socialLinks}</a></div>
                
                <h3 className="font-semibold text-lg text-primary border-b pb-2 pt-4">Physical</h3>
                <div><span className="font-medium text-foreground">Height (cm):</span> {submission.data.heightCm}</div>
                <div><span className="font-medium text-foreground">Clothing Size:</span> {submission.data.clothingSize}</div>
                <div><span className="font-medium text-foreground">Shoe Size (EUR):</span> {submission.data.shoeSize}</div>
                <div><span className="font-medium text-foreground">Eye Color:</span> {submission.data.eyesColor}</div>
                <div><span className="font-medium text-foreground">Hair Color:</span> {submission.data.hairColor}</div>
                
                <h3 className="font-semibold text-lg text-primary border-b pb-2 pt-4">Logistics</h3>
                <div><span className="font-medium text-foreground">Rehearsal Availability:</span> {submission.data.rehearsalAvailability}</div>
                <div><span className="font-medium text-foreground">Can Travel:</span> {submission.data.canTravel}</div>
                <div><span className="font-medium text-foreground">Medical Restrictions:</span> {submission.data.medicalRestrictions || 'None'}</div>
            </div>
            {/* Column 2 */}
            <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary border-b pb-2">Experience & Skills</h3>
                <div><span className="font-medium text-foreground">Experience in videos?:</span> {submission.data.hasExperience}</div>
                {submission.data.hasExperience === 'Sí' && <div><span className="font-medium text-foreground">Experience Details:</span> {submission.data.experienceDesc}</div>}
                <div><span className="font-medium text-foreground">Acting Experience:</span> {submission.data.actingExperience}</div>
                <div><span className="font-medium text-foreground">Camera Confidence:</span> {submission.data.cameraConfidence}/5</div>
                <div>
                  <span className="font-medium text-foreground">Dance Skills:</span>
                  {renderArray(submission.data.danceSkills)}
                </div>
                 <div>
                  <span className="font-medium text-foreground">Music Styles:</span>
                  {renderArray(submission.data.musicStyles)}
                </div>
                <div><span className="font-medium text-foreground">Reel Link:</span> <a href={submission.data.reelOrDanceLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{submission.data.reelOrDanceLink}</a></div>
                
                <h3 className="font-semibold text-lg text-primary border-b pb-2 pt-4">Visuals</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-medium text-foreground mb-2">Headshot</p>
                        {renderPhoto(submission.headshot, "Headshot")}
                    </div>
                    <div>
                        <p className="font-medium text-foreground mb-2">Full Body</p>
                        {renderPhoto(submission.fullBodyPhoto, "Full body shot")}
                    </div>
                </div>
                {additionalPhotos.length > 0 && (
                    <div>
                        <p className="font-medium text-foreground mb-2">Additional Photos</p>
                        <div className="flex flex-wrap gap-2">
                            {additionalPhotos.map((photo, index) => (
                                <a key={index} href={photo.url} target="_blank" rel="noopener noreferrer">
                                    <Image src={photo.url} alt={`Additional Photo ${index + 1}`} width={80} height={80} className="rounded-md object-cover" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
